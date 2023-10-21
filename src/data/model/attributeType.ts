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
    PhysicalAllSizeR, PhysicalSmallR, PhysicalMedR, PhysicalLargeR,
    PhysicalAllPropertyR, PhysicalNeutralR, PhysicalWaterR, PhysicalEarthR, PhysicalFireR, PhysicalWindR, PhysicalPoisonR, PhysicalHolyR, PhysicalDarkR, PhysicalGhostR, PhysicalUndeadR,
    PhysicalAllRaceR, PhysicalFormlessR, PhysicalRaceUndeadR, PhysicalBruteR, PhysicalPlantR, PhysicalInsectR, PhysicalAngelR, PhysicalDemonR, PhysicalDemiR,
    PhysicalAllClassR, PhysicalBossR, PhysicalMonR, PhysicalPlayerR,
    PhysicalAllElementR, PhysicalSkillNeutralR, PhysicalSkillWaterR, PhysicalSkillEarthR, PhysicalSkillFireR, PhysicalSkillWindR, PhysicalSkillPoisonR, PhysicalSkillHolyR, PhysicalSkillDarkR, PhysicalSkillGhostR, PhysicalSkillUndeadR,
    
    MagicAllSize, MagicSmall, MagicMed, MagicLarge,
    MagicAllProperty, MagicNeutral, MagicWater, MagicEarth, MagicFire, MagicWind, MagicPoison, MagicHoly, MagicDark, MagicGhost, MagicUndead,
    MagicAllRace, MagicFormless, MagicRaceUndead, MagicBrute, MagicPlant, MagicInsect, MagicAngel, MagicDemon, MagicDemi,
    MagicAllClass, MagicBoss, MagicMon,
    MagicAllElement, MagicSkillNeutral, MagicSkillWater, MagicSkillEarth, MagicSkillFire, MagicSkillWind, MagicSkillPoison, MagicSkillHoly, MagicSkillDark, MagicSkillGhost, MagicSkillUndead,
    IgnoreMdefNormal, IgnoreMdefBoss,
    IgnoreMdefAllRace, IgnoreMdefFormless, IgnoreMdefUndead, IgnoreMdefBrute, IgnoreMdefPlant, IgnoreMdefInsect, IgnoreMdefAngel, IgnoreMdefDemon, IgnoreMdefDemi,
    IgnoreMdefHuman, IgnoreMdefDoram,
    MagicAllSizeR, MagicSmallR, MagicMedR, MagicLargeR,
    MagicAllPropertyR, MagicNeutralR, MagicWaterR, MagicEarthR, MagicFireR, MagicWindR, MagicPoisonR, MagicHolyR, MagicDarkR, MagicGhostR, MagicUndeadR,
    MagicAllRaceR, MagicFormlessR, MagicRaceUndeadR, MagicBruteR, MagicPlantR, MagicInsectR, MagicAngelR, MagicDemonR, MagicDemiR,
    MagicAllClassR, MagicBossR, MagicMonR,
    MagicAllElementR, MagicSkillNeutralR, MagicSkillWaterR, MagicSkillEarthR, MagicSkillFireR, MagicSkillWindR, MagicSkillPoisonR, MagicSkillHolyR, MagicSkillDarkR, MagicSkillGhostR, MagicSkillUndeadR,
    
    Heal,
    SkillR,
    SpRecoveryP, SpUsedDP, UnstopCast, MoveSpeed, Endure,
    PD, PerfectHit,
    Debuff, Enable,
    DarkClaw,
    AllPropertyResistR,
}