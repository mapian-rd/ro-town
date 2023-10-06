import { Attribute } from "./Attribute"
import { ItemType, ItemTypeEnum } from "./itemType"

export interface Named {
    id: string;
    name?: string;
}

export class Item implements Named {
    id: string
    name: string
    type: ItemTypeEnum
    attributeList: Attribute[]
    imgId?: number

    constructor(id: string, name: string, type: ItemTypeEnum, attributeList: Attribute[]) {
        this.id = id
        this.name = name
        this.type = type
        this.attributeList = attributeList
    }

    static is(item: Named): item is Item {
        return (item as Item).type !== undefined
    }

    static getImgId(id: string, imgId?: number): number {
        if (imgId) return imgId
        if (!Number.isNaN(id)) {
            return Number.parseInt(id)
        }
        return -1
    }
}

export class Equipment extends Item {
    equipmentLevel: number = 1;
    cardSlot?: number = 0;
    enchantSlot?: number = 0;
    optionSlot?: number = 0;
    // weapon
    atk?: number;
    matk?: number;
    // equipment
    def?: number;
    mdef?: number;

    constructor(equipment: Equipment) {
        super(equipment.id, equipment.name, equipment.type, equipment.attributeList);
        this.equipmentLevel = equipment.equipmentLevel
        this.cardSlot = equipment.cardSlot
        this.enchantSlot = equipment.enchantSlot
        this.optionSlot = equipment.optionSlot
        this.atk = equipment.atk
        this.matk = equipment.matk
        this.def = equipment.def
        this.mdef = equipment.mdef
    }
}