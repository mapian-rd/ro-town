import { MonMedPhyDmg, MonLarPhyDmg, Atk, MonMedPhyRed, MonLarPhyRed } from "../constraint/attributeType";
import { CardWeapon } from "../constraint/itemType";
import { Item } from "../model/Item";

export const cardDatabase: Item[] = [
    {
        id: 1,
        name: "Corrupted Wanderer Card",
        type: CardWeapon,
        attributes: [
            {
                type: MonMedPhyDmg,
                value: 30,
            },
            {
                type: MonLarPhyDmg,
                value: 30,
            },
        ],
        combos: []
    },
    {
        id: 4608,
        name: "White Knight Card",
        type: CardWeapon,
        attributes: [
            {
                type: Atk,
                value: 15,
            },
            {
                type: MonMedPhyDmg,
                value: 20,
            },
            {
                type: MonLarPhyDmg,
                value: 20,
            },
        ],
        combos: [
            {
                items: ["Khalitzburg Knightage Card"],
                attributes: [
                    {
                        type: MonMedPhyDmg,
                        value: 20,
                    },
                    {
                        type: MonLarPhyDmg,
                        value: 20,
                    },
                    {
                        type: MonMedPhyRed,
                        value: 5,
                    },
                    {
                        type: MonLarPhyRed,
                        value: 5,
                    },
                ]
            }
        ]
    }
]