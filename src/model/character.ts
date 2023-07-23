import { Aspd, AspdPercent, Atk, Critical, Flee, Hit, Hp, HpPercent, Matk, SoftDef, SoftDefPercent, SoftMdef, SoftMdefPercent, Sp, SpPercent } from "../constraint/attributeType";
import { doramClass, noviceClass } from "../constraint/class";
import { Vit as VitStatus, Int as IntStatus, Str, Dex, Luk, Int, Agi, Vit } from "../constraint/status";
import { lWeapon, rWeapon } from "../Constraints";
import { finalMagicDmg, finalMATK, maxMATK, minMATK, refineATK, refineBonusMATK, refineMATK, skillMagicDmg, statusAtk, statusMATK, varianceMATK } from "../formula";
import { calAspd } from "../formula/Aspd";
import { calCrit } from "../formula/Critical";
import { calSoftDef, calSoftMdef } from "../formula/Def";
import { calFlee } from "../formula/Flee";
import { calHit } from "../formula/Hit";
import { calHp, caljobHp } from "../formula/Hp";
import { caljobSp, calSp } from "../formula/Sp";
import { calRemainStatusPoint } from "../formula/StatusPoint";
import { AttributeType } from "./attributeType";
import { JobClass } from "./class";
import { Attribute, Equipment } from "./Item";
import { Shield, WeaponType } from "./itemType";
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

    static getBonusStatus(character: CharacterModel, type: StatusType): number {
        return character.clazz.getBonus(character.jobLv, type)
    }

    static getfinalStatus(character: CharacterModel, type: StatusType): number {
        console.debug(type.name + " " + character.status.get(type) + " " + CharacterModel.getBonusStatus(character, type))
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

    static calHp(character: CharacterModel): number {
        console.log("calHp")
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
            this.getfinalStatus(character, VitStatus),
            character.clazz.isTrans ? 1.25 : 1,
            this.sumAttribute(character, Hp),
            this.sumAttribute(character, HpPercent)
        )
    }

    static calSp(character: CharacterModel): number {
        let jobSp;
        if (character.clazz.baseSps) {
            jobSp = character.clazz.baseSps[character.baseLv]
        } else {
            jobSp = caljobSp(
                character.baseLv,
                character.clazz.baseSp,
                character.clazz.spJob,
            )
        }
        return calSp(
            jobSp,
            this.getfinalStatus(character, IntStatus) + this.sumAttribute(character, IntStatus),
            character.clazz.isTrans ? 1.25 : 1,
            this.sumAttribute(character, Sp),
            this.sumAttribute(character, SpPercent)
        )
    }

    static calHit(character: CharacterModel): number {
        const finalDex = this.getfinalStatus(character, Dex) + this.sumAttribute(character, Dex);
        const finalLuk = this.getfinalStatus(character, Luk) + this.sumAttribute(character, Luk);
        const bonus = this.sumAttribute(character, Hit)
        return calHit(character.baseLv, finalDex, finalLuk, bonus)
    }

    static calCrit(character: CharacterModel): number {
        const finalLuk = this.getfinalStatus(character, Luk) + this.sumAttribute(character, Luk);
        const bonus = this.sumAttribute(character, Critical)
        return calCrit(finalLuk, bonus)
    }

    static calFlee(character: CharacterModel): number {
        const finalAgi = this.getfinalStatus(character, Agi) + this.sumAttribute(character, Agi);
        const finalLuk = this.getfinalStatus(character, Luk) + this.sumAttribute(character, Luk);
        const bonus = this.sumAttribute(character, Flee)
        return calFlee(character.baseLv, finalAgi, finalLuk, bonus)
    }

    static calAspd(character: CharacterModel): number {
        const finalAgi = this.getfinalStatus(character, Agi) + this.sumAttribute(character, Agi);
        const finalDex = this.getfinalStatus(character, Dex) + this.sumAttribute(character, Dex);
        const aspdPercent = this.sumAttribute(character, AspdPercent)
        const aspdFlat = this.sumAttribute(character, Aspd)
        const left = character.equipments.get(lWeapon);
        let shieldPenalty = 0
        if (left?.type instanceof Shield) {
            shieldPenalty = character.clazz.shieldPenalty
        }
        const right = character.equipments.get(rWeapon);
        let weaponPenalty = 0
        if (right) {
            weaponPenalty = character.clazz.getWeaponPenalty(right.type as WeaponType);
        }
        return calAspd(character.clazz.baseAspd, finalAgi, finalDex, aspdPercent, aspdFlat, weaponPenalty, shieldPenalty)
    }

    static calSoftDef(character: CharacterModel): number {
        const finalVit = this.getfinalStatus(character, Vit) + this.sumAttribute(character, Vit);
        const finalAgi = this.getfinalStatus(character, Agi) + this.sumAttribute(character, Agi);
        const defPercent = this.sumAttribute(character, SoftDefPercent)
        const defFlat = this.sumAttribute(character, SoftDef)
        return calSoftDef(finalVit, finalAgi, character.baseLv, defFlat, defPercent)
    }

    static calSoftMdef(character: CharacterModel): number {
        const finalInt = this.getfinalStatus(character, IntStatus) + this.sumAttribute(character, IntStatus)
        const finalVit = this.getfinalStatus(character, Vit) + this.sumAttribute(character, Vit);
        const finalDex = this.getfinalStatus(character, Dex) + this.sumAttribute(character, Dex);
        const mdefPercent = this.sumAttribute(character, SoftMdefPercent)
        const mdefFlat = this.sumAttribute(character, SoftMdef)
        return calSoftMdef(finalInt, finalVit, finalDex, character.baseLv, mdefFlat, mdefPercent)
    }

    static calRemainStatusPoint(character: CharacterModel): number {
        return calRemainStatusPoint(
            character.baseLv,
            character.status.str,
            character.status.agi,
            character.status.vit,
            character.status.int,
            character.status.dex,
            character.status.luk,
            character.clazz.isTrans
        );
    }

    static statusAtk(character: CharacterModel, type: AttributeType = Atk): number {
        const finalDex = this.getfinalStatus(character, Dex) + this.sumAttribute(character, Dex);
        const finalLuk = this.getfinalStatus(character, Luk) + this.sumAttribute(character, Luk);
        if (type === Atk) {
            const weapon = character.equipments.get(rWeapon);
            let isRange = false;
            if (weapon) {
                isRange = (weapon.type as WeaponType).isRange;
            }

            const finalStr = this.getfinalStatus(character, Str) + this.sumAttribute(character, Str);
            return statusAtk(character.baseLv, isRange, finalStr, finalDex, finalLuk);
        } else {
            const finalInt = this.getfinalStatus(character, Int) + this.sumAttribute(character, Int);
            return statusMATK(character.baseLv, finalInt, finalDex, finalLuk);
        }
    }

    static weaponAtk(character: CharacterModel, type: AttributeType = Atk): number {
        const weapon = character.equipments.get(rWeapon)
        if (!weapon) {
            return 0
        }
        return Equipment.findAttribute(weapon, type, [], false)
            .reduce((sum, attribute) => sum + attribute.value, 0)
    }

    static refineATK(character: CharacterModel, type: AttributeType = Atk): number {
        const weapon = character.equipments.get(rWeapon)
        if (!weapon) {
            return 0
        }
        const equipmentLevel = weapon.equipmentLevel
        const refineLevel = weapon.refineLevel
        const isRange = (weapon.type as WeaponType).isRange
        if (type === Atk) {
            return refineATK(refineLevel, equipmentLevel)
        } else {
            return refineMATK(refineLevel, equipmentLevel, isRange)
        }
    }

    static getSecondAtk(character: CharacterModel, type: AttributeType = Atk) {
        return this.weaponAtk(character, type) + this.refineATK(character, type) + CharacterModel.sumAttribute(character, type)
    }

    static finalDmg(character: CharacterModel, monster: Monster, skill: Skill, skillLevel: number = 1): number[] {
        // const equipmentArray = Array.from(character.equipments.values())
        const type = Matk
        const weapon = character.equipments.get(rWeapon)
        if (!weapon) {
            return [0, 0]
        }
        const weaponAtk = this.weaponAtk(character, type)
        const equipmentLevel = weapon.equipmentLevel
        const refineLevel = weapon.refineLevel
        const isRange = (weapon.type as WeaponType).isRange
        const refineA = refineMATK(refineLevel, equipmentLevel, isRange)
        const varinace = varianceMATK(weaponAtk, refineA, equipmentLevel)
        const statusA = this.statusAtk(character, type)
        const refineBonus = this.refineATK(character, type)
        const min = minMATK(statusA, varinace)
        const max = maxMATK(statusA, varinace, refineBonus)
        const range = [min, max]
        const equipAtk = CharacterModel.sumAttribute(character, type)
        return range.map(value => finalMATK(value, 1, equipAtk))
            .map(final => skillMagicDmg(final, skill.percent[skillLevel]))
            .map(skilldmg => finalMagicDmg(skilldmg, 0, monster.softMDef(), monster.hardDef))
    }
}