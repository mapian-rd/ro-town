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
    SkillBasePercent = "SkillBasePercent", SkillDmg = "SkillDmg",
    Str = "Str", Agi = "Agi", Vit = "Vit", Int = "Int", Dex = "Dex", Luk = "Luk",

    Atk = "Atk", StatusAtk = "StatusAtk", WeaponAtk = "WeaponAtk", RWeaponAtkP = "RWeaponAtkP", LWeaponAtkP = "LWeaponAtkP", EquipmentAtk = "EquipmentAtk", AtkPercent = "AtkPercent",

    Matk = "Matk", StatusMatk = "StatusMatk", WeaponMatk = "WeaponMatk", RWeaponMatkP = "RWeaponMatkP", LWeaponMatkP = "LWeaponMatkP", EquipmentMatk = "EquipmentMatk", MatkPercent = "MatkPercent",

    Hit = "Hit",
    Critical = "Critical", CritDmg = "CritDmg",
    Flee = "Flee", Hp = "Hp", HpPercent = "HpPercent", Sp = "Sp", SpPercent = "SpPercent",
    Aspd = "Aspd", AspdPercent = "AspdPercent", Haste = "Haste",
    Vct = "Vct", VctPercent = "VctPercent", Fct = "Fct", FctPercent = "FctPercent",
    Delay = "Delay", Cooldown = "Cooldown",

    Def = "Def", Mdef = "Mdef", SoftDef = "SoftDef", SoftDefPercent = "SoftDefPercent", SoftMdef = "SoftMdef", SoftMdefPercent = "SoftMdefPercent",

    MeleeMul = "MeleeMul", RangeMul = "RangeMul",

    PhysicalAllSize = "PhysicalAllSize", PhysicalSmall = "PhysicalSmall", PhysicalMed = "PhysicalMed", PhysicalLarge = "PhysicalLarge",

    PhysicalAllProperty = "PhysicalAllProperty", PhysicalNeutral = "PhysicalNeutral", PhysicalWater = "PhysicalWater", PhysicalEarth = "PhysicalEarth", PhysicalFire = "PhysicalFire", PhysicalWind = "PhysicalWind", PhysicalPoison = "PhysicalPoison", PhysicalHoly = "PhysicalHoly", PhysicalDark = "PhysicalDark", PhysicalGhost = "PhysicalGhost", PhysicalUndead = "PhysicalUndead",

    PhysicalAllRace = "PhysicalAllRace", PhysicalFormless = "PhysicalFormless", PhysicalRaceUndead = "PhysicalRaceUndead", PhysicalBrute = "PhysicalBrute", PhysicalPlant = "PhysicalPlant", PhysicalInsect = "PhysicalInsect", PhysicalAngel = "PhysicalAngel", PhysicalDemon = "PhysicalDemon", PhysicalDemi = "PhysicalDemi",

    PhysicalAllClass = "PhysicalAllClass", PhysicalBoss = "PhysicalBoss", PhysicalMon = "PhysicalMon", PhysicalPlayer = "PhysicalPlayer",

    IgnoreDefNormal = "IgnoreDefNormal", IgnoreDefBoss = "IgnoreDefBoss",

    IgnoreDefAllRace = "IgnoreDefAllRace", IgnoreDefFormless = "IgnoreDefFormless", IgnoreDefUndead = "IgnoreDefUndead", IgnoreDefBrute = "IgnoreDefBrute", IgnoreDefPlant = "IgnoreDefPlant", IgnoreDefInsect = "IgnoreDefInsect", IgnoreDefAngel = "IgnoreDefAngel", IgnoreDefDemon = "IgnoreDefDemon", IgnoreDefDemi = "IgnoreDefDemi",
    IgnoreDefHuman = "IgnoreDefHuman", IgnoreDefDoram = "IgnoreDefDoram",

    PhysicalAllSizeR = "PhysicalAllSizeR", PhysicalSmallR = "PhysicalSmallR", PhysicalMedR = "PhysicalMedR", PhysicalLargeR = "PhysicalLargeR",

    PhysicalAllPropertyR = "PhysicalAllPropertyR", PhysicalNeutralR = "PhysicalNeutralR", PhysicalWaterR = "PhysicalWaterR", PhysicalEarthR = "PhysicalEarthR", PhysicalFireR = "PhysicalFireR", PhysicalWindR = "PhysicalWindR", PhysicalPoisonR = "PhysicalPoisonR", PhysicalHolyR = "PhysicalHolyR", PhysicalDarkR = "PhysicalDarkR", PhysicalGhostR = "PhysicalGhostR", PhysicalUndeadR = "PhysicalUndeadR",

    PhysicalAllRaceR = "PhysicalAllRaceR", PhysicalFormlessR = "PhysicalFormlessR", PhysicalRaceUndeadR = "PhysicalRaceUndeadR", PhysicalBruteR = "PhysicalBruteR", PhysicalPlantR = "PhysicalPlantR", PhysicalInsectR = "PhysicalInsectR", PhysicalAngelR = "PhysicalAngelR", PhysicalDemonR = "PhysicalDemonR", PhysicalDemiR = "PhysicalDemiR",

    PhysicalAllClassR = "PhysicalAllClassR", PhysicalBossR = "PhysicalBossR", PhysicalMonR = "PhysicalMonR", PhysicalPlayerR = "PhysicalPlayerR",

    PhysicalAllElementR = "PhysicalAllElementR", PhysicalSkillNeutralR = "PhysicalSkillNeutralR", PhysicalSkillWaterR = "PhysicalSkillWaterR", PhysicalSkillEarthR = "PhysicalSkillEarthR", PhysicalSkillFireR = "PhysicalSkillFireR", PhysicalSkillWindR = "PhysicalSkillWindR", PhysicalSkillPoisonR = "PhysicalSkillPoisonR", PhysicalSkillHolyR = "PhysicalSkillHolyR", PhysicalSkillDarkR = "PhysicalSkillDarkR", PhysicalSkillGhostR = "PhysicalSkillGhostR", PhysicalSkillUndeadR = "PhysicalSkillUndeadR",

    MagicAllSize = "MagicAllSize", MagicSmall = "MagicSmall", MagicMed = "MagicMed", MagicLarge = "MagicLarge",

    MagicAllProperty = "MagicAllProperty", MagicNeutral = "MagicNeutral", MagicWater = "MagicWater", MagicEarth = "MagicEarth", MagicFire = "MagicFire", MagicWind = "MagicWind", MagicPoison = "MagicPoison", MagicHoly = "MagicHoly", MagicDark = "MagicDark", MagicGhost = "MagicGhost", MagicUndead = "MagicUndead",

    MagicAllRace = "MagicAllRace", MagicFormless = "MagicFormless", MagicRaceUndead = "MagicRaceUndead", MagicBrute = "MagicBrute", MagicPlant = "MagicPlant", MagicInsect = "MagicInsect", MagicAngel = "MagicAngel", MagicDemon = "MagicDemon", MagicDemi = "MagicDemi",

    MagicAllClass = "MagicAllClass", MagicBoss = "MagicBoss", MagicMon = "MagicMon",

    MagicAllElement = "MagicAllElement", MagicSkillNeutral = "MagicSkillNeutral", MagicSkillWater = "MagicSkillWater", MagicSkillEarth = "MagicSkillEarth", MagicSkillFire = "MagicSkillFire", MagicSkillWind = "MagicSkillWind", MagicSkillPoison = "MagicSkillPoison", MagicSkillHoly = "MagicSkillHoly", MagicSkillDark = "MagicSkillDark", MagicSkillGhost = "MagicSkillGhost", MagicSkillUndead = "MagicSkillUndead",

    IgnoreMdefNormal = "IgnoreMdefNormal", IgnoreMdefBoss = "IgnoreMdefBoss",

    IgnoreMdefAllRace = "IgnoreMdefAllRace", IgnoreMdefFormless = "IgnoreMdefFormless", IgnoreMdefUndead = "IgnoreMdefUndead", IgnoreMdefBrute = "IgnoreMdefBrute", IgnoreMdefPlant = "IgnoreMdefPlant", IgnoreMdefInsect = "IgnoreMdefInsect", IgnoreMdefAngel = "IgnoreMdefAngel", IgnoreMdefDemon = "IgnoreMdefDemon", IgnoreMdefDemi = "IgnoreMdefDemi",
    IgnoreMdefHuman = "IgnoreMdefHuman", IgnoreMdefDoram = "IgnoreMdefDoram",

    MagicAllSizeR = "MagicAllSizeR", MagicSmallR = "MagicSmallR", MagicMedR = "MagicMedR", MagicLargeR = "MagicLargeR",

    MagicAllPropertyR = "MagicAllPropertyR", MagicNeutralR = "MagicNeutralR", MagicWaterR = "MagicWaterR", MagicEarthR = "MagicEarthR", MagicFireR = "MagicFireR", MagicWindR = "MagicWindR", MagicPoisonR = "MagicPoisonR", MagicHolyR = "MagicHolyR", MagicDarkR = "MagicDarkR", MagicGhostR = "MagicGhostR", MagicUndeadR = "MagicUndeadR",

    MagicAllRaceR = "MagicAllRaceR", MagicFormlessR = "MagicFormlessR", MagicRaceUndeadR = "MagicRaceUndeadR", MagicBruteR = "MagicBruteR", MagicPlantR = "MagicPlantR", MagicInsectR = "MagicInsectR", MagicAngelR = "MagicAngelR", MagicDemonR = "MagicDemonR", MagicDemiR = "MagicDemiR",

    MagicAllClassR = "MagicAllClassR", MagicBossR = "MagicBossR", MagicMonR = "MagicMonR",

    MagicAllElementR = "MagicAllElementR", MagicSkillNeutralR = "MagicSkillNeutralR", MagicSkillWaterR = "MagicSkillWaterR", MagicSkillEarthR = "MagicSkillEarthR", MagicSkillFireR = "MagicSkillFireR", MagicSkillWindR = "MagicSkillWindR", MagicSkillPoisonR = "MagicSkillPoisonR", MagicSkillHolyR = "MagicSkillHolyR", MagicSkillDarkR = "MagicSkillDarkR", MagicSkillGhostR = "MagicSkillGhostR", MagicSkillUndeadR = "MagicSkillUndeadR",

    Heal = "Heal",
    SkillR = "SkillR",
    HpRecoveryP = "HpRecoveryP", SpRecoveryP = "SpRecoveryP", 
    SpUsedDP = "SpUsedDP", UnstopCast = "UnstopCast", MoveSpeed = "MoveSpeed", Endure = "Endure",
    PD = "PD", PerfectHit = "PerfectHit",
    Debuff = "Debuff", Enable = "Enable",
    DarkClaw = "DarkClaw",
    AllPropertyResistR = "AllPropertyResistR",
}