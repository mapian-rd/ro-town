import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";
import { PassiveSkill, SkillEnum } from "../model/skill";

export const skillBuffDatabase: PassiveSkill[] = [
]

export const itemBuffDatabase: Item[] = [
    {
        id: "9896",
        name: "Power Booster",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "1"
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "1"
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1"
            },
            {
                type: AttributeTypeEnum.SpUsedDP,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.FctPercent,
                formulaText: "30"
            },
        ]
    },
    {
        id: "101097",
        name: "Unlimited Drink",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.MagicSkillNeutral,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.MagicSkillWater,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillEarth,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillFire,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillWind,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillPoison,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillHoly,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillDark,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillGhost,
                formulaText: "5"
            },
            
            {
                type: AttributeTypeEnum.MagicSkillUndead,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.UnstopCast,
                formulaText: "1"
            },
        ]
    },
]