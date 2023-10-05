import { AttributeTypeEnum } from "./attributeType"

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

    static get(status: Status, type: AttributeTypeEnum): number {
        switch (type) {
            case AttributeTypeEnum.Str:
                return status.str
            case AttributeTypeEnum.Agi:
                return status.agi
            case AttributeTypeEnum.Vit:
                return status.vit
            case AttributeTypeEnum.Int:
                return status.int
            case AttributeTypeEnum.Dex:
                return status.dex
            case AttributeTypeEnum.Luk:
                return status.luk
            default:
                break
        }
        return 0
    }

    static set(status: Status, type: AttributeTypeEnum, value: number) {
        switch (type) {
            case AttributeTypeEnum.Str:
                status.str = value
                break;
            case AttributeTypeEnum.Agi:
                status.agi = value
                break;
            case AttributeTypeEnum.Vit:
                status.vit = value
                break;
            case AttributeTypeEnum.Int:
                status.int = value
                break;
            case AttributeTypeEnum.Dex:
                status.dex = value
                break;
            case AttributeTypeEnum.Luk:
                status.luk = value
                break;
            default:
                break
        }
    }
}