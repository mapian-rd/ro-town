import { Neutral } from "../constraint/Monster";
import { Attribute, AttributeList } from "./Attribute";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Element } from "./Element";

export enum SkillEnum {
    NormalAttack, NormalRangeAttack, 
    IncreaseAgi, Blessing, Clementia, Cantocandidus,
    Scratch,
    FreshShrimp, BunchOfShrimp, TunaBelly, TunaParty, PowerOfSea, Grooming, Purring, TastyShrimpParty, SpiritOfSea,
    SilvervineStemSpear, SilvervineRootTwist, CatnipMeteor, CatnipPowdering, PowerOfLand, Chattering, MeowMeow, NyangGrass, SpiritOfLand,
    PickyPeck, ArclouseDash, ScarOfTarou, LunaticCarrotBeat, PowerofLife, Hiss, PowerOfFlock, SpiritOfSavage, SpritOfLife,
    Greed, CartCannon,
    ArrowStrom,
    StoneCurse, Comet,
    ShieldSpell,
    DarkClaw, 
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
    isRange?: boolean = false;
    element?: AttributeTypeEnum[] = [];
}

export class PassiveSkill implements Skill {
    id: string = "-1";
    name: string = "";
    enum: SkillEnum = SkillEnum.NormalAttack;
    maxLv: number = 1;
    imgId?: number;
    suffix?: string[] = [];
    attributeList: AttributeList[] = [];
}

