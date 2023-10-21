import { AttributeTypeEnum } from "../model/attributeType";
import { ActiveSkill, PassiveSkill, SkillEnum } from "../model/skill";

export const skillActiveDatabase: ActiveSkill[] = [
    {
        id: "normal",
        enum: SkillEnum.NormalAttack,
        name: "Normal Attack",
        maxLv: 1,
        percent: [100],
        vct: [0],
        fct: [0],
        cooldown: [0],
        delay: [0],
        hit: [1],
        type: AttributeTypeEnum.Atk,
        isRange: false,
    },
    {
        id: "range",
        enum: SkillEnum.NormalRangeAttack,
        name: "Normal Attack (Range)",
        maxLv: 1,
        percent: [100],
        vct: [0],
        fct: [0],
        cooldown: [0],
        delay: [0],
        hit: [1],
        type: AttributeTypeEnum.Atk,
        isRange: true,
    },
    {
        id: "5038",
        enum: SkillEnum.TunaBelly,
        name: "Tuna Belly",
        maxLv: 5,
        percent: [0, 0, 0, 0, 0],
        vct: [0, 0, 0, 0, 0],
        fct: [1, 1, 1, 1, 1],
        cooldown: [2, 5, 8, 11, 14],
        delay: [1, 1, 1, 1, 1],
        hit: [1, 1, 1, 1, 1],
        type: AttributeTypeEnum.Heal,
        isRange: true,
    },
    {
        id: "5026",
        enum: SkillEnum.SilvervineStemSpear,
        name: "Silvervine Stem Spear",
        maxLv: 5,
        percent: [700, 700, 700, 700, 700],
        vct: [2, 2, 2, 2, 2],
        fct: [0.5, 0.5, 0.5, 0.5, 0.5],
        cooldown: [1, 1, 1, 1, 1],
        delay: [1, 1, 1, 1, 1],
        hit: [1, 1, 1, 1, 1],
        type: AttributeTypeEnum.Matk,
        isRange: true,
        element: [AttributeTypeEnum.MagicEarth, AttributeTypeEnum.MagicFire, AttributeTypeEnum.MagicWater, AttributeTypeEnum.MagicWind, AttributeTypeEnum.MagicGhost]
    },
    {
        id: "5029",
        enum: SkillEnum.SilvervineRootTwist,
        name: "Silvervine Root Twist",
        maxLv: 5,
        percent: [0, 0, 0, 0, 0],
        vct: [0, 0, 0, 0, 0],
        fct: [0, 0, 0, 0, 0],
        cooldown: [3, 2.5, 2, 1.5, 1],
        delay: [0, 0, 0, 0, 0],
        hit: [1, 1, 1, 1, 1],
        type: AttributeTypeEnum.Matk,
        isRange: true,
    },
    {
        id: "5028",
        enum: SkillEnum.CatnipMeteor,
        name: "Catnip Meteor",
        maxLv: 5,
        percent: [300, 400, 500, 600, 700],
        vct: [4, 4, 4, 4, 4],
        fct: [3, 3, 3, 3, 3],
        cooldown: [5, 5, 5, 5, 5],
        delay: [1, 1, 1, 1, 1],
        hit: [3, 4, 5, 6, 7],
        type: AttributeTypeEnum.Heal,
        isRange: true,
    },
    {
        id: "5021",
        enum: SkillEnum.Scratch,
        name: "Scratch",
        maxLv: 3,
        percent: [100, 150, 200],
        vct: [0, 0, 0],
        fct: [0, 0, 0],
        cooldown: [3, 2, 1],
        delay: [0, 0, 0],
        hit: [1, 1, 1],
        type: AttributeTypeEnum.Atk,
        isRange: false,
    },
    {
        id: "5033",
        enum: SkillEnum.PickyPeck,
        name: "Picky Peck",
        maxLv: 5,
        percent: [300, 400, 500, 600, 700],
        vct: [1, 1, 1, 1, 1],
        fct: [0, 0, 0, 0, 0],
        cooldown: [0, 0, 0, 0, 0],
        delay: [1, 1, 1, 1, 1],
        hit: [5, 5, 5, 5, 5],
        type: AttributeTypeEnum.Atk,
        isRange: true,
    },
    {
        id: "5036",
        enum: SkillEnum.LunaticCarrotBeat,
        name: "Lunatic Carrot Beat",
        maxLv: 5,
        percent: [300, 400, 500, 600, 700],
        vct: [0, 0, 0, 0, 0],
        fct: [1, 1, 1, 1, 1],
        cooldown: [6, 6, 6, 6, 6],
        delay: [1, 1, 1, 1, 1],
        hit: [3, 3, 3, 3, 3],
        type: AttributeTypeEnum.Atk,
        isRange: true,
    },
    {
        id: "5045",
        enum: SkillEnum.PowerOfFlock,
        name: "Power Of Flock",
        maxLv: 5,
        percent: [0, 0, 0, 0, 0],
        vct: [4, 3, 2, 1, 0],
        fct: [1, 1, 1, 1, 1],
        cooldown: [100, 100, 100, 100, 100],
        delay: [1, 1, 1, 1, 1],
        hit: [0, 0, 0, 0, 0],
        type: AttributeTypeEnum.Debuff,
        isRange: true,
    },
    {
        id: "5046",
        enum: SkillEnum.SpiritOfSavage,
        name: "Sprit Of Savage",
        maxLv: 5,
        percent: [400, 550, 700, 850, 1000],
        vct: [1, 1, 1, 1, 0],
        fct: [2.5, 2, 1.5, 1, 0],
        cooldown: [30, 28, 26, 24, 22],
        delay: [1, 1, 1, 1, 1],
        hit: [1, 1, 1, 1, 1],
        type: AttributeTypeEnum.Atk,
        isRange: true,
    },
].sort((a,b) => Number.parseInt(a.id)-Number.parseInt(b.id))

export const skillPassiveDatabase: PassiveSkill[] = [
    {
        id: "5031",
        enum: SkillEnum.PowerofLife,
        name: "Power of Life",
        maxLv: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Flee,
                formulaText: ["20"],
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: ["20"],
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: ["20"],
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: ["20"],
            },
        ],
    },
    {
        id: "5052",
        enum: SkillEnum.SpritOfLife,
        name: "Sprit Of Life",
        maxLv: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillBasePercent,
                skill: SkillEnum.PickyPeck,
                formulaText: ["120"],
            },
            {
                type: AttributeTypeEnum.SkillBasePercent,
                skill: SkillEnum.ScarOfTarou,
                formulaText: ["120"],
            },
            {
                type: AttributeTypeEnum.SkillBasePercent,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: ["120"],
            },
            {
                type: AttributeTypeEnum.SkillBasePercent,
                skill: SkillEnum.SpiritOfSavage,
                formulaText: ["120"],
            },
        ]
    },
    {
        id: "5025",
        enum: SkillEnum.PowerOfLand,
        name: "Power of Land",
        maxLv: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Int,
                formulaText: ["20"],
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: ["20"],
            },
        ]
    },
    {
        id: "5054",
        enum: SkillEnum.SpiritOfLand,
        name: "Spirit Of Land",
        maxLv: 1,
        attributeList: [
        ],
    },
    {
        id: "5037",
        enum: SkillEnum.PowerOfSea,
        name: "Power of Sea",
        maxLv: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: ["1000"],
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: ["100"],
            },
            {
                type: AttributeTypeEnum.Heal,
                formulaText: ["10"],
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: ["3000"],
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: ["300"],
            },
            {
                type: AttributeTypeEnum.Heal,
                formulaText: ["20"],
            },
        ]
    },
    {
        id: "5056",
        enum: SkillEnum.SpiritOfSea,
        name: "Sprit Of Sea",
        maxLv: 1,
        attributeList: [
        ]
    },
].sort((a,b) => Number.parseInt(a.id)-Number.parseInt(b.id))

export const skillBuffDatabase: PassiveSkill[] = [
    {
        id: "34",
        name: "Blessing",
        enum: SkillEnum.Blessing,
        maxLv: 10,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
            },
        ],
    },
    {
        id: "29",
        name: "Increase AGI",
        enum: SkillEnum.IncreaseAgi,
        maxLv: 10,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
        ],
    },
    {
        id: "2041",
        name: "Clementia (Blessing Lv.10)",
        enum: SkillEnum.Clementia,
        maxLv: 6,
        suffix: ["Job.10", "Job.20", "Job.30", "Job.40", "Job.50", "Job.60"],
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: ["10 + 1", "10 + 2", "10 + 3", "10 + 4", "10 + 5", "10 + 6"]
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: ["10 + 1", "10 + 2", "10 + 3", "10 + 4", "10 + 5", "10 + 6"]
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: ["10 + 1", "10 + 2", "10 + 3", "10 + 4", "10 + 5", "10 + 6"]
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: ["20 + 1", "20 + 2", "20 + 3", "20 + 4", "20 + 5", "20 + 6"]
            },
        ],
    },
    {
        id: "2042",
        name: "Cantocandidus (Increase AGI Lv.10)",
        enum: SkillEnum.Cantocandidus,
        maxLv: 6,
        suffix: ["Job.10", "Job.20", "Job.30", "Job.40", "Job.50", "Job.60"],
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: ["12 + 1", "12 + 2", "12 + 3", "12 + 4", "12 + 5", "12 + 6"]
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: ["10 + 0", "10 + 1", "10 + 1", "10 + 2", "10 + 2", "10 + 3"],
            },
        ],
    },
    {
        id: "5055",
        enum: SkillEnum.Chattering,
        name: "Chattering",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: ["100", "100", "100", "100", "100"],
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: ["100", "100", "100", "100", "100"],
            },
            {
                type: AttributeTypeEnum.MoveSpeed,
                formulaText: ["1", "1", "1", "1", "1"],
            },
        ]
    },
    {
        id: "5053",
        enum: SkillEnum.MeowMeow,
        name: "Meow Meow",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: ["100", "100", "100", "100", "100"],
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: ["100", "100", "100", "100", "100"],
            },
            {
                type: AttributeTypeEnum.MoveSpeed,
                formulaText: ["1", "1", "1", "1", "1"],
            },
        ]
    },
    {
        id: "5048",
        enum: SkillEnum.NyangGrass,
        name: "Nyang Grass",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.IgnoreDefAllRace,
                formulaText: ["50", "50", "50", "50", "50"],
            },
            {
                type: AttributeTypeEnum.IgnoreMdefAllRace,
                formulaText: ["50", "50", "50", "50", "50"],
            },
        ]
    },
    {
        id: "5035",
        enum: SkillEnum.ArclouseDash,
        name: "Arclouse Dash",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: ["10", "10", "10", "10", "10"],
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: ["20", "25", "30", "35", "40"],
            },
        ]
    },
    {
        id: "5047",
        enum: SkillEnum.Hiss,
        name: "Hiss",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.PD,
                formulaText: ["50", "50", "50", "50", "50"],
            },
            {
                type: AttributeTypeEnum.MoveSpeed,
                formulaText: ["1", "1", "1", "1", "1"],
            },
        ]
    },
    {
        id: "5051",
        enum: SkillEnum.TastyShrimpParty,
        name: "Tasty Shrimp Party",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.SpRecoveryP,
                formulaText: ["150", "150", "150", "150", "150"],
            }
        ]
    },
    {
        id: "5049",
        enum: SkillEnum.Grooming,
        name: "Grooming",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.Flee,
                formulaText: ["100", "100", "100", "100", "100"],
            }
        ]
    },
    {
        id: "5050",
        enum: SkillEnum.Purring,
        name: "Purring",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.Flee,
                formulaText: ["100", "100", "100", "100", "100"],
            }
        ]
    },
    {
        id: "5041",
        enum: SkillEnum.FreshShrimp,
        name: "Fresh Shrimp",
        maxLv: 5,
        attributeList: [
        ]
    },
    {
        id: "5040",
        enum: SkillEnum.BunchOfShrimp,
        name: "Bunch of Shrimp",
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: ["10", "10", "10", "10", "10"],
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: ["10", "10", "10", "10", "10"],
            },
        ]
    },
    {
        id: "5039",
        enum: SkillEnum.TunaParty,
        name: "Tuna Party",
        maxLv: 5,
        attributeList: [
        ]
    },
].sort((a,b) => Number.parseInt(a.id)-Number.parseInt(b.id))