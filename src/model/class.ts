import { Str, Agi, Vit, Int, Dex, Luk } from "../constraint/status"
import { StatusType } from "./status"

export abstract class JobClass {
    name!: string
    isTrans: boolean = false;
    strBonus: number[] = []
    agiBonus: number[] = []
    vitBonus: number[] = []
    intBonus: number[] = []
    dexBonus: number[] = []
    lukBpnus: number[] = []
    lvMin: number = 1;
    lvMax: number = 99;
    jobMax: number = 10;
    baseHp: number = 35;
    hpJobA: number = 0;
    hpJobB: number = 5;
    baseHps?: number[];

    getBonus(jobLv: number, status: StatusType): number {
        switch (status) {
            case Str:
                return this.findBonus(jobLv, this.strBonus)
            case Agi:
                return this.findBonus(jobLv, this.agiBonus)
            case Vit:
                return this.findBonus(jobLv, this.vitBonus)
            case Int:
                return this.findBonus(jobLv, this.intBonus)
            case Dex:
                return this.findBonus(jobLv, this.dexBonus)
            case Luk:
                return this.findBonus(jobLv, this.lukBpnus)
            default:
                break
        }
        return 0
    }

    findBonus(jobLv: number, array: number[]): number {
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
}