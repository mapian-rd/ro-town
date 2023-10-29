import { monsterSoftDef, monsterSoftMdef } from "../../formula"
import { AttributeTypeEnum } from "./attributeType";
import { Element } from "./Element";
import { Exportable } from "./Exportable";
import { Status } from "./status"

export class MonsterId {
    id!: string;
    monsterId?: number;
    name!: string;
    hp?: number;
    hit?: number;
}

export class Monster {
    id!: number;
    name!: string;
    level: number = 0;
    size!: MonsterSize;
    race!: MonsterRace;
    isBoss: boolean = false;
    attribute!: MonsterElement;
    status!: Status
    hp!: number;
    softDef(): number {
        return monsterSoftDef(this.level, this.status.vit)
    }
    hardDef: number = 0
    softMDef(): number {
        return monsterSoftMdef(this.level, this.status.int)
    }
    hardMdef: number = 0;
    flee: number = 0;
    hit: number = 0;
}

export class MonsterSize {
    id: number;
    name: string;
    physicalAttributeType: AttributeTypeEnum;
    magicAttributeType: AttributeTypeEnum;

    constructor(id: number, name: string, physicalAttributeType: AttributeTypeEnum, magicAttributeType: AttributeTypeEnum) {
        this.id = id;
        this.name = name;
        this.physicalAttributeType = physicalAttributeType
        this.magicAttributeType = magicAttributeType
    }
}

export class MonsterRace {
    id: number;
    name: string;
    physicalAttributeType: AttributeTypeEnum;
    magicAttributeType: AttributeTypeEnum;
    ignoreDefAttributeType: AttributeTypeEnum;
    ignoreMdefAttributeType: AttributeTypeEnum;

    constructor(
        id: number,
        name: string,
        physicalAttributeType: AttributeTypeEnum,
        magicAttributeType: AttributeTypeEnum,
        ignoreDefAttributeType: AttributeTypeEnum,
        ignoreMdefAttributeType: AttributeTypeEnum,
    ) {
        this.id = id;
        this.name = name;
        this.physicalAttributeType = physicalAttributeType
        this.magicAttributeType = magicAttributeType
        this.ignoreDefAttributeType = ignoreDefAttributeType
        this.ignoreMdefAttributeType = ignoreMdefAttributeType
    }
}

export class MonsterElement {
    id: number;
    element: Element;
    lv: number;
    physicalAttributeType: AttributeTypeEnum;
    magicAttributeType: AttributeTypeEnum;

    constructor(id: number, elemnt: Element, lv: number, physicalAttributeType: AttributeTypeEnum, magicAttributeType: AttributeTypeEnum) {
        this.id = id;
        this.element = elemnt;
        this.lv = lv;
        this.physicalAttributeType = physicalAttributeType
        this.magicAttributeType = magicAttributeType
    }
}