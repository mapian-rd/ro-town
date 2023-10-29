import { AttributeTypeEnum } from "../model/attributeType";
import { Item } from "../model/Itemv2";
import { PassiveSkill, SkillEnum } from "../model/skill";
import * as itemJson from "./json/debuff.json"

export const debuffDatabase: PassiveSkill[] = [
    ...Array.from(itemJson as PassiveSkill[]),
    {
        id: "5001",
        name: "Dark Claw",
        enum: SkillEnum.DarkClaw,
        maxLv: 5,
        attributeList: [
            {
                type: AttributeTypeEnum.DarkClaw,
                formulaText: ["1.3", "1.6", "1.9", "2.2", "2.5"]
            },
        ],
    },
    {
        id: "2213",
        name: "Comet",
        enum: SkillEnum.Comet,
        maxLv: 1,
        attributeList: [
            {
                type: AttributeTypeEnum.AllPropertyResistR,
                formulaText: ["50"]
            },
        ],
    },
]
    .sort((a, b) => Number.parseInt(a.id) - Number.parseInt(b.id))