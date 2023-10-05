import { classList, getClass } from "../constraint/class";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Character } from "./Characterv2";
import { Condition, NumberCondition } from "./Condition";
import { CraftEqiupment } from "./CraftEquipment";
import { ActiveSkill, SkillEnum } from "./skill";
import { Status } from "./status";

export class Attribute {
    type: AttributeTypeEnum;
    skill?: SkillEnum
    /**
     * Formula
     * 1. Basic Math +-*\/
     * 2. Every n Refine <this.Rf/n>
     * 3. Every n Refine of Item <I$id.Rf/n>
     * 4. Every n Dex <dex/n>
     * 5. Skill level <S$name.Lv>
     * 6. Every n Base Lv <BaseLv/n>
     */
    formulaText: string = "";
    max?: string;
    condition?: Condition;

    constructor(type: AttributeTypeEnum) {
        this.type = type
    }

    static checkAttribute(attribute: Attribute, character: Character): boolean {
        if (!attribute.condition) return true;
        console.log("checkAttribute class", attribute.condition.class)
        if (attribute.condition.class) {
            if(attribute.condition.class !== character.clazz.enum) return false;
        }
        console.log("checkAttribute itemList", attribute.condition.itemList)
        if (attribute.condition.itemList) {
            attribute.condition.itemList.forEach(condition => {
                const equipmentList = Array.from(character.equipmentMap.values());
                const item = equipmentList.find(item => item?.itemId === condition.itemId);
                if (!item) return false;
                const result = NumberCondition.check(condition, item.refineLevel);
                if (!result) return false;
            })
        }
        if (attribute.condition.skillList) {
            attribute.condition.skillList.forEach(condition => {
                if (character.clazz.activeSkill.findIndex(skill => skill.id === condition.skill) === -1) return false
            })
        }
        console.log("checkAttribute statusList", attribute.condition.statusList)
        if (attribute.condition.statusList) {
            attribute.condition.statusList.forEach(condition => {
                const result = NumberCondition.check(condition, Status.get(character.status, condition.statusType))
                if (!result) return false;
            })
        }
        console.log("checkAttribute baseLv", attribute.condition.baseLv)
        if (attribute.condition.baseLv) {
            const result = NumberCondition.check(attribute.condition.baseLv, character.baseLv)
            if (!result) return false;
        }
        return true
    }

    static check(craftEqiupment: CraftEqiupment, attribute: Attribute, character: Character): boolean {
        if (!attribute.condition) return true;
        if (!this.checkAttribute(attribute, character)) return false
        if (attribute.condition.refireList) {
            attribute.condition.refireList.forEach(condition => {
                const result = NumberCondition.check(condition, craftEqiupment.refineLevel);
                if (!result) return false;
            })
        }
        return true
    }
}