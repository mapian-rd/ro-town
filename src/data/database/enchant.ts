import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";
import { SkillEnum } from "../model/skill";
import { Symbol } from "../model/Symbol";
import * as itemJson from "./json/enchant.json"

export const enchantDatabase: Item[] = [
    ...Array.from(itemJson as Item[]),
    {
        id: "29534",
        name: "Modification Orb (ATK)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "25",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "25",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "29539",
        name: "Modification Orb (Critical)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29540",
        name: "Modification Orb (Global Delay)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "4816",
        name: "Sharp 3Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "12",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4843",
        name: "Sharp 4Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "14",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "5",
            },
        ],
    },
    {
        id: "4844",
        name: "Sharp 5Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "6",
            },
        ],
    },
    {
        id: "4834",
        name: "Expert Archer 3Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "6",
            },
        ],
    },
    {
        id: "4835",
        name: "Expert Archer 4Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "8",
            },
        ],
    },
    {
        id: "4836",
        name: "Expert Archer 5Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "10",
            },
        ],
    },
    {
        id: "4873",
        name: "Attack Delay 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "8",
            },
        ],
    },
    {
        id: "4881",
        name: "Attack Delay 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
            },
        ],
    },
    {
        id: "4815",
        name: "Spell 1Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "6",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4814",
        name: "Spell 2Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "9",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "6",
            },
        ],
    },
    {
        id: "4813",
        name: "Spell 3Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "12",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "8",
            },
        ],
    },
    {
        id: "4812",
        name: "Spell 4Lv",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
            },
        ],
    },
    {
        id: "4865",
        name: "Critical Lv.3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "8",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "3",
            },
        ],
    },
    {
        id: "29544",
        name: "Modification Orb (Drain Soul)",
        type: ItemTypeEnum.Enchant,
        attributeList: [],
    },
    {
        id: "29543",
        name: "Modification Orb (Drain Life)",
        type: ItemTypeEnum.Enchant,
        attributeList: [],
    },
    {
        id: "29532",
        name: "Modification Orb (SP Recovery)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.SpRecoveryP,
                formulaText: "20",
            },
        ],
    },
    {
        id: "29529",
        name: "Modification Orb (HP Recovery)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.HpRecoveryP,
                formulaText: "20",
            },
        ],
    },
    {
        id: "29546",
        name: "Modification Orb (Magic Soul)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
        ],
    },
    {
        id: "29545",
        name: "Modification Orb (Magic Healing)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
        ],
    },
    {
        id: "29550",
        name: "Modification Orb (Overpower)",
        type: ItemTypeEnum.Enchant,
        attributeList: [],
    },
    {
        id: "29531",
        name: "Modification Orb (Health)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "500",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "750",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29541",
        name: "Modification Orb (Fixed Cast)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.3",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.2",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.2",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29537",
        name: "Modification Orb (Speed)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29542",
        name: "Modification Orb (Above All)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllPropertyR,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MagicAllPropertyR,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.PhysicalAllPropertyR,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllPropertyR,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalAllPropertyR,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllPropertyR,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29552",
        name: "Modification Orb (Lucky Strike)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
        ],
    },
    {
        id: "29535",
        name: "Modification Orb (Magic Power)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "25",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "25",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29538",
        name: "Modification Orb (Caster)",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "4700",
        name: "Str+1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "1",
            },
        ],
    },
    {
        id: "4701",
        name: "Str+2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "2",
            },
        ],
    },
    {
        id: "4702",
        name: "Str+3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "3",
            },
        ],
    },
    {
        id: "4703",
        name: "Str+4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Str,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4710",
        name: "Int+1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Int,
                formulaText: "1",
            },
        ],
    },
    {
        id: "4711",
        name: "Int+2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Int,
                formulaText: "2",
            },
        ],
    },
    {
        id: "4712",
        name: "Int+3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Int,
                formulaText: "3",
            },
        ],
    },
    {
        id: "4713",
        name: "Int+4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Int,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4720",
        name: "Dex+1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "1",
            },
        ],
    },
    {
        id: "4721",
        name: "Dex+2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "2",
            },
        ],
    },
    {
        id: "4722",
        name: "Dex+3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "3",
            },
        ],
    },
    {
        id: "4723",
        name: "Dex+4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4730",
        name: "Agi+1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "1",
            },
        ],
    },
    {
        id: "4731",
        name: "Agi+2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "2",
            },
        ],
    },
    {
        id: "4732",
        name: "Agi+3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "3",
            },
        ],
    },
    {
        id: "4733",
        name: "Agi+4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4740",
        name: "Vit+1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "1",
            },
        ],
    },
    {
        id: "4741",
        name: "Vit+2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "2",
            },
        ],
    },
    {
        id: "4742",
        name: "Vit+3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "3",
            },
        ],
    },
    {
        id: "4743",
        name: "Vit+4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "4",
            },
        ],
    },
    {
        id: "4750",
        name: "Luk+1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "1",
            },
        ],
    },
    {
        id: "4751",
        name: "Luk+2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "2",
            },
        ],
    },
    {
        id: "4752",
        name: "Luk+3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "3",
            },
        ],
    },
    {
        id: "4753",
        name: "Luk+4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "4",
            },
        ],
    },
    {
        id: "29355",
        name: "Racing (Summoner) Lv1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "10",
            },
        ],
    },
    {
        id: "29356",
        name: "Racing (Summoner) Lv2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.2",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "20",
            },
        ],
    },
    {
        id: "29357",
        name: "Racing (Summoner) Lv3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.5",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "60",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "60",
            },
        ],
    },
    {
        id: "29672",
        name: "Temporal Jewel (Str) Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 2",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 3",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29673",
        name: "Temporal Jewel (Str) Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 4",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 2",
            },
        ],
    },
    {
        id: "29674",
        name: "Temporal Jewel (Str) Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 7",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 7",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 3",
            },
        ],
    },
    {
        id: "29675",
        name: "Temporal Jewel (Agi) Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "<this.Rf/2> * 4",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29676",
        name: "Temporal Jewel (Agi) Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/2> * 3",
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29677",
        name: "Temporal Jewel (Agi) Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "<this.Rf/2> * 7",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29678",
        name: "Temporal Jewel (Vit) Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Def,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "<this.Rf/2> * 200",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29679",
        name: "Temporal Jewel (Vit) Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Def,
                formulaText: "<this.Rf/2> * 7",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "<this.Rf/2> * 300",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "<this.Rf/5> * 2",
            },
        ],
    },
    {
        id: "29680",
        name: "Temporal Jewel (Vit) Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Def,
                formulaText: "<this.Rf/2> * 10",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "<this.Rf/2> * 500",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "<this.Rf/5> * 3",
            },
        ],
    },
    {
        id: "29681",
        name: "Temporal Jewel (Int) Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 2",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29682",
        name: "Temporal Jewel (Int) Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "<this.Rf/2> * 3",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 4",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "<this.Rf/5> * 2",
            },
        ],
    },
    {
        id: "29683",
        name: "Temporal Jewel (Int) Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 7",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "<this.Rf/5> * 3",
            },
        ],
    },
    {
        id: "29684",
        name: "Temporal Jewel (Dex) Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/2> * 1",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 2",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29685",
        name: "Temporal Jewel (Dex) Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/2> * 2",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 2",
            },
        ],
    },
    {
        id: "29686",
        name: "Temporal Jewel (Dex) Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/2> * 3",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 7",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 3",
            },
        ],
    },
    {
        id: "29687",
        name: "Temporal Jewel (Luk) Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "<this.Rf/2> * 2",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 1",
            },
        ],
    },
    {
        id: "29688",
        name: "Temporal Jewel (Luk) Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "<this.Rf/2> * 4",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "<this.Rf/2> * 2",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 2",
            },
        ],
    },
    {
        id: "29689",
        name: "Temporal Jewel (Luk) Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "<this.Rf/2> * 6",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "<this.Rf/2> * 3",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/5> * 3",
            },
        ],
    },
    {
        id: "29061",
        name: "Mettle Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "3",
            },
        ],
    },
    {
        id: "29062",
        name: "Mettle Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "6",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "6",
            },
        ],
    },
    {
        id: "29063",
        name: "Mettle Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "9",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "9",
            },
        ],
    },
    {
        id: "29064",
        name: "Mettle Lv. 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "12",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "12",
            },
        ],
    },
    {
        id: "29065",
        name: "Mettle Lv. 5",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "15",
            },
        ],
    },
    {
        id: "29066",
        name: "Mettle Lv. 6",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "18",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "18",
            },
        ],
    },
    {
        id: "29067",
        name: "Mettle Lv. 7",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "21",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "21",
            },
        ],
    },
    {
        id: "29068",
        name: "Mettle Lv. 8",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "24",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "24",
            },
        ],
    },
    {
        id: "29069",
        name: "Mettle Lv. 9",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "27",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "27",
            },
        ],
    },
    {
        id: "29070",
        name: "Mettle Lv. 10",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "33",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "30",
            },
        ],
    },
    {
        id: "29071",
        name: "Magic Essence Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.1",
            },
        ],
    },
    {
        id: "29072",
        name: "Magic Essence Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "6",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.2",
            },
        ],
    },
    {
        id: "29073",
        name: "Magic Essence Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "9",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.3",
            },
        ],
    },
    {
        id: "29074",
        name: "Magic Essence Lv. 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "12",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.4",
            },
        ],
    },
    {
        id: "29075",
        name: "Magic Essence Lv. 5",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.5",
            },
        ],
    },
    {
        id: "29076",
        name: "Magic Essence Lv. 6",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "18",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.6",
            },
        ],
    },
    {
        id: "29077",
        name: "Magic Essence Lv. 7",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "21",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.7",
            },
        ],
    },
    {
        id: "29078",
        name: "Magic Essence Lv. 8",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "24",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.8",
            },
        ],
    },
    {
        id: "29079",
        name: "Magic Essence Lv. 9",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "27",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.9",
            },
        ],
    },
    {
        id: "29080",
        name: "Magic Essence Lv. 10",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "33",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "1",
            },
        ],
    },
    {
        id: "29081",
        name: "Acute Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "3",
            },
        ],
    },
    {
        id: "29081",
        name: "Acute Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "3",
            },
        ],
    },
    {
        id: "29082",
        name: "Acute Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "6",
            },
        ],
    },
    {
        id: "29083",
        name: "Acute Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "30",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "9",
            },
        ],
    },
    {
        id: "29084",
        name: "Acute Lv. 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "40",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "12",
            },
        ],
    },
    {
        id: "29085",
        name: "Acute Lv. 5",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "50",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "15",
            },
        ],
    },
    {
        id: "29086",
        name: "Acute Lv. 6",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "60",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "18",
            },
        ],
    },
    {
        id: "29087",
        name: "Acute Lv. 7",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "70",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "21",
            },
        ],
    },
    {
        id: "29088",
        name: "Acute Lv. 8",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "80",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "24",
            },
        ],
    },
    {
        id: "29089",
        name: "Acute Lv. 9",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "90",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "27",
            },
        ],
    },
    {
        id: "29090",
        name: "Acute Lv. 10",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "110",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "30",
            },
        ],
    },
    {
        id: "29091",
        name: "Master Archer Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "4",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "1",
            },
        ],
    },
    {
        id: "29092",
        name: "Master Archer Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "8",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "2",
            },
        ],
    },
    {
        id: "29093",
        name: "Master Archer Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "12",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "3",
            },
        ],
    },
    {
        id: "29094",
        name: "Master Archer Lv. 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "16",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "4",
            },
        ],
    },
    {
        id: "29095",
        name: "Master Archer Lv. 5",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "20",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5",
            },
        ],
    },
    {
        id: "29096",
        name: "Master Archer Lv. 6",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "24",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "6",
            },
        ],
    },
    {
        id: "29097",
        name: "Master Archer Lv. 7",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "28",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "7",
            },
        ],
    },
    {
        id: "29098",
        name: "Master Archer Lv. 8",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "32",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "8",
            },
        ],
    },
    {
        id: "29100",
        name: "Master Archer Lv. 10",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "44",
                condition: {
                    equip: ItemTypeEnum.Bow
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
            },
        ],
    },
    {
        id: "29101",
        name: "Adamantine Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "15",
            },
        ],
    },
    {
        id: "29102",
        name: "Adamantine Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "30",
            },
        ],
    },
    {
        id: "29103",
        name: "Adamantine Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "45",
            },
        ],
    },
    {
        id: "29104",
        name: "Adamantine Lv. 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "60",
            },
        ],
    },
    {
        id: "29105",
        name: "Adamantine Lv. 5",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "25",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "75",
            },
        ],
    },
    {
        id: "29106",
        name: "Adamantine Lv. 6",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "30",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "90",
            },
        ],
    },
    {
        id: "29107",
        name: "Adamantine Lv. 7",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "35",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "105",
            },
        ],
    },
    {
        id: "29108",
        name: "Adamantine Lv. 8",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "40",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "120",
            },
        ],
    },
    {
        id: "29109",
        name: "Adamantine Lv. 9",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "45",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "135",
            },
        ],
    },
    {
        id: "29110",
        name: "Adamantine Lv. 10",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "55",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "150",
            },
        ],
    },
    {
        id: "29111",
        name: "Affection Lv. 1",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "3",
            },
        ],
    },
    {
        id: "29112",
        name: "Affection Lv. 2",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "6",
            },
        ],
    },
    {
        id: "29113",
        name: "Affection Lv. 3",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "9",
            },
        ],
    },
    {
        id: "29114",
        name: "Affection Lv. 4",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "12",
            },
        ],
    },
    {
        id: "29115",
        name: "Affection Lv. 5",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "25",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "15",
            },
        ],
    },
    {
        id: "29116",
        name: "Affection Lv. 6",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "30",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "18",
            },
        ],
    },
    {
        id: "29117",
        name: "Affection Lv. 7",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "35",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "21",
            },
        ],
    },
    {
        id: "29118",
        name: "Affection Lv. 8",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "40",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "24",
            },
        ],
    },
    {
        id: "29119",
        name: "Affection Lv. 9",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "45",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "27",
            },
        ],
    },
    {
        id: "29120",
        name: "Affection Lv. 10",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "55",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "30",
            },
        ],
    },
    {
        id: "29668",
        name: "Doram Stone (Upper)",
        type: ItemTypeEnum.CostumeEnchantUpper,
        imgId: 29668,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<S$5021.Lv> * 7",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<S$5021.Lv> * 7",
            },
        ],
    },
    {
        id: "29669",
        name: "Doram Stone (Middle)",
        type: ItemTypeEnum.CostumeEnchantMiddle,
        imgId: 29669,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "20",
            },
        ],
    },
    {
        id: "29670",
        name: "Doram Stone (Lower)",
        type: ItemTypeEnum.CostumeEnchantLower,
        imgId: 29670,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "20",
            },
        ],
    },
    {
        id: "29671",
        name: "Doram Stone (Garment)",
        type: ItemTypeEnum.CostumeEnchantGarment,
        imgId: 29671,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "20",
                condition: {
                    itemList: [
                        {
                            itemId: "29668"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "20",
                condition: {
                    itemList: [
                        {
                            itemId: "29668"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.SpiritOfSavage,
                formulaText: "1",
                condition: {
                    itemList: [
                        {
                            itemId: "29669"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "1",
                condition: {
                    itemList: [
                        {
                            itemId: "29670"
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "29055",
        name: "Reload Stone (Lower)",
        type: ItemTypeEnum.CostumeEnchantLower,
        imgId: 29055,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "1",
            },
        ],
    },
    {
        id: "29054",
        name: "Reload Stone (Middle)",
        type: ItemTypeEnum.CostumeEnchantMiddle,
        imgId: 29054,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "1",
            },
        ],
    },
    {
        id: "29053",
        name: "Reload Stone (Upper)",
        type: ItemTypeEnum.CostumeEnchantUpper,
        imgId: 29053,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "1",
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "2",
                condition: {
                    itemList: [
                        {
                            itemId: "29054"
                        },
                        {
                            itemId: "29055"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "29056",
        name: "Fixed Casting Stone",
        type: ItemTypeEnum.CostumeEnchantGarment,
        imgId: 29056,
        attributeList: [
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.5",
            },
        ],
    },
]
    .sort((a, b) => Number.parseInt(a.id) - Number.parseInt(b.id))