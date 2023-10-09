import { AttributeTypeEnum } from "../model/attributeType"
import { JobClass, JobClassEnum } from "../model/class"
import { ItemTypeEnum } from "../model/itemType"
import { ActiveSkill, PassiveSkill, SkillEnum } from "../model/skill"
import { OneHandedStaff } from "./itemType"

const normalAttack: ActiveSkill = {
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
}

const normalRangeAttack: ActiveSkill = {
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
}

export class Novice extends JobClass {
    name = "Novice"
    activeSkill = [
        normalAttack
    ]
}

export class Doram extends JobClass {
    enum = JobClassEnum.Doram
    name = "Doram"
    strBonus = []
    agiBonus = [8, 11, 15, 19, 27, 39, 48]
    vitBonus = [3, 6, 24, 43, 47]
    intBonus = [9, 12, 16, 20, 31, 36, 42, 49] //เดา 49
    dexBonus = [1, 5, 13, 17, 21, 25, 32, 41, 45, 50, 54] //เดา 54
    lukBonus = [23, 29, 34, 37, 46]
    lvMax = 185;
    jobMax = 55;
    statusMax = 130;
    baseHps = [40, 69, 80, 92, 105, 119, 134, 150, 167, 185,
        204, 224, 245, 267, 291, 315, 341, 368, 395, 423,
        453, 483, 515, 548, 582, 617, 653, 690, 728, 767,
        807, 848, 890, 933, 978, 1023, 1070, 1118, 1166, 1215,
        1266, 1317, 1370, 1424, 1479, 1535, 1592, 1650, 1709, 1769,// 50
        1830, 1892, 1955, 2019, 2085, 2151, 2219, 2288, 2357, 2427,
        2499, 2571, 2645, 2720, 2796, 2873, 2951, 3030, 3110, 3191,
        3273, 3356, 3440, 3525, 3612, 3699, 3788, 3878, 3968, 4059,
        4152, 4245, 4340, 4436, 4533, 4631, 4730, 4830, 4931, 5033,
        5136, 5240, 5345, 5451, 5559, 5667, 5777, 5888, 5999, 6120,// 100
        6240, 6360, 6480, 6600, 6735, 6870, 7005, 7140, 7275, 7425,
        7575, 7725, 7875, 8025, 8190, 8355, 8520, 8685, 8850, 9030,
        9210, 9390, 9570, 9750, 9945, 10140, 10335, 10530, 10725, 10935,
        11145, 11355, 11565, 11775, 12000, 12225, 12450, 12675, 12900, 13140,
        13380, 13620, 13860, 14100, 14355, 14610, 14865, 15120, 15375, 15645,//150
        15915, 16185, 16455, 16725, 17010, 17295, 17580, 17865, 18150, 18450,
        18750, 19050, 19350, 19650, 19965, 20280, 20595, 20910, 21225, 21555,
        21885, 22215, 22545, 22875, 23220, 23565, 23910, 24255, 24600, 24945,
        25305, 25665, 26025, 26385, 26745, 27105, 27480, 27855, 28230, 28605,
        28980, 29370, 29760, 30150, 30540, 30930, 31335, 31740, 32145, 32550]
    baseSps = [8, 10, 13, 15, 18, 20, 23, 25, 28, 30,
        33, 35, 38, 40, 43, 45, 48, 50, 53, 55,
        58, 60, 63, 65, 68, 70, 73, 75, 78, 80,
        83, 85, 88, 90, 93, 95, 98, 100, 103, 105,
        108, 110, 113, 115, 118, 120, 123, 125, 128, 130,// 50
        133, 135, 138, 140, 143, 145, 148, 150, 153, 155,
        158, 160, 163, 165, 168, 170, 173, 175, 178, 180,
        183, 185, 188, 190, 193, 195, 198, 200, 203, 205,
        208, 210, 213, 215, 218, 220, 223, 225, 228, 230,
        233, 235, 238, 240, 243, 245, 248, 250, 253, 257,// 100
        261, 265, 269, 273, 278, 283, 288, 293, 298, 304,
        310, 316, 322, 328, 335, 342, 349, 356, 363, 371,
        379, 387, 395, 403, 412, 421, 430, 439, 448, 458,
        468, 478, 488, 498, 509, 520, 531, 542, 553, 565,
        577, 589, 601, 613, 626, 639, 642, 655, 668, 682,// 150
        696, 710, 724, 738, 753, 768, 783, 798, 813, 829,
        835, 851, 867, 883, 899, 916, 933, 950, 967, 984,
        1002, 1020, 1038, 1056, 1074, 1082, 1090, 1098, 1106, 1114,
        1122, 1130, 1138, 1146, 1154, 1162, 1170, 1178, 1186, 1194,
        1202, 1210, 1218, 1226, 1234, 1242, 1250, 1258, 1266, 1274];
    weaponPenalty = new Map([[ItemTypeEnum.OneHandRod, -20]])
    shieldPenalty = -7;
    activeSkill = [
        normalAttack,
        normalRangeAttack,
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
        }
    ];
    passiveSkill = [
        {
            id: "5031",
            enum: SkillEnum.PowerofLife,
            name: "Power of Life",
            maxLv: 5,
            attributeList: [
                {
                    type: AttributeTypeEnum.Flee,
                    formulaText: "20",
                },
                {
                    type: AttributeTypeEnum.Hit,
                    formulaText: "20",
                },
                {
                    type: AttributeTypeEnum.Critical,
                    formulaText: "20",
                },
                {
                    type: AttributeTypeEnum.RangeMul,
                    formulaText: "20",
                },
            ],
        },
        {
            id: "5035",
            enum: SkillEnum.ArclouseDash,
            name: "Arclouse Dash",
            maxLv: 5,
            attributeList: [
                {
                    type: AttributeTypeEnum.RangeMul,
                    formulaText: "10",
                },
                {
                    type: AttributeTypeEnum.Agi,
                    formulaText: "40",
                },
            ]
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
                    formulaText: "120",
                },
                {
                    type: AttributeTypeEnum.SkillBasePercent,
                    skill: SkillEnum.ScarOfTarou,
                    formulaText: "120",
                },
                {
                    type: AttributeTypeEnum.SkillBasePercent,
                    skill: SkillEnum.LunaticCarrotBeat,
                    formulaText: "120",
                },
                {
                    type: AttributeTypeEnum.SkillBasePercent,
                    skill: SkillEnum.SpiritOfSavage,
                    formulaText: "120",
                },
            ]
        }
    ]
    buffSkill = [
        {
            id: "5047",
            enum: SkillEnum.Hiss,
            name: "Hiss",
            maxLv: 5,
            attributeList: [
                {
                    type: AttributeTypeEnum.PD,
                    formulaText: "50",
                },
                {
                    type: AttributeTypeEnum.MoveSpeed,
                    formulaText: "1",
                },
            ]
        }
    ]
}

export const doramClass = new Doram()
export const noviceClass = new Novice()

export const classList: Map<JobClassEnum, JobClass> = new Map([
    [JobClassEnum.Novice, noviceClass],
    [JobClassEnum.Doram, doramClass],
])

export function getClass(type: JobClassEnum): JobClass {
    const statusType = classList.get(type)
    if(statusType) {
        return statusType
    }
    return classList.get(type) ?? noviceClass
}