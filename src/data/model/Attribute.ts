import { classList, getClass } from "../constraint/class";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Character } from "./Characterv2";
import { Condition, NumberCondition } from "./Condition";
import { CraftEqiupment } from "./CraftEquipment";
import { ActiveSkill, SkillEnum } from "./skill";
import { Status } from "./status";

export class Attribute {
    type: AttributeTypeEnum;
    skill?: SkillEnum
    /**
     * Formula
     * 1. Basic Math +-*\/
     * 2. Every n Refine <this.Rf/n>
     * 3. Every n Refine of Item <I$id.Rf/n>
     * 4. Every n Dex <dex/n>
     * 5. Skill level <S$id.Lv>
     * 6. Every n Base Lv <BaseLv/n>
     * 7. Refine level <this.Rf/1>
     * 8. Item Refine level <I$id.Rf/1>
     */
    formulaText: string = "";
    max?: string;
    condition?: Condition;

    constructor(type: AttributeTypeEnum) {
        this.type = type
    }

    static checkAttribute(attribute: Attribute, character: Character): boolean {
        if (!attribute.condition) return true;
        console.log("checkAttribute class", attribute.condition.class)
        if (attribute.condition.class) {
            if (attribute.condition.class !== character.clazz.enum) return false;
        }
        console.log("checkAttribute itemList", attribute.condition.itemList)
        if (attribute.condition.itemList) {
            for (let i = 0; i < attribute.condition.itemList.length; i++) {
                const condition = attribute.condition.itemList[i]
                const equipmentList = Array.from(character.equipmentMap.values());
                const item = equipmentList.find(item => {
                    if (!item) return false
                    return CraftEqiupment.getIdList(item).includes(condition.itemId)
                }
                );
                if (!item) return false;
                console.log("checkAttribute item check 123", item.refineLevel)
                const result = NumberCondition.check(condition, item.refineLevel);
                console.log("checkAttribute item result", result)
                if (!result) return false;
            }
        }
        if (attribute.condition.skillList) {
            for (let i = 0; i < attribute.condition.skillList.length; i++) {
                const condition = attribute.condition.skillList[i]
                const activeSkill = character.clazz.activeSkill.find(skill => skill === condition.skill)
                const buffSkill = character.clazz.buffSkill.find(skill => skill === condition.skill)
                const passiveSkill = character.clazz.passiveSkill.find(skill => skill === condition.skill)
                if (!activeSkill && !buffSkill && !passiveSkill) {
                    return false
                }
            }
        }
        console.log("checkAttribute statusList", attribute.condition.statusList)
        if (attribute.condition.statusList) {
            for (let i = 0; i < attribute.condition.statusList.length; i++) {
                const condition = attribute.condition.statusList[i]
                const result = NumberCondition.check(condition, Status.get(character.status, condition.statusType))
                if (!result) return false;
            }
        }
        console.log("checkAttribute baseLv", attribute.condition.baseLv)
        if (attribute.condition.baseLv) {
            const result = NumberCondition.check(attribute.condition.baseLv, character.baseLv)
            if (!result) return false;
        }

        if (attribute.condition.equip) {
            const result = Array.from(character.equipmentMap).find(([key, value]) => {
                return value?.item?.type === attribute.condition?.equip
            })
            if (!result) return false;
        }
        if (attribute.condition.refineSum) {
            let sum = 0
            attribute.condition.refineSum.items.forEach(id => {
                const item = Array.from(character.equipmentMap.values()).find(value => value?.itemId === id)
                if (item) {
                    sum += item.refineLevel
                }
            })
            const result = NumberCondition.check(attribute.condition.refineSum, sum)
            if (!result) return false;
        }
        return true
    }

    static check(craftEqiupment: CraftEqiupment, attribute: Attribute, character: Character): boolean {
        console.log("checkAttribute", craftEqiupment, attribute, character)
        if (!attribute.condition) return true;
        if (!this.checkAttribute(attribute, character)) return false
        if (attribute.condition.refireList) {
            console.log("checkAttribute refireList")
            for (let i = 0; i < attribute.condition.refireList.length; i++) {
                const condition = attribute.condition.refireList[i]
                const result = NumberCondition.check(condition, craftEqiupment.refineLevel);
                console.log("checkAttribute refireList", condition, craftEqiupment.refineLevel, result)
                if (!result) {
                    console.log("checkAttribute return false")
                    return false;
                }
            }
        }
        return true
    }
}


export interface AttributeList {
    type: AttributeTypeEnum;
    skill?: SkillEnum
    /**
     * Formula
     * 1. Basic Math +-*\/
     * 2. Every n Refine <this.Rf/n>
     * 3. Every n Refine of Item <I$id.Rf/n>
     * 4. Every n Dex <dex/n>
     * 5. Skill level <S$id.Lv>
     * 6. Every n Base Lv <BaseLv/n>
     * 7. Refine level <this.Rf/1>
     * 8. Item Refine level <I$id.Rf/1>
     */
    formulaText: string[]
    max?: string[];
    condition?: Condition;
}

export interface AttributeName extends Attribute {
    name: string
}