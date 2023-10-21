import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { Attribute, Combo, Item } from "./Itemv1";

export class PetAttribute extends Attribute {
    intimacy: PetFriendly;
    constructor(type: AttributeTypeEnum, intimacy: PetFriendly) {
        super(type);
        this.intimacy = intimacy;
    }
}

export class Pet extends Item {
    imageId!: number;
    // petAttribute: PetAttribute[];
    // description: string;
    // constructor(id: number, name: string, attribures: Attribute[], combos: Combo[], petAttribute: PetAttribute[], description: string) {
    //     // super(id, name, PetItemType, attribures, combos);
    //     this.petAttribute = petAttribute;
    //     this.description = description;
    // }

    // static findPetAttribute(pet: Pet, intimacy: PetFriendly, type: AttributeTypeEnum, item: Item[], findCombo?: boolean): Attribute[] {
        // const attribute = super.findAttribute(pet, type, item, findCombo)
        // const petAttr = pet.petAttribute.filter((attribute) => attribute.intimacy === intimacy && attribute.type === type)
        // return [...attribute, ...petAttr];
    // }

    // static findPetAttributev2(pet: Pet, intimacy: PetFriendly): Attribute[] {
        // const petAttr = pet.petAttribute.filter((attribute) => attribute.intimacy === intimacy)
        // return petAttr
    // }
}

export class PetFriendly {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}