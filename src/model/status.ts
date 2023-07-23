import { Str, Agi, Vit, Int, Dex, Luk } from "../constraint/status"

export class StatusType {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export class Status {
    str: number
    agi: number
    vit: number
    int: number
    dex: number
    luk: number

    constructor(str: number = 1, agi: number = 1, vit: number = 1, int: number = 1, dex: number = 1, luk: number = 1) {
        this.str = str
        this.agi = agi
        this.vit = vit
        this.int = int
        this.dex = dex
        this.luk = luk
    }

    get(type: StatusType): number {
        switch (type) {
            case Str:
                return this.str
            case Agi:
                return this.agi
            case Vit:
                return this.vit
            case Int:
                return this.int
            case Dex:
                return this.dex
            case Luk:
                return this.luk
            default:
                break
        }
        return 0
    }

    set(type: StatusType, value: number) {
        switch (type) {
            case Str:
                this.str = value
                break;
            case Agi:
                this.agi = value
                break;
            case Vit:
                this.vit = value
                break;
            case Int:
                this.int = value
                break;
            case Dex:
                this.dex = value
                break;
            case Luk:
                this.luk = value
                break;
            default:
                break
        }
    }
}