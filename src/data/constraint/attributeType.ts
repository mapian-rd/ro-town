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
    [AttributeTypeEnum.StatusAtk, new AttributeType("Status Atk")],
    [AttributeTypeEnum.WeaponAtk, new AttributeType("Final Weapon Atk")],
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
])

export const magicalAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.StatusMatk, new AttributeType("Status Matk")],
    [AttributeTypeEnum.WeaponMatk, new AttributeType("Weapon Matk")],
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
])

export const otherAttributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.Hp, new AttributeType("Hp")],
    [AttributeTypeEnum.HpPercent, new AttributeType("Hp%")],
    [AttributeTypeEnum.Sp, new AttributeType("Sp")],
    [AttributeTypeEnum.SpPercent, new AttributeType("Sp%")],
    [AttributeTypeEnum.Aspd, new AttributeType("Aspd")],
    [AttributeTypeEnum.AspdPercent, new AttributeType("Aspd%")],
    [AttributeTypeEnum.Hit, new AttributeType("Hit")],
    [AttributeTypeEnum.Critical, new AttributeType("Critical")],
    [AttributeTypeEnum.Flee, new AttributeType("Flee")],
    [AttributeTypeEnum.Def, new AttributeType("Def")],
    [AttributeTypeEnum.Mdef, new AttributeType("Mdef")],
    [AttributeTypeEnum.SoftDef, new AttributeType("Soft Def")],
    [AttributeTypeEnum.SoftDefPercent, new AttributeType("SoftDef%")],
    [AttributeTypeEnum.SoftMdef, new AttributeType("Soft MdDef")],
    [AttributeTypeEnum.SoftMdefPercent, new AttributeType("SoftMdef%")],
    [AttributeTypeEnum.MonMedPhyRed, new AttributeType("Monster Medium Size Physical Reduction")],
    [AttributeTypeEnum.MonLarPhyRed, new AttributeType("Monster Large Size Physical Reduction")],
])

export const attributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    ...Array.from(physicalAttributeList),
    ...Array.from(magicalAttributeList),
    ...Array.from(otherAttributeList),
])

export function getAttributeType(type: AttributeTypeEnum): AttributeType {
    const statusType = StatusTypeList.get(type)
    if (statusType) {
        return statusType
    }
    return attributeList.get(type) ?? new AttributeType("")
}