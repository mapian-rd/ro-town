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
            {
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "15",
                condition: {
                    itemList: [
                        {
                            itemId: "4609",
                            symbol: Symbol.gte,
                            number: 0,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalLarge,
                formulaText: "15",
                condition: {
                    itemList: [
                        {
                            itemId: "4609",
                            symbol: Symbol.gte,
                            number: 0,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MonMedPhyRed,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "4609",
                            symbol: Symbol.gte,
                            number: 0,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MonLarPhyRed,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "4609",
                            symbol: Symbol.gte,
                            number: 0,
                        }
                    ]
                }
            },
        ],
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
    },
    {
        id: "4609",
        name: "Khalitzburg Knightage Card",
        type: ItemTypeEnum.CardWeapon,
        attributeList: [
            {
                type: AttributeTypeEnum.Def,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.MonMedPhyRed,
                formulaText: "25",
            },
            {
                type: AttributeTypeEnum.MonLarPhyRed,
                formulaText: "25",
            },
            {
                type: AttributeTypeEnum.MagicMedR,
                formulaText: "25",
            },
            {
                type: AttributeTypeEnum.MagicLargeR,
                formulaText: "25",
            },
        ],
    },
    {
        id: "27260",
        name: "Odoric Card",
        type: ItemTypeEnum.CardShoes,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5",
            },
        ],
    },
    {
        id: "4593",
        name: "Menblatt Card",
        type: ItemTypeEnum.CardArmor,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "<dex/10> * 1",
            },
        ],
    },
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
        id: "29544",
        name: "Modification Orb (Drain Soul)",
        type: ItemTypeEnum.Enchant,
        attributeList: [],
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
]

export const itemDatabase: Equipment[] = [
    {
        id: "26155",
        name: "Meowmeow Foxtail",
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
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
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
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "20",
                condition: {
                    refireList: [
                        {
                            number: 11,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "20",
                condition: {
                    refireList: [
                        {
                            number: 11,
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
                formulaText: "(<this.Rf/1> - 10) * 0.1",
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
        id: "15377",
        name: "Illusion Armor B-type",
        type: ItemTypeEnum.Armor,
        equipmentLevel: 1,
        def: 105,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 10",
            },
            {
                type: AttributeTypeEnum.VctPercent,
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
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "20933",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "50",
                condition: {
                    itemList: [
                        {
                            itemId: "20934",
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
        id: "15975",
        name: "Flying Drone",
        type: ItemTypeEnum.Middle,
        equipmentLevel: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.PhysicalAllProperty,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "15969",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllElement,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "15969",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalAllPropertyR,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "25695",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllPropertyR,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "25695",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "25695",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
        ]
    },
    {
        id: "15969",
        name: "Twin Cannon",
        type: ItemTypeEnum.Lower,
        equipmentLevel: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "4",
                condition: {
                    itemList: [
                        {
                            itemId: "29537",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MeleeMul,
                formulaText: "4",
                condition: {
                    itemList: [
                        {
                            itemId: "29537",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "4",
                condition: {
                    itemList: [
                        {
                            itemId: "29537",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllClass,
                formulaText: "6",
                condition: {
                    itemList: [
                        {
                            itemId: "29538",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalAllClass,
                formulaText: "6",
                condition: {
                    itemList: [
                        {
                            itemId: "29539",
                            number: 0,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "20933",
        name: "Illusion Engine Wing A-type",
        type: ItemTypeEnum.Garment,
        equipmentLevel: 1,
        def: 50,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "1000",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "<this.Rf/2> * 100",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5",
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
                type: AttributeTypeEnum.CritDmg,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "22196",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "22197",
                        }
                    ]
                }
            },
        ],
    },

    {
        id: "20934",
        name: "Illusion Engine Wing B-type",
        type: ItemTypeEnum.Garment,
        equipmentLevel: 1,
        def: 50,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "1000",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "<this.Rf/2> * 100",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5",
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
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "22196",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllElement,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "22197",
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "22197",
        name: "Illusion Leg B-type",
        type: ItemTypeEnum.Shoes,
        equipmentLevel: 1,
        def: 20,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "200",
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "<this.Rf/2> * 20",
            },
            {
                type: AttributeTypeEnum.MagicAllElement,
                formulaText: "5",
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
                type: AttributeTypeEnum.SpPercent,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "15376",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "15377",
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "22196",
        name: "Illusion Leg A-type",
        type: ItemTypeEnum.Shoes,
        equipmentLevel: 1,
        def: 20,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "200",
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "<this.Rf/2> * 20",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5",
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
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "15376",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "15377",
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "28913",
        name: "Ultralight Magic Shield",
        type: ItemTypeEnum.Shield,
        equipmentLevel: 1,
        def: 50,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalPenMon,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.NeutralDmgR,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.NeutralDmgR,
                formulaText: "2",
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
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "2",
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
                type: AttributeTypeEnum.NeutralDmgR,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        }
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
                        }
                    ]
                }
            },
        ],
    }
]