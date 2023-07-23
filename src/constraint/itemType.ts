import { ItemType, WeaponType } from "../model/itemType";
import { Dex, Str } from "./status";

export const CardWeapon = new ItemType("Card Weapon")

export const Bow = new WeaponType("Bow", Dex, true)
export const Instrument = new WeaponType("Instrument", Dex, false)
export const Whip = new WeaponType("Whip", Dex, false)
export const Gun = new WeaponType("Gun", Dex, true)
export const BareHanded = new WeaponType("Bare Handed", Str, false)
export const OneHandedStaff = new WeaponType("One-Handed Staff", Str, false)