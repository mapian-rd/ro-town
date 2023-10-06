import { ItemType } from "./itemType";
import { Attribute, AttributeName } from "./Attribute";
import { Equipment, Item } from "./Itemv2";
import { Character } from "./Characterv2";
import { cardDatabase, enchantDatabase, itemDatabase, optionDatabase } from "../database/item";

export interface Craftable {
    craftId: string;
}

export class CraftEqiupment implements Craftable {
    itemId: number;
    craftId: string;
    craftName?: string;
    refineLevel: number;
    cardList: (number | undefined)[];
    enchantList: (number | undefined)[];
    optionList: (number | undefined)[];

    // runtime data
    item?: Equipment;
    sumAttributeList?: AttributeName[];

    constructor(equipment: Equipment, refineLevel: number) {
        this.itemId = equipment.id
        this.craftId = crypto.randomUUID();
        this.refineLevel = refineLevel;
        this.cardList = Array<number | undefined>(equipment.cardSlot ?? 0).fill(undefined);
        this.enchantList = Array<number | undefined>(equipment.enchantSlot ?? 0).fill(undefined);
        this.optionList = Array<number | undefined>(equipment.optionSlot ?? 0).fill(undefined);
    }
}

export function sumCraft(item: CraftEqiupment) {
    item.item = itemDatabase.find(data => data.id === item.itemId)
    const itemBase = item.item
    let itemAttributeList: AttributeName[] = []
    if (itemBase) {
        itemAttributeList = itemBase.attributeList.map(attribute => {
            return { ...attribute, name: itemBase.name }
        })
    }
    const cardAttributeList: AttributeName[] = item.cardList.flatMap(item => {
        const card = cardDatabase.find(card => card.id === item)
        if (!card) return []
        return card.attributeList.map(attribute => {
            return { ...attribute, name: card.name }
        })
    })
    const enchantAttributeList: AttributeName[] = item.enchantList.flatMap(item => {
        const enchant = enchantDatabase.find(enchant => enchant.id === item)
        if (!enchant) return []
        return enchant.attributeList.map(attribute => {
            return { ...attribute, name: enchant.name }
        })
    })
    const optionAttributeList: AttributeName[] = item.optionList.flatMap(item => {
        const option = optionDatabase.find(option => option.id === item)
        if (!option) return []
        return option.attributeList.map(attribute => {
            return { ...attribute, name: option.name }
        })
    })
    item.sumAttributeList = [...itemAttributeList, ...cardAttributeList, ...enchantAttributeList, ...optionAttributeList]
}

export function checkCraft(item: CraftEqiupment, character: Character): AttributeName[] {
    if (!item.sumAttributeList) return []
    return item.sumAttributeList.filter(attribute => Attribute.check(item, attribute, character))

}