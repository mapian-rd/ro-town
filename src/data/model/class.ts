import { getClass } from "../constraint/class";
import { Bow, OneHandedStaff } from "../constraint/itemType";
import { AttributeTypeEnum } from "./attributeType";
import { ItemType, ItemTypeEnum, WeaponType } from "./itemType";
import { ActiveSkill, PassiveSkill } from "./skill";

export enum JobClassEnum {
    Novice, Doram
}

export abstract class JobClass {
    enum: JobClassEnum = JobClassEnum.Novice
    name!: string
    isTrans: boolean = false;
    strBonus: number[] = []
    agiBonus: number[] = []
    vitBonus: number[] = []
    intBonus: number[] = []
    dexBonus: number[] = []
    lukBonus: number[] = []
    lvMin: number = 1;
    lvMax: number = 99;
    jobMax: number = 10;
    statusMax: number = 99;
    baseHp: number = 35;
    hpJobA: number = 0;
    hpJobB: number = 5;
    baseHps?: number[];

    baseSp: number = 10;
    spJob: number = 1;
    baseSps?: number[];

    baseAspd: number = 156;
    weaponPenalty: Map<ItemTypeEnum, number> = new Map([[ItemTypeEnum.OneHandRod, -25]])
    shieldPenalty: number = -10;

    activeSkill: ActiveSkill[] = []
    passiveSkill: PassiveSkill[] = []

    static getBonus(clazz: JobClass, jobLv: number, status: AttributeTypeEnum): number {
        switch (status) {
            case AttributeTypeEnum.Str:
                return JobClass.findBonus(jobLv, clazz.strBonus)
            case AttributeTypeEnum.Agi:
                return JobClass.findBonus(jobLv, clazz.agiBonus)
            case AttributeTypeEnum.Vit:
                return JobClass.findBonus(jobLv, clazz.vitBonus)
            case AttributeTypeEnum.Int:
                return JobClass.findBonus(jobLv, clazz.intBonus)
            case AttributeTypeEnum.Dex:
                return JobClass.findBonus(jobLv, clazz.dexBonus)
            case AttributeTypeEnum.Luk:
                // console.log(this.lukBonus)
                return JobClass.findBonus(jobLv, clazz.lukBonus)
            default:
                break
        }
        return 0
    }

    static findBonus(jobLv: number, array: number[]): number {
        let bonus = 0
        for (let i = 0; i < array.length; i++) {
            let lv = array[i]
            if (lv > jobLv) {
                break
            }
            bonus += 1
        }
        return bonus
    }

    static getWeaponPenalty(clazz: JobClass, type: ItemTypeEnum): number {
        return clazz.weaponPenalty.get(type) ?? 0
    }
}