import { StatusType } from "./status"

export class ItemType {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export class WeaponType extends ItemType {
    mainStatus: StatusType
    isRange: boolean
    constructor(name: string, mainStatus: StatusType, isRange: boolean) {
        super(name)
        this.mainStatus = mainStatus
        this.isRange = isRange
    }
}