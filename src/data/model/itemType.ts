import { AttributeTypeEnum } from "./attributeType";
import { EquipmentSlot } from "./EquipmentSlot";

export enum ItemTypeEnum {
    Upper, Middle, Lower, UM, ML, UML, Armor,
    Dagger, OneHandSword, TwoHandSword, Katar, OneHandSpear, TwoHandSpear, OneHandAxe, TwoHandAxe, Mace, Knuckle, OneHandRod, TwoHandRod, Book, Bow, Instrument, Whip, Gun, Fuuma,
    Shield, Garment, Shoes, Accessery, AccesseryLeft, AccesseryRight,
    CostumeUpper, CostumeMiddle, CostumeLower, CostumeUM, CostumeML, CostumeUML, CostumeGarment,
    ShadowWeapon, ShadowArmor, ShadowShield, ShadowShoes, ShadowEarring, ShadowPendent,
    CardHeadgear, CardArmor, CardWeapon, CardShield, CardGarment, CardShoes, CardAccessery, CardAccesseryLeft, CardAccesseryRight,
    Pet,
    Enchant, Buff, CostumeEnchant,
}

export class ItemType {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export class EquipableType extends ItemType {
    hint?: string;
    refineable?: boolean;
    cardTypeList?: ItemTypeEnum[];
    equipSlot?: EquipmentSlot[];
    /**
     * true or, other and,
     */
    equipSlotType?: boolean;
    constructor(name: string, hint?: string) {
        super(name)
        this.hint = hint
    }
}

export const itemTypeList: Map<ItemTypeEnum, EquipableType> = new Map([
    [ItemTypeEnum.Upper, { name: "Headgear Upper", refineable: true, equipSlot: [EquipmentSlot.upper] }],
    [ItemTypeEnum.Middle, { name: "Headgear Middle", equipSlot: [EquipmentSlot.middle] }],
    [ItemTypeEnum.Lower, { name: "Headgear Lower", equipSlot: [EquipmentSlot.lower] }],
    [ItemTypeEnum.UM, { name: "Headgear Upper-Middle", refineable: true, equipSlot: [EquipmentSlot.upper, EquipmentSlot.middle] }],
    [ItemTypeEnum.ML, { name: "Headgear Middle-Lower", equipSlot: [EquipmentSlot.middle, EquipmentSlot.lower] }],
    [ItemTypeEnum.UML, { name: "Headgear Upper-Middle-Lower", refineable: true, equipSlot: [EquipmentSlot.upper, EquipmentSlot.middle, EquipmentSlot.lower] }],
    [ItemTypeEnum.Armor, { name: "Armor", refineable: true, equipSlot: [EquipmentSlot.armor] }],
    [ItemTypeEnum.Dagger, { name: "Dagger", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon], equipSlotType: true }],
    [ItemTypeEnum.OneHandSword, { name: "One-Handed Sword", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.TwoHandSword, { name: "Two-Handed Sword", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.Katar, { name: "Katar", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.OneHandSpear, { name: "One-Handed Spear", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.TwoHandSpear, { name: "Two-Handed Spear", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.OneHandAxe, { name: "One-Handed Axe", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.TwoHandAxe, { name: "Two-Handed Axe", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.Mace, { name: "Mace", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.Knuckle, { name: "Knuckle", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.OneHandRod, { name: "One-Handed Staff", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.TwoHandRod, { name: "Two-Handed Staff", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.Book, { name: "Book", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.Bow, { name: "Bow", isRange: true, refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.Instrument, { name: "Instrument", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.Whip, { name: "Whip", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.Gun, { name: "Gun", refineable: true, equipSlot: [EquipmentSlot.rWeapon, EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.Fuuma, { name: "Fuuma", refineable: true, equipSlot: [EquipmentSlot.rWeapon] }],
    [ItemTypeEnum.Shield, { name: "Sheid", refineable: true, equipSlot: [EquipmentSlot.lWeapon] }],
    [ItemTypeEnum.Garment, { name: "Garment", refineable: true, equipSlot: [EquipmentSlot.garment] }],
    [ItemTypeEnum.Shoes, { name: "Shoes", refineable: true, equipSlot: [EquipmentSlot.shoes] }],
    [ItemTypeEnum.Accessery, { name: "Accessery", equipSlot: [EquipmentSlot.rAccessery, EquipmentSlot.lAccessery], equipSlotType: true }],
    [ItemTypeEnum.AccesseryLeft, { name: "AccesseryLeft", equipSlot: [EquipmentSlot.lAccessery] }],
    [ItemTypeEnum.AccesseryRight, { name: "AccesseryRight", equipSlot: [EquipmentSlot.rAccessery] }],
    [ItemTypeEnum.CostumeUpper, { name: "Costume Upper", equipSlot: [EquipmentSlot.upperCostume] }],
    [ItemTypeEnum.CostumeMiddle, { name: "Costume Middle", equipSlot: [EquipmentSlot.middleCostume] }],
    [ItemTypeEnum.CostumeLower, { name: "Costume Lower", equipSlot: [EquipmentSlot.lowerCostume] }],
    [ItemTypeEnum.CostumeUM, { name: "Costume Upper-Middle", equipSlot: [EquipmentSlot.upperCostume, EquipmentSlot.middleCostume] }],
    [ItemTypeEnum.CostumeML, { name: "Costume Middle-Lower", equipSlot: [EquipmentSlot.middleCostume, EquipmentSlot.lowerCostume] }],
    [ItemTypeEnum.CostumeUML, { name: "Costume Upper-Middle-Lower", equipSlot: [EquipmentSlot.upperCostume, EquipmentSlot.middleCostume, EquipmentSlot.lowerCostume] }],
    [ItemTypeEnum.CostumeGarment, { name: "CostumeGarment", equipSlot: [EquipmentSlot.garmentCostume] }],
    [ItemTypeEnum.ShadowWeapon, { name: "Shadow Weapon", refineable: true, equipSlot: [EquipmentSlot.weaponShadow] }],
    [ItemTypeEnum.ShadowArmor, { name: "Shadow Armor", refineable: true, equipSlot: [EquipmentSlot.armorShadow] }],
    [ItemTypeEnum.ShadowShield, { name: "Shadow Shield", refineable: true, equipSlot: [EquipmentSlot.sheidShadow] }],
    [ItemTypeEnum.ShadowShoes, { name: "Shadow Shoes", refineable: true, equipSlot: [EquipmentSlot.shoesShadow] }],
    [ItemTypeEnum.ShadowEarring, { name: "Shadow Earring", refineable: true, equipSlot: [EquipmentSlot.earringShadow] }],
    [ItemTypeEnum.ShadowPendent, { name: "Shadow Pendent", refineable: true, equipSlot: [EquipmentSlot.pendantShadow] }],
])

export class WeaponType extends EquipableType {
    mainStatus: AttributeTypeEnum
    isRange: boolean
    constructor(name: string, mainStatus: AttributeTypeEnum, isRange: boolean) {
        super(name)
        this.mainStatus = mainStatus
        this.isRange = isRange
    }
}

export class Shield extends ItemType {

}