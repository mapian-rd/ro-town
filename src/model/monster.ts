import { monsterSoftMdef } from "../formula"
import { Status } from "./status"

export class Monster {
    level: number = 0
    status!: Status
    softDef(): number {
        return monsterSoftMdef(this.level, this.status.int)
    }
    hardDef: number = 0
    softMDef(): number {
        return monsterSoftMdef(this.level, this.status.int)
    }
    hardMdef: number = 0
}