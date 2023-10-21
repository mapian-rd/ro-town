import { AttributeTypeEnum } from "./attributeType";
import { EquipmentSlot } from "./EquipmentSlot";

export enum ItemTypeEnum {
    Upper, Middle, Lower, UM, ML, UML, Armor,
    Weapon,
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

export class SizePenalty {
    small: number = 100
    medium: number = 100
    large: number = 100
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