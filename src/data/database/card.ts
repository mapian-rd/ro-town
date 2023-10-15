import { AttributeTypeEnum } from "../model/attributeType";
import { JobClassEnum } from "../model/class";
import { ItemTypeEnum } from "../model/itemType";
import { Item } from "../model/Itemv2";
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
    {
        id: "4366",
        name: "Kathryne Keyron Card",
        type: ItemTypeEnum.CardHeadgear,
        attributeList: [
            {
                type: AttributeTypeEnum.VctPercent,
                formulaText: "<this.Rf/1> * 1",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "2",
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
        id: "4658",
        name: "Nightmare Verit Card",
        type: ItemTypeEnum.CardShoes,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.MatkPercent,
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
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "2",
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
        id: "4409",
        name: "Agav Card",
        type: ItemTypeEnum.CardArmor,
        attributeList: [
            {
                type: AttributeTypeEnum.MatkPercent,
                formulaText: "5",
            },
            {
                type: AttributeTypeEnum.Def,
                formulaText: "-10",
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
                type: AttributeTypeEnum.Sp,
                formulaText: "100",
                condition: {
                    class: JobClassEnum.Mage
                }
            },
        ],
    },
    {
        id: "27177",
        name: "Marsh Arclouse Card",
        type: ItemTypeEnum.CardGarment,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "<int/10> * 3",
            },
            {
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "<int/10> * 1",
            },
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "40",
                condition: {
                    statusList: [
                        {
                            statusType: AttributeTypeEnum.Int,
                            number: 120,
                            symbol: Symbol.gte,
                        }
                    ]
                }
            },
        ],
    },  
    {
        id: "4505",
        name: "Scaraba Card",
        type: ItemTypeEnum.CardGarment,
        attributeList: [
            {
                type: AttributeTypeEnum.Matk,
                formulaText: "20",
            },
            {
                type: AttributeTypeEnum.SpPercent,
                formulaText: "-1",
            },
        ],
    },  
]