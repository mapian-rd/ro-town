import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";
import { PassiveSkill, SkillEnum } from "../model/skill";

export const skillBuffDatabase: PassiveSkill[] = [
]

export const itemBuffDatabase: Item[] = [
    {
        id: "atk75",
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
        id: "atkp5",
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
        id: "rangep5",
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
        id: "atk1000",
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
        id: "skildmgp120",
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
        id: "allsize10",
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
        id: "atk100-2",
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
        id: "atkp99",
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
        id: "allsize101",
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
        id: "allsize101-2",
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