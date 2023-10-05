import { AttributeTypeEnum } from "./attributeType";
import { JobClass, JobClassEnum } from "./class";
import { Item } from "./Itemv2";
import { ActiveSkill, SkillEnum } from "./skill";
import { Symbol } from "./Symbol";

export class NumberCondition {
    number: number;
    symbol: Symbol;

    constructor(number: number = 0, symbol: Symbol = Symbol.gte) {
        this.number = number
        this.symbol = symbol
    }

    static check(condition: NumberCondition, number: number): boolean {
        switch(condition.symbol) {
            case Symbol.gte:
                if (number <= condition.number) return false
                break;
            case Symbol.eq:
                if (number !== condition.number) return false
                break;
            case Symbol.lte:
                if (number >= condition.number) return false
                break;
        }
        return true;
    }
}

export class SkillCondition extends NumberCondition {
    skill: SkillEnum

    constructor(skill: SkillEnum, symbol: Symbol, number: number) {
        super(number, symbol)
        this.skill = skill
    }
}

export class StatusCondition extends NumberCondition {
    statusType: AttributeTypeEnum

    constructor(statusType: AttributeTypeEnum, symbol: Symbol, number: number) {
        super(number, symbol)
        this.statusType = statusType
    }
}

export class ItemCondition extends NumberCondition {
    itemId: number

    constructor(itemId: number, symbol: Symbol = Symbol.gte, refine: number = 0) {
        super(refine, symbol)
        this.itemId = itemId
    }
}

export class Condition {
    itemList?: ItemCondition[]
    refireList?: NumberCondition[]
    class?: JobClassEnum
    skillList?: SkillCondition[]
    statusList?: StatusCondition[]
    baseLv?: NumberCondition
}