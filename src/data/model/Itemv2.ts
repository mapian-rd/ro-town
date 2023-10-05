import { Attribute } from "./Attribute"
import { ItemType, ItemTypeEnum } from "./itemType"

export class Item {
    id: number
    name: string
    type: ItemTypeEnum
    attributeList: Attribute[]

    constructor(id: number, name: string, type: ItemTypeEnum, attributeList: Attribute[]) {
        this.id = id
        this.name = name
        this.type = type
        this.attributeList = attributeList
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