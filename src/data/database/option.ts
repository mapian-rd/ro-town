import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";
import * as itemJson from "./json/option.json"

export const optionDatabase: Item[] = [
    ...Array.from(itemJson as Item[]),
    {
        id: "physGhost15",
        name: "เพิ่ม Phycal Damage ต่อศัตรูธาตุ Ghost 15%",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalGhost,
                formulaText: "15",
            },
        ]
    },
    {
        id: "physRaceFormless5",
        name: "เพิ่ม Phycal Damage 5% ต่อมอนสเตอร์เผ่า Formless",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalFormless,
                formulaText: "5",
            },
        ]
    },
    {
        id: "matk+30",
        name: "MATK + 30",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "30",
            },
        ]
    },
    {
        id: "delay15",
        name: "ลดดีเลย์หลังการใช้ Skill 15%",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "15",
            },
        ]
    },
    {
        id: "range15",
        name: "เพิ่ม Physical Damage ระยะไกล 10%",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "10",
            },
        ]
    },
    {
        id: "atkp6",
        name: "Atk + 6%",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "6",
            },
        ]
    },
]
    .sort((a, b) => Number.parseInt(a.id) - Number.parseInt(b.id))