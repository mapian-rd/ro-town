import { noviceClass } from "../constraint/class"
import { Status } from "./status"

export class SavedData {
    name: string = "Novice"
    clazz: string = noviceClass.name
    baseLv: number = 1
    jobLv: number = 1
    status: Status = new Status()
    equipmentMap: Map<string, string> = new Map()
    pet?: number;
    petFriendly?: string;
    itemBuff: number[] = [];
    skillBuff: number[] = [];
}