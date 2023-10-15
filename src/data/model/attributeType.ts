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
    Atk, StatusAtk, WeaponAtk, RWeaponAtkP, LWeaponAtkP, EquipmentAtk, AtkPercent,
    Matk, StatusMatk, WeaponMatk, RWeaponMatkP, LWeaponMatkP, EquipmentMatk, MatkPercent,
    Hit, 
    Critical, CritDmg,
    Flee, Hp, HpPercent, Sp, SpPercent, Aspd, AspdPercent, Haste,
    Vct, VctPercent, Fct, FctPercent,
    Delay, Cooldown,
    Def, Mdef, SoftDef, SoftDefPercent, SoftMdef, SoftMdefPercent,
    MeleeMul, RangeMul,
    PhysicalAllSize, PhysicalSmall, PhysicalMed, PhysicalLarge,
    PhysicalAllProperty, PhysicalNeutral, PhysicalWater, PhysicalEarth, PhysicalFire, PhysicalWind, PhysicalPoison, PhysicalHoly, PhysicalDark, PhysicalGhost, PhysicalUndead,
    PhysicalAllRace, PhysicalFormless, PhysicalRaceUndead, PhysicalBrute, PhysicalPlant, PhysicalInsect, PhysicalAngel, PhysicalDemon, PhysicalDemi,
    PhysicalAllClass, PhysicalBoss, PhysicalMon, PhysicalPlayer,
    IgnoreDefNormal, IgnoreDefBoss,
    IgnoreDefAllRace, IgnoreDefFormless, IgnoreDefUndead, IgnoreDefBrute, IgnoreDefPlant, IgnoreDefInsect, IgnoreDefAngel, IgnoreDefDemon, IgnoreDefDemi,
    IgnoreDefHuman, IgnoreDefDoram,
    PhysicalAllPropertyR, MonMedPhyRed, MonLarPhyRed, NeutralDmgR,
    MagicAllSize, MagicSmall, MagicMed, MagicLarge,
    MagicAllProperty, MagicNeutral, MagicWater, MagicEarth, MagicFire, MagicWind, MagicPoison, MagicHoly, MagicDark, MagicGhost, MagicUndead,
    MagicAllRace, MagicFormless, MagicRaceUndead, MagicBrute, MagicPlant, MagicInsect, MagicAngel, MagicDemon, MagicDemi,
    MagicAllClass, MagicBoss, MagicMon,
    MagicAllElement, MagicSkillNeutral, MagicSkillWater, MagicSkillEarth, MagicSkillFire, MagicSkillWind, MagicSkillPoison, MagicSkillHoly, MagicSkillDark, MagicSkillGhost, MagicSkillUndead,
    IgnoreMdefNormal, IgnoreMdefBoss,
    IgnoreMdefAllRace, IgnoreMdefFormless, IgnoreMdefUndead, IgnoreMdefBrute, IgnoreMdefPlant, IgnoreMdefInsect, IgnoreMdefAngel, IgnoreMdefDemon, IgnoreMdefDemi,
    IgnoreMdefHuman, IgnoreMdefDoram,
    MagicAllPropertyR, MagicMedR, MagicLargeR,
    Heal,
    SpRecoveryP, SpUsedDP, UnstopCast, MoveSpeed, Endure,
    PD, PerfectHit,
    Debuff, Enable,
}