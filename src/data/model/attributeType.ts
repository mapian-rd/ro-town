export class AttributeType {
    name: string;
    /**
     * default true
     */
    addAsCustom?: boolean;
    constructor(name: string) {
        this.name = name
    }
}

export enum AttributeTypeEnum {
    SkillBasePercent, SkillDmg,
    Str, Agi, Vit, Int, Dex, Luk,
    Atk, StatusAtk, WeaponAtk, EquipmentAtk, AtkPercent,
    Matk, StatusMatk, WeaponMatk, EquipmentMatk, MatkPercent,
    Hit, 
    Critical, CritDmg,
    Flee, Hp, HpPercent, Sp, SpPercent, Aspd, AspdPercent,
    Vct, VctPercent, Fct, FctPercent,
    Delay, Cooldown,
    Def, Mdef, SoftDef, SoftDefPercent, SoftMdef, SoftMdefPercent,
    MeleeMul, RangeMul,
    PhysicalAllSize, PhysicalSmall, PhysicalMed, PhysicalLarge,
    PhysicalAllProperty, PhysicalNeutral, PhysicalWater, PhysicalEarth, PhysicalFire, PhysicalWind, PhysicalPoison, PhysicalHoly, PhysicalDark, PhysicalGhost, PhysicalUndead,
    PhysicalAllRace, PhysicalFormless, PhysicalRaceUndead, PhysicalBrute, PhysicalPlant, PhysicalInsect, PhysicalAngel, PhysicalDemon, PhysicalDemi,
    PhysicalAllClass, PhysicalBoss, PhysicalMon,
    PhysicalAllPropertyR, MonMedPhyRed, MonLarPhyRed, NeutralDmgR,
    PhysicalPenMon,
    MagicAllSize, MagicSmall, MagicMed, MagicLarge,
    MagicAllProperty, MagicNeutral, MagicWater, MagicEarth, MagicFire, MagicWind, MagicPoison, MagicHoly, MagicDark, MagicGhost, MagicUndead,
    MagicAllRace, MagicFormless, MagicRaceUndead, MagicBrute, MagicPlant, MagicInsect, MagicAngel, MagicDemon, MagicDemi,
    MagicAllClass, MagicBoss, MagicMon,
    MagicAllElement, MagicSkillNeutral, MagicSkillWater, MagicSkillEarth, MagicSkillFire, MagicSkillWind, MagicSkillPoison, MagicSkillHoly, MagicSkillDark, MagicSkillGhost, MagicSkillUndead,
    MagicAllPropertyR, MagicMedR, MagicLargeR,
    SpUsedDP, UnstopCast, MoveSpeed,
    PD,
    Debuff,
}