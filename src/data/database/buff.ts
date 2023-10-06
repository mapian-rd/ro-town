import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";
import { PassiveSkill, SkillEnum } from "../model/skill";

export const skillBuffDatabase: PassiveSkill[] = [
]

export const itemBuffDatabase: Item[] = [
    {
        id: 1,
        name: "ATK +75",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "75"
            },
        ]
    },
    {
        id: 2,
        name: "ATK% +5%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "5"
            },
        ]
    },
    {
        id: 3,
        name: "Range% +12%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "12"
            },
        ]
    },
    {
        id: 4,
        name: "ATK +1000",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "1000"
            },
        ]
    },
    {
        id: 5,
        name: "Skill dmg 120%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                formulaText: "120"
            },
        ]
    },
    {
        id: 6,
        name: "All Size + 10%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.PhysicalSmall,
                formulaText: "10"
            },
        ]
    },
    {
        id: 7,
        name: "ATK +100",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "100"
            },
        ]
    },
    {
        id: 8,
        name: "ATK% +99%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "99"
            },
        ]
    },
    {
        id: 9,
        name: "Size +101%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "101"
            },
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "101"
            },
            {
                type: AttributeTypeEnum.PhysicalSmall,
                formulaText: "101"
            },
        ]
    },
    {
        id: 10,
        name: "Size +101%",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "101"
            },
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "101"
            },
            {
                type: AttributeTypeEnum.PhysicalSmall,
                formulaText: "101"
            },
        ]
    },
]