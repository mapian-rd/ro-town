import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";

export const optionDatabase: Item[] = [
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
        id: "magicMed5",
        name: "เพิ่ม Magic Damage ต่อศัตรูขนาดกลาง 5%",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MagicMed,
                formulaText: "5",
            },
        ]
    },
]