import { ItemType } from "./itemType";
import { Attribute } from "./Attribute";
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
    sumAttributeList?: Attribute[];

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
    const itemAttributeList = item.item?.attributeList ?? []
    const cardAttributeList = item.cardList.filter(item => item).flatMap(item => cardDatabase.find(card => card.id === item)?.attributeList ?? [])
    const enchantAttributeList: Attribute[] = item.enchantList.filter(item => item).flatMap(item => enchantDatabase.find(enchant => enchant.id === item)?.attributeList ?? [])
    const optionAttributeList: Attribute[] = item.optionList.filter(item => item).flatMap(item => optionDatabase.find(option => option.id === item)?.attributeList ?? [])
    item.sumAttributeList = [...itemAttributeList, ...cardAttributeList, ...enchantAttributeList, ...optionAttributeList]
}

export function checkCraft(item: CraftEqiupment, character: Character): Attribute[] {
    if (!item.sumAttributeList) return []
    return item.sumAttributeList.filter(attribute => Attribute.check(item, attribute, character))

}