import { AttributeTypeEnum } from "../model/attributeType";
import { ItemType, WeaponType } from "../model/itemType";

export const PetItemType = new ItemType("Pet")

export const CardWeapon = new ItemType("Card Weapon")

export const Bow = new WeaponType("Bow", AttributeTypeEnum.Dex, true)
export const Instrument = new WeaponType("Instrument", AttributeTypeEnum.Dex, false)
export const Whip = new WeaponType("Whip", AttributeTypeEnum.Dex, false)
export const Gun = new WeaponType("Gun", AttributeTypeEnum.Dex, true)
export const BareHanded = new WeaponType("Bare Handed", AttributeTypeEnum.Str, false)
export const OneHandedStaff = new WeaponType("One-Handed Staff", AttributeTypeEnum.Str, false)