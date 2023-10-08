import { Neutral } from "../constraint/Monster";
import { Attribute } from "./Attribute";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Element } from "./Element";

export enum SkillEnum {
    NormalAttack, NormalRangeAttack, 
    PickyPeck, LunaticCarrotBeat, SilvervineStemSpear, CatnipMeteor,
    PowerofLife, ArclouseDash, Hiss, PowerOfFlock, SpiritOfSavage,
}

export interface Skill {
    id: string;
    name: string;
    enum: SkillEnum;
    maxLv: number;
    imgId?: number;
}


export class ActiveSkill implements Skill {
    id: string = "-1";
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
    isRange?: Boolean = false;
    element?: Element = undefined;
}

export class PassiveSkill implements Skill {
    id: string = "-1";
    name: string = "";
    enum: SkillEnum = SkillEnum.NormalAttack;
    maxLv: number = 1;
    imgId?: number;
    attributeList: Attribute[] = [];
}

