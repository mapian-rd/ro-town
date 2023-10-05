import { AttributeType, AttributeTypeEnum } from "../model/attributeType"

export const StatusTypeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.Str, new AttributeType("Str")],
    [AttributeTypeEnum.Agi, new AttributeType("Agi")],
    [AttributeTypeEnum.Vit, new AttributeType("Vit")],
    [AttributeTypeEnum.Int, new AttributeType("Int")],
    [AttributeTypeEnum.Dex, new AttributeType("Dex")],
    [AttributeTypeEnum.Luk, new AttributeType("Luk")],
])

export const attributeList: Map<AttributeTypeEnum, AttributeType> = new Map([
    [AttributeTypeEnum.SkillDmg, new AttributeType("SkillDmg")],
    [AttributeTypeEnum.Atk, new AttributeType("Equipment Atk")],
    [AttributeTypeEnum.StatusAtk, new AttributeType("Status Atk")],
    [AttributeTypeEnum.WeaponAtk, new AttributeType("Final Weapon Atk")],
    [AttributeTypeEnum.AtkPercent, new AttributeType("Atk%")],
    [AttributeTypeEnum.Matk, new AttributeType("Equipment Matk")],
    [AttributeTypeEnum.StatusMatk, new AttributeType("Status Matk")],
    [AttributeTypeEnum.WeaponMatk, new AttributeType("Weapon Matk")],
    [AttributeTypeEnum.MatkPercent, new AttributeType("MATK%")],
    [AttributeTypeEnum.Hit, new AttributeType("Hit")],
    [AttributeTypeEnum.Critical, new AttributeType("Critical")],
    [AttributeTypeEnum.Flee, new AttributeType("Flee")],
    [AttributeTypeEnum.Hp, new AttributeType("Hp")],
    [AttributeTypeEnum.HpPercent, new AttributeType("Hp%")],
    [AttributeTypeEnum.Sp, new AttributeType("Sp")],
    [AttributeTypeEnum.SpPercent, new AttributeType("Sp%")],
    [AttributeTypeEnum.Aspd, new AttributeType("Aspd")],
    [AttributeTypeEnum.AspdPercent, new AttributeType("Aspd%")],
    [AttributeTypeEnum.Def, new AttributeType("Def")],
    [AttributeTypeEnum.Mdef, new AttributeType("Mdef")],
    [AttributeTypeEnum.SoftDef, new AttributeType("Soft Def")],
    [AttributeTypeEnum.SoftDefPercent, new AttributeType("SoftDef%")],
    [AttributeTypeEnum.SoftMdef, new AttributeType("Soft MdDef")],
    [AttributeTypeEnum.SoftMdefPercent, new AttributeType("SoftMdef%")],
    [AttributeTypeEnum.MeleeMul, new AttributeType("Melee Multiple")],
    [AttributeTypeEnum.RangeMul, new AttributeType("Range Multiple")],
    [AttributeTypeEnum.PhysicalSmall, new AttributeType("Physical Dmg on Small Size")],
    [AttributeTypeEnum.PhysicalMed, new AttributeType("Physical Dmg on Medium Size")],
    [AttributeTypeEnum.PhysicalLarge, new AttributeType("Physical Dmg on Large Size")],
    [AttributeTypeEnum.PhysicalNeutral, new AttributeType("Physical Dmg on Neutral")],
    [AttributeTypeEnum.PhysicalWater, new AttributeType("Physical Dmg on Water")],
    [AttributeTypeEnum.PhysicalEarth, new AttributeType("Physical Dmg on Earth")],
    [AttributeTypeEnum.MonMedPhyRed, new AttributeType("Monster Medium Size Physical Reduction")],
    [AttributeTypeEnum.MonLarPhyRed, new AttributeType("Monster Large Size Physical Reduction")],
])

export function getAttributeType(type: AttributeTypeEnum): AttributeType {
    const statusType = StatusTypeList.get(type)
    if (statusType) {
        return statusType
    }
    return attributeList.get(type) ?? new AttributeType("")
}