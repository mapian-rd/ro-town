import { Atk, Dex, Hp, HpPercent, Int, Luk, Matk } from "../constraint/attributeType";
import { doramClass, noviceClass } from "../constraint/class";
import { Vit } from "../constraint/status";
import { rWeapon } from "../Constraints";
import { finalMagicDmg, finalMATK, maxMATK, minMATK, refineBonusMATK, refineMATK, skillMagicDmg, statusMATK, varianceMATK } from "../formula";
import { calHp, caljobHp } from "../formula/Hp";
import { AttributeType } from "./attributeType";
import { JobClass } from "./class";
import { Attribute, Equipment } from "./Item";
import { WeaponType } from "./itemType";
import { Monster } from "./monster";
import { Skill } from "./skill";
import { Status, StatusType } from "./status";

export class CharacterModel {
    name: string = "Novice"
    clazz: JobClass = noviceClass
    baseLv: number = 1
    jobLv: number = 1
    status: Status = new Status()
    equipments: Map<string, Equipment> = new Map()
    softDef: number = 0
    hardDef: number = 0
    softMDef: number = 0
    hardMdef: number = 0

    static calRemainStatusPoint(character: CharacterModel): number {
        return 1000;
    }

    static getBonusStatus(character: CharacterModel, type: StatusType): number {
        return character.clazz.getBonus(character.jobLv, type)
    }

    static getfinalStatus(character: CharacterModel, type: StatusType): number {
        return character.status.get(type) + CharacterModel.getBonusStatus(character, type)
    }

    static findAttribute(character: CharacterModel, type: AttributeType): Attribute[] {
        let equipmentArray = Array.from(character.equipments.values())
        return equipmentArray.flatMap(equipment => {
            if ((type === Atk || type === Matk) && equipment.type instanceof WeaponType) {
                return []
            }
            return Equipment.findAttribute(equipment, type, equipmentArray)
        })


    }

    static sumAttribute(character: CharacterModel, type: AttributeType): number {
        return CharacterModel.findAttribute(character, type)
            .reduce((sum, attribute) => sum + attribute.value, 0)
    }

    static calAspd(character: CharacterModel): number {
        return 193
    }

    static calHp(character: CharacterModel): number {
        let jobHp;
        if (character.clazz.baseHps) {
            jobHp = character.clazz.baseHps[character.baseLv]
        } else {
            jobHp = caljobHp(
                character.baseLv,
                character.clazz.baseHp,
                character.clazz.hpJobA,
                character.clazz.hpJobB
            )
        }
        return calHp(
            jobHp,
            this.getfinalStatus(character, Vit),
            character.clazz.isTrans ? 1.25 : 1,
            this.sumAttribute(character, Hp),
            this.sumAttribute(character, HpPercent)
        )
    }

    static finalDmg(character: CharacterModel, monster: Monster, skill: Skill, skillLevel: number = 1): number[] {
        const equipmentArray = Array.from(character.equipments.values())
        const type = Matk
        const weapon = character.equipments.get(rWeapon)
        if (!weapon) {
            return [0, 0]
        }
        const weaponAtk = Equipment.findAttribute(weapon, type, equipmentArray, false)
            .reduce((sum, attribute) => sum + attribute.value, 0)
        const equipmentLevel = weapon.equipmentLevel
        const refineLevel = weapon.refineLevel
        const isRange = (weapon.type as WeaponType).isRange
        const refineA = refineMATK(refineLevel, equipmentLevel, isRange)
        const varinace = varianceMATK(weaponAtk, refineA, equipmentLevel)
        const finalInt = character.status.int + CharacterModel.sumAttribute(character, Int)
        const finalDex = character.status.dex + CharacterModel.sumAttribute(character, Dex)
        const finalLuk = character.status.luk + CharacterModel.sumAttribute(character, Luk)
        const statusA = statusMATK(character.baseLv, finalInt, finalDex, finalLuk)
        const refineBonus = refineBonusMATK(isRange, equipmentLevel, refineLevel)
        const min = minMATK(statusA, varinace)
        const max = maxMATK(statusA, varinace, refineBonus)
        const range = [min, max]
        const equipMatk = CharacterModel.sumAttribute(character, Matk)
        return range.map(value => finalMATK(value, 1, equipMatk))
            .map(final => skillMagicDmg(final, skill.percent[skillLevel]))
            .map(skilldmg => finalMagicDmg(skilldmg, 0, monster.softMDef(), monster.hardDef))
    }
}