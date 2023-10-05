import { PetItemType } from "../constraint/itemType";
import { ally, friendly } from "../constraint/pet";
import { AttributeTypeEnum } from "../model/attributeType";
import { ItemTypeEnum } from "../model/itemType";
import { Pet } from "../model/Petv2";

export const petList: Pet[] = [
    {
        id: -1,
        imageId: -1,
        name: "None",
        petAttribute: [],
        description: "",
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
    {
        id: 9001,
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
        description: "หากความสัมพันธ์อยู่ในระดับเป็นมิตร LUK +2, CRI +1"
            + "\nหากความสัมพันธ์อยู่ในระดับสนิทสนม LUK +3, CRI +1",
        type: ItemTypeEnum.Pet,
        attributeList: [],
    },
    {
        id: 9017,
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
        description: "หากความสัมพันธ์อยู่ในระดับเป็นมิตร ATK +10"
            + "\nหากความสัมพันธ์อยู่ในระดับสนิทสนม ATK +15",
        type: ItemTypeEnum.Pet,
        attributeList: [],
    }
]