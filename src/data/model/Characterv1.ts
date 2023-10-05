import { getClass, Novice, noviceClass } from "../constraint/class";
import { friendly } from "../constraint/pet";
import { lWeapon, rWeapon } from "../../Constraints";
// import { finalMagicDmg, finalMATK, maxMATK, minMATK, refineATK, refineMATK, skillMagicDmg, statusAtk, statusMATK, varianceMATK } from "../../formula";
import { calAspd } from "../formula/Aspd";
import { calCrit } from "../formula/Critical";
import { calSoftDef, calSoftMdef } from "../formula/Def";
import { calFlee } from "../formula/Flee";
import { calHit } from "../formula/Hit";
import { calHp, caljobHp } from "../formula/Hp";
import { caljobSp, calSp } from "../formula/Sp";
import { calRemainStatusPoint } from "../formula/StatusPoint";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { JobClass, JobClassEnum } from "./class";
import { Attribute, Equipment, Item } from "./Itemv1";
import { Shield, WeaponType } from "./itemType";
import { Monster } from "./monster";
import { Pet, PetFriendly } from "./Petv1";
import { ActiveSkill } from "./skill";
import { Status } from "./status";
import { statusAtk, statusMATK } from "../../formula";

export class CharacterModel {
    name: string = "Novice"
    clazz: JobClass = noviceClass
    baseLv: number = 1
    jobLv: number = 1
    status: Status = new Status()
    softDef: number = 0
    hardDef: number = 0
    softMDef: number = 0
    hardMdef: number = 0
    equipments: Map<string, Equipment> = new Map()
    pet?: Pet;
    petFriendly?: PetFriendly;
    itemBuff: Item[] = [];
    skillBuff: Item[] = [];

    static getBonusStatus(character: CharacterModel, type: AttributeTypeEnum): number {
        return JobClass.getBonus(character.clazz, character.jobLv, type) + CharacterModel.sumAttribute?.(character, type)
    }

    static getfinalStatus(character: CharacterModel, type: AttributeTypeEnum): number {
        // console.debug(type.name + " " + character.status.get(type) + " " + CharacterModel.getBonusStatus(character, type))
        return Status.get(character.status, type) + CharacterModel.getBonusStatus(character, type)
    }

    static findAttribute(character: CharacterModel, type: AttributeTypeEnum): Attribute[] {
        let equipmentArray = Array.from(character.equipments.values())
        let equipmentAttribute = equipmentArray.flatMap(equipment => {
            if ((type === AttributeTypeEnum.Atk || type === AttributeTypeEnum.Matk) && equipment.type instanceof WeaponType) {
                return []
            }
            return Equipment.findAttribute(equipment, type, equipmentArray)
        })
        let petAttribute: Attribute[] = []
        if (character.pet) {
            petAttribute = Pet.findPetAttribute(character.pet, character.petFriendly ?? friendly, type, equipmentArray)
        }
        return [...equipmentAttribute, ...petAttribute]


    }

    static sumAttribute(character: CharacterModel, type: AttributeTypeEnum): number {
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
            this.getfinalStatus(character, AttributeTypeEnum.Vit),
            character.clazz.isTrans ? 1.25 : 1,
            this.sumAttribute(character, AttributeTypeEnum.Hp),
            this.sumAttribute(character, AttributeTypeEnum.HpPercent)
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
            this.getfinalStatus(character, AttributeTypeEnum.Int) + this.sumAttribute(character, AttributeTypeEnum.Int),
            character.clazz.isTrans ? 1.25 : 1,
            this.sumAttribute(character, AttributeTypeEnum.Sp),
            this.sumAttribute(character, AttributeTypeEnum.SpPercent)
        )
    }

    static calHit(character: CharacterModel): number {
        const finalDex = this.getfinalStatus(character, AttributeTypeEnum.Dex) + this.sumAttribute(character, AttributeTypeEnum.Dex);
        const finalLuk = this.getfinalStatus(character, AttributeTypeEnum.Luk) + this.sumAttribute(character, AttributeTypeEnum.Luk);
        const bonus = this.sumAttribute(character, AttributeTypeEnum.Hit)
        return calHit(character.baseLv, finalDex, finalLuk, bonus)
    }

    static calCrit(character: CharacterModel): number {
        const finalLuk = this.getfinalStatus(character, AttributeTypeEnum.Luk) + this.sumAttribute(character, AttributeTypeEnum.Luk);
        const bonus = this.sumAttribute(character, AttributeTypeEnum.Critical)
        return calCrit(finalLuk, bonus)
    }

    static calFlee(character: CharacterModel): number {
        const finalAgi = this.getfinalStatus(character, AttributeTypeEnum.Agi) + this.sumAttribute(character, AttributeTypeEnum.Agi);
        const finalLuk = this.getfinalStatus(character, AttributeTypeEnum.Luk) + this.sumAttribute(character, AttributeTypeEnum.Luk);
        const bonus = this.sumAttribute(character, AttributeTypeEnum.Flee)
        return calFlee(character.baseLv, finalAgi, finalLuk, bonus)
    }

    static calAspd(character: CharacterModel): number {
        const finalAgi = this.getfinalStatus(character, AttributeTypeEnum.Agi) + this.sumAttribute(character, AttributeTypeEnum.Agi);
        const finalDex = this.getfinalStatus(character, AttributeTypeEnum.Dex) + this.sumAttribute(character, AttributeTypeEnum.Dex);
        const aspdPercent = this.sumAttribute(character, AttributeTypeEnum.AspdPercent)
        const aspdFlat = this.sumAttribute(character, AttributeTypeEnum.Aspd)
        const left = character.equipments.get(lWeapon.name);
        let shieldPenalty = 0
        if (left?.type instanceof Shield) {
            shieldPenalty = character.clazz.shieldPenalty
        }
        const right = character.equipments.get(rWeapon.name);
        let weaponPenalty = 0
        if (right) {
            // weaponPenalty = JobClass.getWeaponPenalty(character.clazz, right.type as WeaponType);
        }
        return calAspd(character.clazz.baseAspd, finalAgi, finalDex, aspdPercent, aspdFlat, weaponPenalty, shieldPenalty)
    }

    static calSoftDef(character: CharacterModel): number {
        const finalVit = this.getfinalStatus(character, AttributeTypeEnum.Vit) + this.sumAttribute(character, AttributeTypeEnum.Vit);
        const finalAgi = this.getfinalStatus(character, AttributeTypeEnum.Agi) + this.sumAttribute(character, AttributeTypeEnum.Agi);
        const defPercent = this.sumAttribute(character, AttributeTypeEnum.SoftDefPercent)
        const defFlat = this.sumAttribute(character, AttributeTypeEnum.SoftDef)
        return calSoftDef(finalVit, finalAgi, character.baseLv, defFlat, defPercent)
    }

    static calSoftMdef(character: CharacterModel): number {
        const finalInt = this.getfinalStatus(character, AttributeTypeEnum.Int) + this.sumAttribute(character, AttributeTypeEnum.Int)
        const finalVit = this.getfinalStatus(character, AttributeTypeEnum.Vit) + this.sumAttribute(character, AttributeTypeEnum.Vit);
        const finalDex = this.getfinalStatus(character, AttributeTypeEnum.Dex) + this.sumAttribute(character, AttributeTypeEnum.Dex);
        const mdefPercent = this.sumAttribute(character, AttributeTypeEnum.SoftMdefPercent)
        const mdefFlat = this.sumAttribute(character, AttributeTypeEnum.SoftMdef)
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

    static statusAtk(character: CharacterModel, type: AttributeTypeEnum = AttributeTypeEnum.Atk): number {
        const finalDex = this.getfinalStatus(character, AttributeTypeEnum.Dex) + this.sumAttribute(character, AttributeTypeEnum.Dex);
        const finalLuk = this.getfinalStatus(character, AttributeTypeEnum.Luk) + this.sumAttribute(character, AttributeTypeEnum.Luk);
        if (type === AttributeTypeEnum.Atk) {
            const weapon = character.equipments.get(rWeapon.name);
            let isRange = false;
            if (weapon) {
                isRange = (weapon.type as WeaponType).isRange;
            }

            const finalStr = this.getfinalStatus(character, AttributeTypeEnum.Str) + this.sumAttribute(character, AttributeTypeEnum.Str);
            return statusAtk(character.baseLv, isRange, finalStr, finalDex, finalLuk);
        } else {
            const finalInt = this.getfinalStatus(character, AttributeTypeEnum.Int) + this.sumAttribute(character, AttributeTypeEnum.Int);
            return statusMATK(character.baseLv, finalInt, finalDex, finalLuk);
        }
    }

    static weaponAtk(character: CharacterModel, type: AttributeTypeEnum = AttributeTypeEnum.Atk): number {
        const weapon = character.equipments.get(rWeapon.name)
        if (!weapon) {
            return 0
        }
        return Equipment.findAttribute(weapon, type, [], false)
            .reduce((sum, attribute) => sum + attribute.value, 0)
    }

    static refineATK(character: CharacterModel, type: AttributeTypeEnum = AttributeTypeEnum.Atk): number {
        const weapon = character.equipments.get(rWeapon.name)
        if (!weapon) {
            return 0
        }
        // const equipmentLevel = weapon.equipmentLevel
        // const refineLevel = weapon.refineLevel
        // const isRange = (weapon.type as WeaponType).isRange
        // if (type === AttributeTypeEnum.Atk) {
        //     return refineATK(refineLevel, equipmentLevel)
        // } else {
        //     return refineMATK(refineLevel, equipmentLevel, isRange)
        // }
        return 0
    }

    static getSecondAtk(character: CharacterModel, type: AttributeTypeEnum = AttributeTypeEnum.Atk) {
        return this.weaponAtk(character, type) + this.refineATK(character, type) + CharacterModel.sumAttribute(character, type)
    }
}