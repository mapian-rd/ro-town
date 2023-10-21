import { AttributeType, AttributeTypeEnum } from "../model/attributeType"

export const StatusTypeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.Str, new AttributeType("Str")],
    [AttributeTypeEnum.Agi, new AttributeType("Agi")],
    [AttributeTypeEnum.Vit, new AttributeType("Vit")],
    [AttributeTypeEnum.Int, new AttributeType("Int")],
    [AttributeTypeEnum.Dex, new AttributeType("Dex")],
    [AttributeTypeEnum.Luk, new AttributeType("Luk")],
])

export const physicalAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.StatusAtk, { name: "Status Atk", addAsCustom: false }],
    [AttributeTypeEnum.WeaponAtk, { name: "Final Weapon Atk", addAsCustom: false }],
    [AttributeTypeEnum.RWeaponAtkP, { name: "Weapon Atk Percent" }],
    [AttributeTypeEnum.Atk, new AttributeType("Equipment Atk")],
    [AttributeTypeEnum.AtkPercent, new AttributeType("Atk%")],
    [AttributeTypeEnum.MeleeMul, new AttributeType("Melee Multiple")],
    [AttributeTypeEnum.RangeMul, new AttributeType("Range Multiple")],
    [AttributeTypeEnum.PhysicalSmall, new AttributeType("Dmg to Small Size")],
    [AttributeTypeEnum.PhysicalMed, new AttributeType("Dmg to Medium Size")],
    [AttributeTypeEnum.PhysicalLarge, new AttributeType("Dmg to Large Size")],
    [AttributeTypeEnum.PhysicalNeutral, new AttributeType("Dmg to Element Neutral")],
    [AttributeTypeEnum.PhysicalWater, new AttributeType("Dmg to Element Water")],
    [AttributeTypeEnum.PhysicalEarth, new AttributeType("Dmg to Element Earth")],
    [AttributeTypeEnum.PhysicalFire, new AttributeType("Dmg to Element Fire")],
    [AttributeTypeEnum.PhysicalWind, new AttributeType("Dmg to Element Wind")],
    [AttributeTypeEnum.PhysicalPoison, new AttributeType("Dmg to Element Poison")],
    [AttributeTypeEnum.PhysicalHoly, new AttributeType("Dmg to Element Holy")],
    [AttributeTypeEnum.PhysicalDark, new AttributeType("Dmg to Element Dark")],
    [AttributeTypeEnum.PhysicalGhost, new AttributeType("Dmg to Element Ghost")],
    [AttributeTypeEnum.PhysicalUndead, new AttributeType("Dmg to Element Undead")],
    [AttributeTypeEnum.PhysicalFormless, new AttributeType("Dmg to Race Formless")],
    [AttributeTypeEnum.PhysicalRaceUndead, new AttributeType("Dmg to Race Undead")],
    [AttributeTypeEnum.PhysicalBrute, new AttributeType("Dmg to Race Brute")],
    [AttributeTypeEnum.PhysicalPlant, new AttributeType("Dmg to Race Plant")],
    [AttributeTypeEnum.PhysicalInsect, new AttributeType("Dmg to Race Insect")],
    [AttributeTypeEnum.PhysicalAngel, new AttributeType("Dmg to Race Angel")],
    [AttributeTypeEnum.PhysicalDemon, new AttributeType("Dmg to Race Demon")],
    [AttributeTypeEnum.PhysicalDemi, new AttributeType("Dmg to Race Demi")],
    [AttributeTypeEnum.IgnoreDefNormal, new AttributeType("Ignore def of normal monster")],
    [AttributeTypeEnum.IgnoreDefBoss, new AttributeType("Ignore def of boss monster")],
    [AttributeTypeEnum.IgnoreDefAllRace, new AttributeType("Ignore def of all race (except player)")],
    [AttributeTypeEnum.IgnoreDefFormless, new AttributeType("Ignore def of Formless")],
    [AttributeTypeEnum.IgnoreDefUndead, new AttributeType("Ignore def of Undead")],
    [AttributeTypeEnum.IgnoreDefBrute, new AttributeType("Ignore def of Brute (except player)")],
    [AttributeTypeEnum.IgnoreDefPlant, new AttributeType("Ignore def of Plant")],
    [AttributeTypeEnum.IgnoreDefInsect, new AttributeType("Ignore def of Insect")],
    [AttributeTypeEnum.IgnoreDefAngel, new AttributeType("Ignore def of Angel")],
    [AttributeTypeEnum.IgnoreDefDemon, new AttributeType("Ignore def of Demon")],
    [AttributeTypeEnum.IgnoreDefDemi, new AttributeType("Ignore def of Demi (except player)")],
    [AttributeTypeEnum.IgnoreDefHuman, new AttributeType("Ignore def of Human player")],
    [AttributeTypeEnum.IgnoreDefDoram, new AttributeType("Ignore def of Doram player")],
])

export const magicalAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.StatusMatk, { name: "Status Matk", addAsCustom: false }],
    [AttributeTypeEnum.WeaponMatk, { name: "Weapon Matk", addAsCustom: false }],
    [AttributeTypeEnum.RWeaponMatkP, { name: "Weapon Matk Percent" }],
    [AttributeTypeEnum.Matk, new AttributeType("Equipment Matk")],
    [AttributeTypeEnum.MatkPercent, new AttributeType("MATK%")],
    [AttributeTypeEnum.MagicSmall, new AttributeType("Dmg to Small Size")],
    [AttributeTypeEnum.MagicMed, new AttributeType("Dmg to Medium Size")],
    [AttributeTypeEnum.MagicLarge, new AttributeType("Dmg to Large Size")],
    [AttributeTypeEnum.MagicNeutral, new AttributeType("Dmg to Element Neutral")],
    [AttributeTypeEnum.MagicWater, new AttributeType("Dmg to Element Water")],
    [AttributeTypeEnum.MagicEarth, new AttributeType("Dmg to Element Earth")],
    [AttributeTypeEnum.MagicFire, new AttributeType("Dmg to Element Fire")],
    [AttributeTypeEnum.MagicWind, new AttributeType("Dmg to Element Wind")],
    [AttributeTypeEnum.MagicPoison, new AttributeType("Dmg to Element Poison")],
    [AttributeTypeEnum.MagicHoly, new AttributeType("Dmg to Element Holy")],
    [AttributeTypeEnum.MagicDark, new AttributeType("Dmg to Element Dark")],
    [AttributeTypeEnum.MagicGhost, new AttributeType("Dmg to Element Ghost")],
    [AttributeTypeEnum.MagicUndead, new AttributeType("Dmg to Element Undead")],
    [AttributeTypeEnum.MagicFormless, new AttributeType("Dmg to Race Formless")],
    [AttributeTypeEnum.MagicRaceUndead, new AttributeType("Dmg to Race Undead")],
    [AttributeTypeEnum.MagicBrute, new AttributeType("Dmg to Race Brute")],
    [AttributeTypeEnum.MagicPlant, new AttributeType("Dmg to Race Plant")],
    [AttributeTypeEnum.MagicInsect, new AttributeType("Dmg to Race Insect")],
    [AttributeTypeEnum.MagicAngel, new AttributeType("Dmg to Race Angel")],
    [AttributeTypeEnum.MagicDemon, new AttributeType("Dmg to Race Demon")],
    [AttributeTypeEnum.MagicDemi, new AttributeType("Dmg to Race Demi")],
    [AttributeTypeEnum.MagicSkillNeutral, new AttributeType("Element Neutral Dmg")],
    [AttributeTypeEnum.MagicSkillWater, new AttributeType("Element Water Dmg")],
    [AttributeTypeEnum.MagicSkillEarth, new AttributeType(" Element Earth Dmg")],
    [AttributeTypeEnum.MagicSkillFire, new AttributeType(" Element Fire Dmg")],
    [AttributeTypeEnum.MagicSkillWind, new AttributeType(" Element Wind Dmg")],
    [AttributeTypeEnum.MagicSkillPoison, new AttributeType(" Element Poison Dmg")],
    [AttributeTypeEnum.MagicSkillHoly, new AttributeType(" Element Holy Dmg")],
    [AttributeTypeEnum.MagicSkillDark, new AttributeType(" Element Dark Dmg")],
    [AttributeTypeEnum.MagicSkillGhost, new AttributeType(" Element Ghost Dmg")],
    [AttributeTypeEnum.MagicSkillUndead, new AttributeType(" Element Undead Dmg")],
    [AttributeTypeEnum.IgnoreMdefNormal, new AttributeType("Ignore Mdef of normal monster")],
    [AttributeTypeEnum.IgnoreMdefBoss, new AttributeType("Ignore Mdef of boss monster")],
    [AttributeTypeEnum.IgnoreMdefAllRace, new AttributeType("Ignore Mdef of all race (except player)")],
    [AttributeTypeEnum.IgnoreMdefFormless, new AttributeType("Ignore Mdef of Formless")],
    [AttributeTypeEnum.IgnoreMdefUndead, new AttributeType("Ignore Mdef of Undead")],
    [AttributeTypeEnum.IgnoreMdefBrute, new AttributeType("Ignore Mdef of Brute (except player)")],
    [AttributeTypeEnum.IgnoreMdefPlant, new AttributeType("Ignore Mdef of Plant")],
    [AttributeTypeEnum.IgnoreMdefInsect, new AttributeType("Ignore Mdef of Insect")],
    [AttributeTypeEnum.IgnoreMdefAngel, new AttributeType("Ignore Mdef of Angel")],
    [AttributeTypeEnum.IgnoreMdefDemon, new AttributeType("Ignore Mdef of Demon")],
    [AttributeTypeEnum.IgnoreMdefDemi, new AttributeType("Ignore Mdef of Demi (except player)")],
    [AttributeTypeEnum.IgnoreMdefHuman, new AttributeType("Ignore Mdef of Human player")],
    [AttributeTypeEnum.IgnoreMdefDoram, new AttributeType("Ignore Mdef of Doram player")],
])

export const calAttributeList:  Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.Vct, new AttributeType("Vct")],
    [AttributeTypeEnum.VctPercent, new AttributeType("VctPercent")],
    [AttributeTypeEnum.Fct, new AttributeType("Fct")],
    [AttributeTypeEnum.FctPercent, new AttributeType("Fct Percent")],
])

export const otherAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.SkillBasePercent, new AttributeType("Skill Base Dmg Percent")],
    [AttributeTypeEnum.SkillDmg, new AttributeType("Skill Dmg")],
    [AttributeTypeEnum.Hp, new AttributeType("Hp")],
    [AttributeTypeEnum.HpPercent, new AttributeType("Hp%")],
    [AttributeTypeEnum.Sp, new AttributeType("Sp")],
    [AttributeTypeEnum.SpPercent, new AttributeType("Sp%")],
    [AttributeTypeEnum.Aspd, new AttributeType("Aspd")],
    [AttributeTypeEnum.AspdPercent, new AttributeType("Aspd%")],
    [AttributeTypeEnum.Haste, new AttributeType("Item / Skill Haste")],
    [AttributeTypeEnum.Hit, new AttributeType("Hit")],
    [AttributeTypeEnum.Critical, new AttributeType("Critical")],
    [AttributeTypeEnum.Flee, new AttributeType("Flee")],
    [AttributeTypeEnum.Def, new AttributeType("Def")],
    [AttributeTypeEnum.Mdef, new AttributeType("Mdef")],
    [AttributeTypeEnum.SoftDef, new AttributeType("Soft Def")],
    [AttributeTypeEnum.SoftDefPercent, new AttributeType("SoftDef%")],
    [AttributeTypeEnum.SoftMdef, new AttributeType("Soft MdDef")],
    [AttributeTypeEnum.SoftMdefPercent, new AttributeType("SoftMdef%")],
])

export const importantAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.Delay, new AttributeType("Delay")],
    [AttributeTypeEnum.PerfectHit, new AttributeType("Perfect Hit")],
])

export const defAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.PhysicalMedR, new AttributeType("Medium Size Physical Reduction")],
    [AttributeTypeEnum.PhysicalLargeR, new AttributeType("Large Size Physical Reduction")],
])

export const attributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    ...Array.from(StatusTypeList),
    ...Array.from(physicalAttributeList),
    ...Array.from(magicalAttributeList),
    ...Array.from(calAttributeList),
    ...Array.from(importantAttributeList),
    ...Array.from(otherAttributeList),
    ...Array.from(defAttributeList),
])

export function getAttributeType(type: AttributeTypeEnum): AttributeType {
    const statusType = StatusTypeList.get(type)
    if (statusType) {
        return statusType
    }
    return attributeList.get(type) ?? new AttributeType("")
}