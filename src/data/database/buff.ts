import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";

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
    {
        id: "14869",
        name: "Red Booster",
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
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "-10"
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "-10"
            },
        ]
    },
    {
        id: "12883",
        name: "Almighty",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "30"
            },
        ]
    },
    {
        id: "14886",
        name: "Ultimate Cook",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "30"
            },
        ]
    },
    {
        id: "23050",
        name: "Magical Candy",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.FctPercent,
                formulaText: "70"
            },
            {
                type: AttributeTypeEnum.UnstopCast,
                formulaText: "1"
            },
        ]
    },
    {
        id: "645",
        name: "Concentration Potion",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Haste,
                formulaText: "4"
            },
        ]
    },
    {
        id: "656",
        name: "Awakening Potion",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Haste,
                formulaText: "6"
            },
        ]
    },
    {
        id: "657",
        name: "Berserk Potion",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Haste,
                formulaText: "9"
            },
        ]
    },
    {
        id: "12414",
        name: "Guarana Candy",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Haste,
                formulaText: "5"
            },
        ]
    },
    {
        id: "12437",
        name: "Enrich Celermine Juice",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Haste,
                formulaText: "5"
            },
        ]
    },
    {
        id: "14862",
        name: "Tyr's Blessing",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "20"
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "20"
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "30"
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "30"
            },
        ]
    },
    {
        id: "12429",
        name: "Savage BBQ",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "20"
            },
        ]
    },
    {
        id: "12430",
        name: "Wug Blood Cocktail",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Int,
                formulaText: "20"
            },
        ]
    },
    {
        id: "12431",
        name: "Minor Brisket",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "20"
            },
        ]
    },
    {
        id: "12432",
        name: "Siroma Icetea",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "20"
            },
        ]
    },
    {
        id: "12433",
        name: "Drocera Herb Stew",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "20"
            },
        ]
    },
    {
        id: "12791",
        name: "Battle Pill",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllClass,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5"
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "-3"
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "-3"
            },
        ]
    },
    {
        id: "12792",
        name: "Suprem Battle Pill",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllClass,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "-5"
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "-5"
            },
        ]
    },
    {
        id: "102121",
        name: "AGI Biscuit Stick",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "15"
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "33"
            },
        ]
    },
    {
        id: "14531",
        name: "Accuracy 30 Scroll",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "30"
            },
        ]
    },
    {
        id: "12436",
        name: "Vitata500",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "5"
            },
        ]
    },
    {
        id: "12424",
        name: "HP Increase Potion(Large)",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "3166"
            },
        ]
    },
    {
        id: "12427",
        name: "SP Increase Potion(Large)",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "25"
            },
            {
                type: AttributeTypeEnum.SpRecoveryP,
                formulaText: "8"
            },
        ]
    },
    {
        id: "12321",
        name: "Arunafeltz Desert Sandwich",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "7"
            },
        ]
    },
    {
        id: "12320",
        name: "Schwartzwald Pine Jubilee",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "10"
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "20"
            },
        ]
    },
    {
        id: "23204",
        name: "DEF Scroll",
        type: ItemTypeEnum.Buff,
        attributeList: [
            {
                type: AttributeTypeEnum.Def,
                formulaText: "500"
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "200"
            },
        ]
    },
].sort((a,b) => Number.parseInt(a.id)-Number.parseInt(b.id))