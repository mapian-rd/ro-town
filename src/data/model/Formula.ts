import { attributeList } from "../constraint/attributeType";
import { AttributeType } from "./attributeType";
import { Character } from "./Characterv2";
import { CraftEqiupment } from "./CraftEquipment";
import { EquipmentSlot } from "./EquipmentSlot";
import { Item } from "./Itemv2";
import { ActiveSkill, PassiveSkill, Skill, SkillEnum } from "./skill";
import { Status } from "./status";
let stringMath = require('string-math');

function getParameter(text: string, equipmentMap: Map<EquipmentSlot, CraftEqiupment | undefined>, status: Status, skill: Skill[], baseLv: number, craftEqiupment?: CraftEqiupment): string {
    if (craftEqiupment && text.includes("this.Rf")) {
        const slash = text.indexOf("/")
        const step = Number.parseInt(text.substring(slash + 1))
        return Math.floor(craftEqiupment.refineLevel / step).toString()
    }
    if (text.includes("I$")) {
        const dotIndex = text.indexOf(".Rf/")
        const id = text.substring(3, dotIndex)
        const item = Array.from(equipmentMap.values()).find(item => item?.itemId === id)
        if (item) {
            const slash = text.indexOf("/")
            const step = Number.parseInt(text.substring(slash + 1))
            return Math.floor(item.refineLevel / step).toString()
        }
        return "0"
    }
    if (text.includes("S$")) {
        const dotIndex = text.indexOf(".Lv")
        const id = text.substring(3, dotIndex)
        const item = skill.find(item => item?.id === id)
        if (item) {
            return item.maxLv.toString()
        }
        return "0"
    }
    if (text.includes("BaseLv")) {
        const slash = text.indexOf("/")
        const step = Number.parseInt(text.substring(slash + 1))
        return Math.floor(baseLv / step).toString()
    }
    const match = text.match(/str|agi|vit|int|dex|luk/)
    if (match) {
        const slash = text.indexOf("/")
        const step = Number.parseInt(text.substring(slash + 1))
        if (match[0] === "str") {
            return Math.floor(status.str / step).toString()
        }
        if (match[0] === "agi") {
            return Math.floor(status.agi / step).toString()
        }
        if (match[0] === "vit") {
            return Math.floor(status.vit / step).toString()
        }
        if (match[0] === "int") {
            return Math.floor(status.int / step).toString()
        }
        if (match[0] === "dex") {
            return Math.floor(status.dex / step).toString()
        }
        if (match[0] === "luk") {
            return Math.floor(status.luk / step).toString()
        }
    }
    return "0"
}

export function calString(array: FormulaString[], equipmentMap: Map<EquipmentSlot, CraftEqiupment | undefined>, status: Status, skill: Skill[] = [], baseLv: number): DescriptionNumber {
    let number = 0
    let description = ""
    array.forEach(item => {
        const craftEqiupment = Array.from(equipmentMap.values()).find(equipment => equipment?.id === item.id) ?? item.item
        const text = Array.from(item.text.matchAll(/(<([^<>]*)>)?([^<]*)/g)).flatMap(item => {
            let s = ""
            if (item[1] && item[1] !== "") {
                s += getParameter(item[1], equipmentMap, status, skill, baseLv, craftEqiupment)
            }
            if (item[3] && item[3] !== "") {
                s += item[3]
            }
            return s
        }).join('')
        let cal = stringMath(text)

        let max: number | undefined
        if (item.max) {
            const maxText = Array.from(item.max.matchAll(/(<([^<>]*)>)?([^<]*)/g)).flatMap(item => {
                let s = ""
                if (item[1] && item[1] !== "") {
                    s += getParameter(item[1], equipmentMap, status, skill, baseLv, craftEqiupment)
                }
                if (item[3] && item[3] !== "") {
                    s += item[3]
                }
                return s
            }).join('')
            max = stringMath(maxText)
            cal = Math.min(cal, Number(max))
        }

        number += cal
        if (description !== "") {
            description += " + "
        }
        description += `${cal}(${item.name})`
    })
    return new DescriptionNumber(number, description);
}

export class FormulaString {
    text: string;
    id: string;
    name: string;
    max?: string;
    skill?: SkillEnum;
    item?: CraftEqiupment;

    constructor(id: string, text: string, name: string, max?: string, skill?: SkillEnum, item?: CraftEqiupment) {
        this.id = id;
        this.text = text;
        this.name = name;
        this.max = max;
        this.skill = skill;
        this.item = item;
    }
}

export class DescriptionNumber {
    number: number;
    description: string;
    name?: string;

    min?: number
    max?: number

    constructor(number: number = 0, description: string = "0") {
        this.number = number
        this.description = description
    }

    plus(number: number, name: string, index: number = 1) {
        this.number += number
        const description = `${number}(${name})`
        if (this.min && this.max) {
            this.min += number
            this.max += number
        }
        if (index === 0) {
            this.description = description + " + " + this.description
        } else {
            this.description = this.description + " + " + description
        }
    }

    plusNumber(number: DescriptionNumber, index: number = 1) {
        this.number += number.number
        if (this.min && this.max) {
            this.min += number.number
            this.max += number.number
        }
        if (index === 0) {
            this.description = number.description + " + " + this.description
        } else {
            this.description = this.description + " + " + number.description
        }
    }

    variance(min: number, max: number, name: string, index: number = 1) {
        if (!this.min) {
            this.min = this.number
        }
        this.min += min
        if (!this.max) {
            this.max = this.number
        }
        this.max += max
        this.number += max
        const description = `${min}~${max}(${name})`
        if (index === 0) {
            this.description = description + " + " + this.description
        } else {
            this.description = this.description + " + " + description
        }
    }

    linePlus(number: DescriptionNumber, name: string, index: number = 1) {
        const description = `${name} = ${number.description}`
        let lineBreak = ""
        if (this.description !== "") {
            lineBreak = "\n\r"
        }
        if (index === 0) {
            this.description = description + lineBreak + this.description
        } else {
            this.description = this.description + lineBreak + description
        }
    }

    line(number: number, name: string, index: number = 1) {
        const description = `${name} = ${number}`
        let lineBreak = ""
        if (this.description !== "") {
            lineBreak = "\n\r"
        }
        if (index === 0) {
            this.description = description + lineBreak + this.description
        } else {
            this.description = this.description + lineBreak + description
        }
    }
}