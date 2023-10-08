import { doramClass } from "../constraint/class";
import { CardWeapon } from "../constraint/itemType";
import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Equipment, Item } from "../model/Itemv2";
import { SkillEnum } from "../model/skill";
import { Symbol } from "../model/Symbol";

export const cardDatabase: Item[] = [
    {
        id: "27361",
        name: "Corrupted Wanderer Card",
        type: ItemTypeEnum.CardWeapon,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "30",
            },
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "30",
            },
        ],
    },
    {
        id: "4608",
        name: "White Knight Card",
        type: ItemTypeEnum.CardWeapon,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "20",
            },
            // {
            //     type: AttributeTypeEnum.MonMedPhyDmg,
            //     formulaText: "15",
            //     condition: {
            //         itemList: [
            //             {
            //                 item: 
            //             }
            //         ]
            //     }
            // },
        ],
        // combos: [
        //     {
        //         items: ["Khalitzburg Knightage Card"],
        //         attributes: [
        //             {
        //                 type: AttributeTypeEnum.MonMedPhyDmg,
        //                 value: 20,
        //             },
        //             {
        //                 type: AttributeTypeEnum.MonLarPhyDmg,
        //                 value: 20,
        //             },
        //             {
        //                 type: AttributeTypeEnum.MonMedPhyRed,
        //                 value: 5,
        //             },
        //             {
        //                 type: AttributeTypeEnum.MonLarPhyRed,
        //                 value: 5,
        //             },
        //         ]
        //     }
        // ]
    },
    {
        id: "27103",
        name: "Living Dead Card",
        type: ItemTypeEnum.Enchant,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "20",
            }
        ]
    }
]

export const enchantDatabase: Item[] = [
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
    }
]

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
    }
]

export const itemDatabase: Equipment[] = [
    {
        id: "26155",
        name: "Meowmeow Foxtail [2]",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 4,
        cardSlot: 2,
        optionSlot: 2,
        atk: 300,
        matk: 300,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 10"
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/3> * 2"
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 10"
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "<this.Rf/3> * 2"
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "15",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "19296",
        name: "Fancy Feather Hat",
        type: ItemTypeEnum.Upper,
        equipmentLevel: 1,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 15"
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "7",
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
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 11,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "<this.Rf/1> * 0.1",
                condition: {
                    refireList: [
                        {
                            number: 10,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "26111",
        name: "Metal Foxtail",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 3,
        atk: 120,
        matk: 120,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/1> * 3"
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/1> * 3"
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "( <BaseLv/10> - 20 / 10 ) * 3",
                max: "( 120 / 10 - 20 / 10 ) * 3",
                condition: {
                    baseLv: {
                        number: 30,
                        symbol: Symbol.gte
                    }
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "( <BaseLv/10> - 20 / 10 ) * 3",
                max: "( 120 / 10 - 20 / 10 ) * 3",
                condition: {
                    baseLv: {
                        number: 30,
                        symbol: Symbol.gte
                    }
                }
            }
        ],
    },
    {
        id: "15376",
        name: "Illusion Armor A-type",
        type: ItemTypeEnum.Armor,
        equipmentLevel: 1,
        def: 105,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 10",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "50",
                condition: {
                    itemList: [
                        {
                            itemId: "20933",
                            number: 0,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "20934",
                            number: 0,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "490392",
        name: "Scarlet Worm Charm",
        type: ItemTypeEnum.Accessery,
        equipmentLevel: 1,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "50",
                skill: SkillEnum.PickyPeck,
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                formulaText: "<S$5033.Lv> * <dex/5>",
                skill: SkillEnum.PickyPeck,
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                formulaText: "<BaseLv/5> * 1",
                skill: SkillEnum.LunaticCarrotBeat,
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "15",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Hiss,
                            number: 5,
                            symbol: Symbol.eq,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Hiss,
                            number: 5,
                            symbol: Symbol.eq,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Hiss,
                            number: 5,
                            symbol: Symbol.eq,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalSmall,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Hiss,
                            number: 5,
                            symbol: Symbol.eq,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "30",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.PowerOfFlock,
                            number: 5,
                            symbol: Symbol.eq,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Cooldown,
                formulaText: "2",
                skill: SkillEnum.LunaticCarrotBeat,
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.SpiritOfSavage,
                            number: 5,
                            symbol: Symbol.eq,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "1244",
        name: "Holy Dagger",
        type: ItemTypeEnum.Dagger,
        equipmentLevel: 4,
        atk: 100,
        attributeList: [
        ],
    }
]