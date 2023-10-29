import { AttributeTypeEnum } from "./attributeType";
import { EquipmentSlot } from "./EquipmentSlot";

export enum ItemTypeEnum {
    Upper = "Upper", Middle = "Middle", Lower = "Lower", UM = "UM", ML = "ML", UML = "UML", Armor = "Armor",
    Weapon = "Weapon",

    Dagger = "Dagger", OneHandSword = "OneHandSword", TwoHandSword = "TwoHandSword", Katar = "Katar", OneHandSpear = "OneHandSpear", TwoHandSpear = "TwoHandSpear", OneHandAxe = "OneHandAxe", TwoHandAxe = "TwoHandAxe", Mace = "Mace", Knuckle = "Knuckle", OneHandRod = "OneHandRod", TwoHandRod = "TwoHandRod", Book = "Book", Bow = "Bow", Instrument = "Instrument", Whip = "Whip", Gun = "Gun", Fuuma = "Fuuma",

    Shield = "Shield", Garment = "Garment", Shoes = "Shoes", Accessery = "Accessery", AccesseryLeft = "AccesseryLeft", AccesseryRight = "AccesseryRight",

    CostumeUpper = "CostumeUpper", CostumeMiddle = "CostumeMiddle", CostumeLower = "CostumeLower", CostumeUM = "CostumeUM", CostumeML = "CostumeML", CostumeUML = "CostumeUML", CostumeGarment = "CostumeGarment",

    ShadowWeapon = "ShadowWeapon", ShadowArmor = "ShadowArmor", ShadowShield = "ShadowShield", ShadowShoes = "ShadowShoes", ShadowEarring = "ShadowEarring", ShadowPendent = "ShadowPendent",

    CardHeadgear = "CardHeadgear", CardArmor = "CardArmor", CardWeapon = "CardWeapon", CardShield = "CardShield", CardGarment = "CardGarment", CardShoes = "CardShoes", CardAccessery = "CardAccessery", CardAccesseryLeft = "CardAccesseryLeft",

    CardAccesseryRight = "CardAccesseryRight",

    Pet = "Pet",
    Enchant = "Enchant", Buff = "Buff", 
    CostumeEnchantUpper = "CostumeEnchantUpper", CostumeEnchantMiddle = "CostumeEnchantMiddle", CostumeEnchantLower = "CostumeEnchantLower", CostumeEnchantGarment = "CostumeEnchantGarment"
}

export class ItemType {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export class SizePenalty {
    small: number = 100
    medium: number = 100
    large: number = 100
}

export class EquipableType extends ItemType {
    hint?: string;
    refineable?: boolean;
    refineMax? : number;
    cardTypeList?: ItemTypeEnum[];
    enchantSlotList?: ItemTypeEnum[];
    equipSlot?: EquipmentSlot[];
    /**
     * true or, other and,
     */
    equipSlotType?: boolean;
    sizePenalty?: SizePenalty;
    parentType?: ItemTypeEnum;
    constructor(name: string, hint?: string) {
        super(name)
        this.hint = hint
    }
}

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