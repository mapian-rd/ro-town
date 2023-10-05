export class AttributeType {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export enum AttributeTypeEnum {
    SkillDmg,
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
    PhysicalSmall, PhysicalMed, PhysicalLarge,
    PhysicalNeutral, PhysicalWater, PhysicalEarth, PhysicalFire, PhysicalWind, PhysicalPoison, PhysicalHoly, PhysicalDark, PhysicalGhost, PhysicalUndead,
    PhysicalFormless, PhysicalRaceUndead, PhysicalBrute, PhysicalPlant, PhysicalInsect, PhysicalAngel, PhysicalDemon, PhysicalDemi,
    PhysicalBoss, PhysicalMon,
    MonMedPhyRed, MonLarPhyRed,
    MagicSmall, MagicMed, MagicLarge,
    MagicNeutral, MagicWater, MagicEarth, MagicFire, MagicWind, MagicPoison, MagicHoly, MagicDark, MagicGhost, MagicUndead,
    MagicFormless, MagicRaceUndead, MagicBrute, MagicPlant, MagicInsect, MagicAngel, MagicDemon, MagicDemi,
    MagicBoss, MagicMon,
    GhostPhyDmg,
}