import { PetItemType } from "../constraint/itemType";
import { ally, friendly } from "../constraint/pet";
import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Pet } from "../model/Petv2";

export const petList: Pet[] = [
    {
        id: "-1",
        imageId: -1,
        name: "None",
        petAttribute: [],
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
    {
        id: "9001",
        imageId: 1002,
        name: "Poring",
        petAttribute: [
            {
                intimacy: ally,
                type: AttributeTypeEnum.Luk,
                formulaText: "2"
            },
            {
                intimacy: ally,
                type: AttributeTypeEnum.Critical,
                formulaText: "1"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.Luk,
                formulaText: "3"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.Critical,
                formulaText: "1"
            },
        ],
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
    {
        id: "9017",
        imageId: 1023,
        name: "Orc Warrior",
        petAttribute: [
            {
                intimacy: ally,
                type: AttributeTypeEnum.Atk,
                formulaText: "10"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.Atk,
                formulaText: "15"
            }
        ],
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
    {
        id: "9118",
        imageId: 1736,
        name: "Aliot",
        petAttribute: [
            {
                intimacy: ally,
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "4"
            },
            {
                intimacy: ally,
                type: AttributeTypeEnum.Hit,
                formulaText: "9"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.AspdPercent,
                formulaText: "5"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.Hit,
                formulaText: "12"
            },
        ],
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
    {
        id: "9111",
        imageId: 1159,
        name: "Phreeoni",
        petAttribute: [
            {
                intimacy: ally,
                type: AttributeTypeEnum.Hit,
                formulaText: "14"
            },
            {
                intimacy: ally,
                type: AttributeTypeEnum.PerfectHit,
                formulaText: "10"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.Hit,
                formulaText: "18"
            },
            {
                intimacy: friendly,
                type: AttributeTypeEnum.PerfectHit,
                formulaText: "15"
            },
        ],
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
]