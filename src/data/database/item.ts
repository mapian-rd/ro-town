import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Equipment } from "../model/Itemv2";
import { SkillEnum } from "../model/skill";
import { Symbol } from "../model/Symbol";

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
        id: "28424",
        name: "Plumpy Worm Charm",
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
                formulaText: "<S$5033.Lv> * <dex/6>",
                skill: SkillEnum.PickyPeck,
            },
        ],
    },
    {
        id: "28422",
        name: "Shining Twig Charm",
        type: ItemTypeEnum.Accessery,
        equipmentLevel: 1,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "50",
                skill: SkillEnum.SilvervineStemSpear,
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                formulaText: "<S$5026.Lv> * <int/6>",
                skill: SkillEnum.SilvervineStemSpear,
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
                type: AttributeTypeEnum.IgnoreDefNormal,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.PhysicalNeutralR,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.PhysicalNeutralR,
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
                type: AttributeTypeEnum.PhysicalNeutralR,
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
    },
    {
        id: "19875",
        name: "Costume Love Rabbit Hood",
        type: ItemTypeEnum.CostumeUML,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 3,
        attributeList: [
        ],
    },
    {
        id: "480158",
        name: "Costume Lunatic Bag",
        type: ItemTypeEnum.CostumeGarment,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 1,
        attributeList: [
        ],
    },
    {
        id: "2576",
        name: "Bravery Bag",
        type: ItemTypeEnum.Garment,
        equipmentLevel: 1,
        def: 20,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Enable,
                skill: SkillEnum.Greed,
                formulaText: "1",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "20",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Str,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "10",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Str,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "30",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "20",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalNeutralR,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Vit,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalNeutralR,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Vit,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "8",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Agi,
                            number: 90,
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
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Agi,
                            number: 90,
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
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Dex,
                            number: 90,
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
                            number: 9,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Dex,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "10",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Luk,
                            number: 90,
                            symbol: Symbol.gte,
                        }
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
                        }
                    ],
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Luk,
                            number: 90,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "31121",
        name: "Costume Stall of Bat",
        type: ItemTypeEnum.CostumeLower,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 1,
        attributeList: [
        ],
    },
    {
        id: "19294",
        name: "Costume Cyber Cat Ear Headphones (Red)",
        type: ItemTypeEnum.CostumeUpper,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 1,
        attributeList: [
        ],
    },
    {
        id: "24637",
        name: "Savage Rabbit Shadow Earring",
        type: ItemTypeEnum.ShadowEarring,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5",
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
                    ],
                },
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "<this.Rf/1> + <I$24638.Rf/1> + <I$24639.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24638",
                        },
                        {
                            itemId: "24639",
                        },
                    ],
                },
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SpiritOfSavage,
                formulaText: "<this.Rf/1> + <I$24638.Rf/1> + <I$24639.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24638",
                        },
                        {
                            itemId: "24639",
                        },
                    ],
                },
            },
            {
                type: AttributeTypeEnum.IgnoreDefAllRace,
                formulaText: "40 + <this.Rf/1> + <I$24408.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24408",
                        },
                    ],
                },
            },
        ],
    },
    {
        id: "24639",
        name: "Savage Rabbit Shadow Shoes",
        type: ItemTypeEnum.ShadowShoes,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllSize,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.PhysicalAllSize,
                formulaText: "<this.Rf/2> * 1",
            },
        ],
    },
    {
        id: "24638",
        name: "Savage Rabbit Shadow Pendant",
        type: ItemTypeEnum.ShadowPendent,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SpiritOfSavage,
                formulaText: "<this.Rf/2> * 3",
            },
        ],
    },
    {
        id: "24408",
        name: "Doram Physical Shadow Armor",
        type: ItemTypeEnum.ShadowArmor,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "<this.Rf/1> * 3",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Str,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                        {
                            itemId: "24287"
                        },
                        {
                            itemId: "24316"
                        },
                        {
                            itemId: "24408"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "24287",
        name: "Doram Physical Shadow Weapon",
        type: ItemTypeEnum.ShadowWeapon,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "<this.Rf/1> * 1",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.PowerofLife,
                            number: 1,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PD,
                formulaText: "2",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PD,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
        ]
    },
    {
        id: "24316",
        name: "Doram Physical Shadow Shield",
        type: ItemTypeEnum.ShadowShield,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
                condition: {
                    skillList: [
                        {
                            // active
                            skill: SkillEnum.ArclouseDash,
                            number: 1,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "<this.Rf/1> * 0.2",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 9,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Str,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "2",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "2",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpUsedDP,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "24287"
                        },
                    ]
                }
            },
        ]
    },
    {
        id: "24409",
        name: "Doram Physical Shadow Shoes",
        type: ItemTypeEnum.ShadowShoes,
        equipmentLevel: 1,
        def: 0,
        optionSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.Hiss,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.Hiss,
                formulaText: "<this.Rf/2> * 3",
            },
        ]
    },
    {
        id: "19769",
        name: "Costume Mischievous Fairy",
        type: ItemTypeEnum.CostumeMiddle,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 1,
        attributeList: [
        ],
    },
    {
        id: "19823",
        name: "Costume White Cat Hood",
        type: ItemTypeEnum.CostumeUM,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 2,
        attributeList: [
        ],
    },
    {
        id: "21206",
        name: "Costume Nut Cracker",
        type: ItemTypeEnum.CostumeML,
        equipmentLevel: 1,
        def: 0,
        enchantSlot: 2,
        attributeList: [
        ],
    },
    {
        id: "22210",
        imgId: 22262,
        name: "Fluffy Fish Shoes",
        type: ItemTypeEnum.Shoes,
        equipmentLevel: 1,
        def: 12,
        attributeList: [
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 5,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "5",
                condition: {
                    refireList: [
                        {
                            number: 5,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "10",
                condition: {
                    refireList: [
                        {
                            number: 5,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
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
                type: AttributeTypeEnum.SpPercent,
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
                type: AttributeTypeEnum.Delay,
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
                type: AttributeTypeEnum.FctPercent,
                formulaText: "50",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Grooming
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Endure,
                formulaText: "1",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Grooming
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.VctPercent,
                skill: SkillEnum.BunchOfShrimp,
                formulaText: "<S$5051.Lv> * 10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.TastyShrimpParty
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.VctPercent,
                skill: SkillEnum.TastyShrimpParty,
                formulaText: "<S$5051.Lv> * 10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.TastyShrimpParty
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Heal,
                formulaText: "<S$5050.Lv> * 10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Purring
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "19205",
        name: "Racing Cap(Summoner)",
        type: ItemTypeEnum.Upper,
        equipmentLevel: 1,
        def: 10,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.SpiritOfSavage,
                formulaText: "<S$5036.Lv> * 4",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.NyangGrass,
                formulaText: "<S$5028.Lv> * 8",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.TastyShrimpParty,
                formulaText: "<S$5041.Lv> * 4",
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "15",
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
        id: "470026",
        name: "Cutie Piggy Shoes",
        type: ItemTypeEnum.Shoes,
        equipmentLevel: 1,
        def: 10,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "7",
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
                type: AttributeTypeEnum.SpPercent,
                formulaText: "7",
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
                type: AttributeTypeEnum.HpPercent,
                formulaText: "10",
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
                type: AttributeTypeEnum.SpPercent,
                formulaText: "10",
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
                type: AttributeTypeEnum.Delay,
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
            // {
            //     condition: {
            //         skillList: [
            //             {
            //                 skill: SkillEnum.SpritOfLife
            //             }
            //         ]
            //     }
            // },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<S$5047.Lv> * 5",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Hiss
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PerfectHit,
                formulaText: "30",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.PowerOfFlock,
                            number: 5,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "<S$5046.Lv> * 5",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.SpiritOfSavage
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "1697",
        name: "Yellow Exquisite Foxtail Model",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 4,
        atk: 270,
        cardSlot: 1,
        enchantSlot: 2,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "9",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "7",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "<this.Rf/2> * 20",
            },
            {
                type: AttributeTypeEnum.RWeaponAtkP,
                formulaText: "40",
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
                type: AttributeTypeEnum.RWeaponMatkP,
                formulaText: "40",
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
                type: AttributeTypeEnum.RWeaponAtkP,
                formulaText: "(<this.Rf/1> - 7) * 20",
                max: "60",
                condition: {
                    refireList: [
                        {
                            number: 8,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.RWeaponMatkP,
                formulaText: "(<this.Rf/1> - 7) * 20",
                max: "60",
                condition: {
                    refireList: [
                        {
                            number: 8,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "19274",
        name: "Open Air Headset",
        type: ItemTypeEnum.Lower,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.SpUsedDP,
                formulaText: "5",
            },
        ],
    },
    {
        id: "19492",
        name: "Temporal Circlet (Summoner)",
        type: ItemTypeEnum.Upper,
        equipmentLevel: 1,
        def: 10,
        cardSlot: 1,
        enchantSlot: 3,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 15",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "<this.Rf/3> * 20",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "<this.Rf/3> * 20",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "<this.Rf/4> * 5",
            },
            {
                type: AttributeTypeEnum.MagicSkillNeutral,
                formulaText: "<this.Rf/4> * 7",
            },
            {
                type: AttributeTypeEnum.Delay,
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
        ],
    },
    {
        id: "490149",
        name: "Glittering Meow Meow Choker",
        type: ItemTypeEnum.Accessery,
        equipmentLevel: 1,
        def: 0,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.MagicAllSize,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "<BaseLv/5> * 1",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "<BaseLv/5> * 1",
            },
            {
                type: AttributeTypeEnum.MagicSkillFire,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.SpiritOfLand,
                            number: 1,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.MagicSkillGhost,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.SpiritOfLand,
                            number: 1,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.MagicSkillNeutral,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.SpiritOfLand,
                            number: 1,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "15",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Chattering,
                            number: 5,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.Chattering,
                            number: 5,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "30",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.NyangGrass,
                            number: 5,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "2",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.MeowMeow,
                            number: 5,
                            symbol: Symbol.gte,
                        }
                    ]
                },
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "29552",
                        }
                    ],
                },
            },
            {
                // hidden
                type: AttributeTypeEnum.Int,
                formulaText: "7",
            },
        ],
    },
    {
        id: "24584",
        name: "Booster Shadow Armor",
        type: ItemTypeEnum.ShadowArmor,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
            },
        ],
    },
    {
        id: "24587",
        name: "Booster Shadow Earring",
        type: ItemTypeEnum.ShadowEarring,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "15",
            },
        ],
    },
    {
        id: "24588",
        name: "Booster Shadow Pendant",
        type: ItemTypeEnum.ShadowPendent,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "15",
            },
        ],
    },
    {
        id: "24585",
        name: "Booster Shadow Shield",
        type: ItemTypeEnum.ShadowShield,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
            },
        ],
    },
    {
        id: "24586",
        name: "Booster Shadow Shoes",
        type: ItemTypeEnum.ShadowShoes,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "7",
            },
        ],
    },
    {
        id: "24739",
        name: "Doram Booster Shadow Weapon",
        type: ItemTypeEnum.ShadowWeapon,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.MagicAllElement,
                formulaText: "15",
                condition: {
                    itemList: [
                        {
                            itemId: "24586"
                        },
                        {
                            itemId: "24585"
                        },
                        {
                            itemId: "24588"
                        },
                        {
                            itemId: "24587"
                        },
                        {
                            itemId: "24584"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "15",
                condition: {
                    itemList: [
                        {
                            itemId: "24586"
                        },
                        {
                            itemId: "24585"
                        },
                        {
                            itemId: "24588"
                        },
                        {
                            itemId: "24587"
                        },
                        {
                            itemId: "24584"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "24586"
                        },
                        {
                            itemId: "24585"
                        },
                        {
                            itemId: "24588"
                        },
                        {
                            itemId: "24587"
                        },
                        {
                            itemId: "24584"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "24586"
                        },
                        {
                            itemId: "24585"
                        },
                        {
                            itemId: "24588"
                        },
                        {
                            itemId: "24587"
                        },
                        {
                            itemId: "24584"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.IgnoreDefAllRace,
                formulaText: "70",
                condition: {
                    itemList: [
                        {
                            itemId: "24586"
                        },
                        {
                            itemId: "24585"
                        },
                        {
                            itemId: "24588"
                        },
                        {
                            itemId: "24587"
                        },
                        {
                            itemId: "24584"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.IgnoreMdefAllRace,
                formulaText: "70",
                condition: {
                    itemList: [
                        {
                            itemId: "24586"
                        },
                        {
                            itemId: "24585"
                        },
                        {
                            itemId: "24588"
                        },
                        {
                            itemId: "24587"
                        },
                        {
                            itemId: "24584"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "28948",
        name: "Doram Shield",
        type: ItemTypeEnum.Shield,
        equipmentLevel: 1,
        def: 0,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "50",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "50",
            },
            // {
            //     type: AttributeTypeEnum.VctPercent,
            //     skill: SkillEnum.PickyPeck,
            //     formulaText: "-15",
            // },
            // {
            //     type: AttributeTypeEnum.VctPercent,
            //     skill: SkillEnum.SilvervineStemSpear,
            //     formulaText: "-15",
            // },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "(<this.Rf/1> - 5) * 10",
                condition: {
                    refireList: [
                        {
                            number: 6,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "(<this.Rf/1> - 5) * 10",
                condition: {
                    refireList: [
                        {
                            number: 6,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "26164",
        name: "Electric Fox-OS",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 4,
        atk: 250,
        matk: 350,
        cardSlot: 2,
        optionSlot: 2,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "20",
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
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
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
                type: AttributeTypeEnum.MagicSkillNeutral,
                formulaText: "15",
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
                type: AttributeTypeEnum.MagicSkillGhost,
                formulaText: "15",
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
                type: AttributeTypeEnum.MagicSkillWind,
                formulaText: "15",
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
                type: AttributeTypeEnum.MagicSkillWater,
                formulaText: "15",
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
                type: AttributeTypeEnum.MagicSkillFire,
                formulaText: "15",
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
                type: AttributeTypeEnum.MagicSkillEarth,
                formulaText: "15",
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
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "30",
                condition: {
                    refireList: [
                        {
                            number: 11,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "400022",
        name: "Ignis Cap K",
        type: ItemTypeEnum.Upper,
        equipmentLevel: 1,
        def: 0,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 20",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "15",
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
                type: AttributeTypeEnum.RangeMul,
                formulaText: "15",
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
                type: AttributeTypeEnum.PhysicalSmall,
                formulaText: "15",
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
                type: AttributeTypeEnum.PhysicalMed,
                formulaText: "15",
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
                formulaText: "0.2",
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
                type: AttributeTypeEnum.Atk,
                formulaText: "30",
                condition: {
                    itemList: [
                        {
                            itemId: "16088"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CartCannon,
                formulaText: "<I$16088.Rf/2> * 4",
                condition: {
                    itemList: [
                        {
                            itemId: "16088"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.ArrowStrom,
                formulaText: "2.5",
                condition: {
                    itemList: [
                        {
                            itemId: "18178"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<I$18178.Rf/2> * 7",
                condition: {
                    itemList: [
                        {
                            itemId: "18178"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "28136"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalSmallR,
                formulaText: "<I$28136.Rf/2> * 3",
                condition: {
                    itemList: [
                        {
                            itemId: "28136"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicSmallR,
                formulaText: "<I$28136.Rf/2> * 3",
                condition: {
                    itemList: [
                        {
                            itemId: "28136"
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "410136",
        name: "Raven Of Tomb",
        type: ItemTypeEnum.Middle,
        equipmentLevel: 1,
        def: 10,
        cardSlot: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllClass,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Str,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "10",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Str,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.PhysicalAllClass,
                formulaText: "6",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Str,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "10",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Str,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllElement,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "6",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllElement,
                formulaText: "6",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "3",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Dex,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Dex,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "3",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Dex,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "6",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Dex,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Vit,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Vit,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Vit,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "4",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Vit,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "20",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Luk,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "20",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Luk,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "40",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Luk,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "40",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Luk,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "10",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Agi,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "7",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Agi,
                            number: 100,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "10",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Agi,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.CritDmg,
                formulaText: "7",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Agi,
                            number: 120,
                            symbol: Symbol.gte,
                        },
                    ]
                }
            },
        ]
    },
    {
        
        id: "550014",
        name: "Patent Meowmeow Foxtail",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 4,
        atk: 350,
        matk: 350,
        cardSlot: 2,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 15",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/2> * 15",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.LunaticCarrotBeat,
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
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
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
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
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
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "25",
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
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "25",
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
                type: AttributeTypeEnum.Luk,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "22238",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "22238",
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "22238",
                        }
                    ]
                }
            },
        ],
    },
    {
        
        id: "24634",
        name: "Picky Rush Shadow Weapon",
        type: ItemTypeEnum.ShadowWeapon,
        equipmentLevel: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "3",
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
                formulaText: "4",
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
                formulaText: "( <this.Rf/1> + <I$24636.Rf/1> + <I$24635.Rf/1> ) / 2",
                condition: {
                    itemList: [
                        {
                            itemId: "24636"
                        },
                        {
                            itemId: "24635"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.IgnoreDefAllRace,
                formulaText: "40 + <this.Rf/1> + <I$24409.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24409"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "24636",
        name: "Picky Rush Shadow Armor",
        type: ItemTypeEnum.ShadowArmor,
        equipmentLevel: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "<this.Rf/2> * 1",
            },
        ],
    },
    {
        id: "24635",
        name: "Picky Rush Shadow Shield",
        type: ItemTypeEnum.ShadowShield,
        equipmentLevel: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllSize,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.PhysicalAllSize,
                formulaText: "<this.Rf/2> * 1",
            },
        ],
    },
    {
        id: "28945",
        name: "Bloody Knight's Shield",
        type: ItemTypeEnum.Shield,
        equipmentLevel: 1,
        def: 0,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.PhysicalAllPropertyR,
                formulaText: "7",
            },
            {
                type: AttributeTypeEnum.MagicAllPropertyR,
                formulaText: "7",
            },
            {
                type: AttributeTypeEnum.Atk,
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
                type: AttributeTypeEnum.Matk,
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
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
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
                type: AttributeTypeEnum.Delay,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 12,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "20859",
        name: "Phreeoni Wing",
        type: ItemTypeEnum.Garment,
        equipmentLevel: 1,
        def: 10,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "20",
                condition: {
                    refireList: [
                        {
                            number: 8,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "30",
                condition: {
                    refireList: [
                        {
                            number: 10,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "50",
                condition: {
                    refireList: [
                        {
                            number: 12,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "-150",
                condition: {
                    itemList: [
                        {
                            itemId: "4121"
                        },
                    ],
                }
            },
            {
                type: AttributeTypeEnum.PerfectHit,
                formulaText: "50",
                condition: {
                    itemList: [
                        {
                            itemId: "4121"
                        },
                    ],
                }
            },
            {
                type: AttributeTypeEnum.SkillR,
                skill: SkillEnum.StoneCurse,
                formulaText: "100",
                condition: {
                    itemList: [
                        {
                            itemId: "4121"
                        },
                    ],
                }
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "-150",
                condition: {
                    itemList: [
                        {
                            itemId: "4537"
                        },
                    ],
                }
            },
            {
                type: AttributeTypeEnum.PerfectHit,
                formulaText: "50",
                condition: {
                    itemList: [
                        {
                            itemId: "4537"
                        },
                    ],
                }
            },
            {
                type: AttributeTypeEnum.SkillR,
                skill: SkillEnum.StoneCurse,
                formulaText: "100",
                condition: {
                    itemList: [
                        {
                            itemId: "4537"
                        },
                    ],
                }
            },
        ],
    },
    {
        id: "24410",
        name: "Doram Magical Shadow Armor",
        type: ItemTypeEnum.ShadowArmor,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "<this.Rf/1> * 3",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.SilvervineStemSpear,
                formulaText: "<this.Rf/1> * 1",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Str,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "7",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.IgnoreDefNormal,
                formulaText: "50",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.IgnoreMdefNormal,
                formulaText: "50",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                        {
                            itemId: "24317"
                        },
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "24411",
        name: "Doram Magical Shadow Shoes",
        type: ItemTypeEnum.ShadowShoes,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.Chattering,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.Chattering,
                formulaText: "<this.Rf/2> * 3",
            },
        ],
    },
    {
        id: "24317",
        name: "Doram Magical Shadow Shield",
        type: ItemTypeEnum.ShadowShield,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "<this.Rf/1> * 0.1",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
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
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "5",
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
                type: AttributeTypeEnum.Str,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Agi,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Vit,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Int,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Luk,
                formulaText: "3",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "2",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "2",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpUsedDP,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "24286"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "24286",
        name: "Doram Magical Shadow Weapon",
        type: ItemTypeEnum.ShadowWeapon,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "<this.Rf/1> * 1",
            },
            {
                type: AttributeTypeEnum.Fct,
                formulaText: "0.1",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.PowerOfLand
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SpUsedDP,
                formulaText: "3",
                condition: {
                    skillList: [
                        {
                            skill: SkillEnum.PowerOfSea
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MatkPercent,
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
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
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
    },
    {
        id: "24344",
        name: "Blitz Shadow Armor",
        type: ItemTypeEnum.ShadowArmor,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Def,
                formulaText: "25",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "<this.Rf/2> * 5",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
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
                type: AttributeTypeEnum.Delay,
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
                type: AttributeTypeEnum.Mdef,
                formulaText: "<this.Rf/1> + <I$24343.Rf/1>",
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
                    refineSum: {
                        items: [
                            "24344", "24343"
                        ],
                        number: 15,
                        symbol: Symbol.gte,
                    }
                }
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "1",
                condition: {
                    refineSum: {
                        items: [
                            "24344", "24343"
                        ],
                        number: 15,
                        symbol: Symbol.gte,
                    }
                }
            },
        ],
    },
    {
        id: "24343",
        name: "Blitz Shadow Weapon",
        type: ItemTypeEnum.ShadowWeapon,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
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
                type: AttributeTypeEnum.Delay,
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
        ],
    },
    {
        id: "24217",
        name: "Blitz Shadow Earring",
        type: ItemTypeEnum.ShadowEarring,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
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
                formulaText: "<this.Rf/1> + <I$24218.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24218"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
                condition: {
                    refineSum: {
                        number: 15,
                        symbol: Symbol.gte,
                        items: ["24217", "24218"]
                    }
                }
            },
        ],
    },
    {
        id: "24218",
        name: "Blitz Shadow Pendant",
        type: ItemTypeEnum.ShadowPendent,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
                condition: {
                    refireList: [
                        {
                            number: 7,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "24232",
        name: "Blitz Shadow Shield",
        type: ItemTypeEnum.ShadowShield,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Critical,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
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
                type: AttributeTypeEnum.Flee,
                formulaText: "5",
                condition: {
                    itemList: [
                        {
                            itemId: "24231"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
                condition: {
                    refineSum: {
                        number: 15,
                        symbol: Symbol.gte,
                        items: ["24232", "24231"]
                    }
                }
            },
        ],
    },
    {
        id: "24231",
        name: "Blitz Shadow Shoes",
        type: ItemTypeEnum.ShadowShoes,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.Aspd,
                formulaText: "1",
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
        ],
    },
    {
        id: "24642",
        name: "Catnip Shadow Armor",
        type: ItemTypeEnum.ShadowArmor,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.MagicAllSize,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MagicAllSize,
                formulaText: "<this.Rf/2> * 1",
            },
        ],
    },
    {
        id: "24641",
        name: "Catnip Shadow Shield",
        type: ItemTypeEnum.ShadowShield,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.Cooldown,
                skill: SkillEnum.NyangGrass,
                formulaText: "4",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "<this.Rf/2> * 3",
            },
        ],
    },
    {
        id: "24640",
        name: "Catnip Shadow Weapon",
        type: ItemTypeEnum.ShadowWeapon,
        equipmentLevel: 1,
        def: 0,
        attributeList: [
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "5",
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
                type: AttributeTypeEnum.VctPercent,
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
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "<this.Rf/1> + <I$24641.Rf/1> + <I$24642.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24641"
                        },
                        {
                            itemId: "24642"
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.IgnoreMdefAllRace,
                formulaText: "40 + <this.Rf/1> + <I$24411.Rf/1>",
                condition: {
                    itemList: [
                        {
                            itemId: "24411"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "28953",
        name: "Poring Combat Shield",
        type: ItemTypeEnum.Shield,
        equipmentLevel: 1,
        def: 80,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.PhysicalAllSizeR,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.MagicAllSizeR,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "5",
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
                type: AttributeTypeEnum.SpPercent,
                formulaText: "5",
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
        ],
    },
    {
        id: "460003",
        name: "Feather Shield",
        type: ItemTypeEnum.Shield,
        equipmentLevel: 1,
        def: 150,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "2",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.Mdef,
                formulaText: "8",
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "2",
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
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "3",
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
                type: AttributeTypeEnum.PhysicalAllRace,
                formulaText: "6",
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
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "6",
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
                type: AttributeTypeEnum.Delay,
                formulaText: "3",
                condition: {
                    refireList: [
                        {
                            number: 12,
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
                            number: 12,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Enable,
                skill: SkillEnum.ShieldSpell,
                formulaText: "2",
                condition: {
                    refireList: [
                        {
                            number: 12,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },
    {
        id: "470003",
        name: "Range Booster Boots",
        type: ItemTypeEnum.Shoes,
        equipmentLevel: 1,
        def: 18,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.Hit,
                formulaText: "15",
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "<this.Rf/3> * 50",
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "300",
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
                type: AttributeTypeEnum.Fct,
                formulaText: "0.5",
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
        id: "490007",
        name: "Range Booster Brooch",
        type: ItemTypeEnum.Accessery,
        equipmentLevel: 1,
        def: 0,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.HpPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "2",
            },
        ],
    },
    {
        id: "480003",
        name: "Range Booster Manteau",
        type: ItemTypeEnum.Garment,
        equipmentLevel: 1,
        def: 30,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/3> * 2",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "5",
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
                type: AttributeTypeEnum.Delay,
                formulaText: "10",
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
        id: "450004",
        name: "Range Booster Suit",
        type: ItemTypeEnum.Armor,
        equipmentLevel: 1,
        def: 100,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "<this.Rf/3> * 1",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "50",
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
                type: AttributeTypeEnum.Delay,
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
        ],
    },
    {
        id: "550002",
        name: "Boosting Foxtail",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 4,
        atk: 250,
        matk: 260,
        cardSlot: 2,
        attributeList: [
            {
                type: AttributeTypeEnum.AtkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<this.Rf/1> * 2",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/1> * 2",
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "<BaseLv/15> * 3",
                max: "36",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<BaseLv/15> * 3",
                max: "36",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "<S$5048.Lv> * 2",
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
                type: AttributeTypeEnum.RangeMul,
                formulaText: "<S$5046.Lv> * 2",
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
                type: AttributeTypeEnum.PhysicalAllSize,
                formulaText: "10",
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
                type: AttributeTypeEnum.MagicAllSize,
                formulaText: "10",
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
                type: AttributeTypeEnum.Matk,
                formulaText: "20",
                condition: {
                    itemList: [
                        {
                            itemId: "490005"
                        },
                        {
                            itemId: "480001"
                        },
                        {
                            itemId: "450002"
                        },
                        {
                            itemId: "470001"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.MagicAllSize,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "490005"
                        },
                        {
                            itemId: "480001"
                        },
                        {
                            itemId: "450002"
                        },
                        {
                            itemId: "470001"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "<BaseLv/15> * 2",
                max: "24",
                condition: {
                    itemList: [
                        {
                            itemId: "490005"
                        },
                        {
                            itemId: "480001"
                        },
                        {
                            itemId: "450002"
                        },
                        {
                            itemId: "470001"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.CatnipMeteor,
                formulaText: "35",
                condition: {
                    itemList: [
                        {
                            itemId: "490005"
                        },
                        {
                            itemId: "480001"
                        },
                        {
                            itemId: "450002"
                        },
                        {
                            itemId: "470001"
                        },
                    ],
                    skillList: [
                        {
                            skill: SkillEnum.SilvervineStemSpear,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Atk,
                formulaText: "20",
                condition: {
                    itemList: [
                        {
                            itemId: "450004"
                        },
                        {
                            itemId: "480003"
                        },
                        {
                            itemId: "490007"
                        },
                        {
                            itemId: "470003"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.Delay,
                formulaText: "10",
                condition: {
                    itemList: [
                        {
                            itemId: "450004"
                        },
                        {
                            itemId: "480003"
                        },
                        {
                            itemId: "490007"
                        },
                        {
                            itemId: "470003"
                        },
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "<BaseLv/15> * 2",
                max: "24",
                condition: {
                    itemList: [
                        {
                            itemId: "450004"
                        },
                        {
                            itemId: "480003"
                        },
                        {
                            itemId: "490007"
                        },
                        {
                            itemId: "470003"
                        },
                    ],
                    skillList: [
                        {
                            skill: SkillEnum.ArclouseDash,
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.SkillDmg,
                skill: SkillEnum.PickyPeck,
                formulaText: "35",
                condition: {
                    itemList: [
                        {
                            itemId: "450004"
                        },
                        {
                            itemId: "480003"
                        },
                        {
                            itemId: "490007"
                        },
                        {
                            itemId: "470003"
                        },
                    ]
                }
            },
        ],
    },
    {
        id: "490005",
        name: "Elemental Booster Earring",
        type: ItemTypeEnum.Accessery,
        equipmentLevel: 1,
        def: 0,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "10",
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "3",
            },
            {
                type: AttributeTypeEnum.MagicSkillWater,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MagicSkillWind,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MagicSkillEarth,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MagicSkillFire,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MagicSkillNeutral,
                formulaText: "5",
            },
        ],
    },
    {
        id: "480001",
        name: "Elemental Booster Muffler",
        type: ItemTypeEnum.Garment,
        equipmentLevel: 1,
        def: 20,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<this.Rf/3> * 4",
            },
            {
                type: AttributeTypeEnum.MagicSkillWater,
                formulaText: "5",
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
                type: AttributeTypeEnum.MagicSkillWind,
                formulaText: "5",
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
                type: AttributeTypeEnum.MagicSkillEarth,
                formulaText: "5",
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
                type: AttributeTypeEnum.MagicSkillFire,
                formulaText: "5",
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
                type: AttributeTypeEnum.MagicSkillNeutral,
                formulaText: "5",
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
                type: AttributeTypeEnum.Delay,
                formulaText: "10",
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
        id: "450002",
        name: "Elemental Booster Robe",
        type: ItemTypeEnum.Armor,
        equipmentLevel: 1,
        def: 80,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "100",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "<this.Rf/2> * 1",
            },
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "<this.Rf/3> * 1",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "50",
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
                type: AttributeTypeEnum.VctPercent,
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
        ],
    },
    {
        id: "470001",
        name: "Elemental Booster Shoes",
        type: ItemTypeEnum.Shoes,
        equipmentLevel: 1,
        def: 15,
        cardSlot: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.Flee,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "<this.Rf/3> * 400",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "1800",
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
                type: AttributeTypeEnum.Fct,
                formulaText: "0.5",
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
        id: "1695",
        name: "Fine Foxtail Model",
        type: ItemTypeEnum.OneHandRod,
        equipmentLevel: 3,
        atk: 195,
        cardSlot: 2,
        attributeList: [
            {
                type: AttributeTypeEnum.RangeMul,
                formulaText: "8",
            },
            {
                type: AttributeTypeEnum.Hp,
                formulaText: "200",
            },
            {
                type: AttributeTypeEnum.Dex,
                formulaText: "<this.Rf/3> * 3",
            },
            {
                type: AttributeTypeEnum.Sp,
                formulaText: "<this.Rf/3> * 15",
            },
            {
                type: AttributeTypeEnum.RWeaponAtkP,
                formulaText: "40",
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
                type: AttributeTypeEnum.RWeaponMatkP,
                formulaText: "40",
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
                type: AttributeTypeEnum.RWeaponAtkP,
                formulaText: "(<this.Rf/1> - 7) * 20",
                max: "60",
                condition: {
                    refireList: [
                        {
                            number: 8,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
            {
                type: AttributeTypeEnum.RWeaponMatkP,
                formulaText: "(<this.Rf/1> - 7) * 20",
                max: "60",
                condition: {
                    refireList: [
                        {
                            number: 8,
                            symbol: Symbol.gte
                        }
                    ]
                }
            },
        ],
    },
]
.sort((a,b) => Number.parseInt(a.id)-Number.parseInt(b.id)) 