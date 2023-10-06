import { Neutral } from "../constraint/Monster";
import { Attribute } from "./Attribute";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Element } from "./Element";

export enum SkillEnum {
    NormalAttack, NormalRangeAttack, 
    PickyPeck, LunaticCarrotBeat,
    PowerofLife, ArclouseDash, Hiss, PowerOfFlock, SpiritOfSavage,
}

export interface Skill {
    id: number;
    name: string;
    enum: SkillEnum;
    maxLv: number;
}


export class ActiveSkill implements Skill {
    id: number = -1;
    name: string = "";
    enum: SkillEnum = SkillEnum.NormalAttack;
    maxLv: number = 1;
    percent: number[] = [];
    vct: number[] = [];
    fct: number[] = [];
    cooldown: number[] = [];
    delay: number[] = [];
    hit: number[] = [];
    type: AttributeTypeEnum = AttributeTypeEnum.Atk
    isRange: Boolean = false;
    element?: Element = undefined;
}

export class PassiveSkill implements Skill {
    id: number = -1;
    name: string = "";
    enum: SkillEnum = SkillEnum.NormalAttack;
    maxLv: number = 1;
    attributeList: Attribute[] = [];
}

