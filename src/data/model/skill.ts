import { Neutral } from "../constraint/Monster";
import { Attribute, AttributeList } from "./Attribute";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Element } from "./Element";

export enum SkillEnum {
    NormalAttack = "NormalAttack", NormalRangeAttack = "NormalRangeAttack",
    IncreaseAgi = "IncreaseAgi", Blessing = "Blessing", Clementia = "Clementia", Cantocandidus = "Cantocandidus",
    Scratch = "Scratch",
    FreshShrimp = "FreshShrimp", BunchOfShrimp = "BunchOfShrimp", TunaBelly = "TunaBelly", TunaParty = "TunaParty", PowerOfSea = "PowerOfSea", Grooming = "Grooming", Purring = "Purring", TastyShrimpParty = "TastyShrimpParty", SpiritOfSea = "SpiritOfSea",
    SilvervineStemSpear = "SilvervineStemSpear", SilvervineRootTwist = "SilvervineRootTwist", CatnipMeteor = "CatnipMeteor", CatnipPowdering = "CatnipPowdering", PowerOfLand = "PowerOfLand", Chattering = "Chattering", MeowMeow = "MeowMeow", NyangGrass = "NyangGrass", SpiritOfLand = "SpiritOfLand",
    PickyPeck = "PickyPeck", ArclouseDash = "ArclouseDash", ScarOfTarou = "ScarOfTarou", LunaticCarrotBeat = "LunaticCarrotBeat", PowerofLife = "PowerofLife", Hiss = "Hiss", PowerOfFlock = "PowerOfFlock", SpiritOfSavage = "SpiritOfSavage", SpritOfLife = "SpritOfLife",
    Greed = "Greed", CartCannon = "CartCannon",
    ArrowStrom = "ArrowStrom",
    StoneCurse = "StoneCurse", Comet = "Comet",
    ShieldSpell = "ShieldSpell",
    DarkClaw = "DarkClaw",
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
    n?: number[] = [];
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

