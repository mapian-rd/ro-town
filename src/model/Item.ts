import { AttributeType } from "./attributeType";
import { ItemType } from "./itemType";

export class Attribute {
    type!: AttributeType;
    value: number = 0;
    refineStep?: number;
    refineCondition?: number;
}

export class Combo {
    items: string[] = []
    attributes: Attribute[] = []

    static findAttribute(combo: Combo, type: AttributeType): Attribute[] {
        return combo.attributes.filter(attribute => attribute.type === type)
    }
}

export class Item {
    id: number
    name: string
    type: ItemType
    attributes: Attribute[]
    combos: Combo[]

    constructor(id: number, name: string, type: ItemType, attribures: Attribute[], combos: Combo[]) {
        this.id = id
        this.name = name
        this.type = type
        this.attributes = attribures
        this.combos = combos
    }

    static findAttribute(item: Item, type: AttributeType, itemList: Item[], findCombo: boolean = true): Attribute[] {
        let attributes: Attribute[] = []
        if (findCombo) {
        let comboAttributes = item.combos.flatMap(combo => {
                let missing = combo.items.find(item => !itemList.find(equipment => equipment.name === item))
                if (!missing) {
                    return Combo.findAttribute(combo, type)
                }
                return []
            })
            attributes.push(...comboAttributes)
        }
        attributes.push(...item.attributes.filter(attribute => attribute.type === type))
        return attributes
    }
}

export class Equipment extends Item {
    refineLevel: number = 0;
    equipmentLevel: number = 1;
    cardSlot: number = 0;
    cards: Item[] = []
    options: Item[] = []

    static findAttribute(item: Equipment, type: AttributeType, itemList: Item[], findCombo: boolean = true): Attribute[] {
        let attributes: Attribute[] = []
        attributes.push(...Item.findAttribute(item, type, itemList, findCombo))
        if (findCombo) {
            attributes.push(...item.cards.flatMap(card => Item.findAttribute(card, type, itemList, findCombo)))
            attributes.push(...item.options.flatMap(card => Item.findAttribute(card, type, itemList, findCombo)))
        }
        return attributes
    }
}

export class Weapon extends Equipment {
    atk?: number
    matk?: number
}