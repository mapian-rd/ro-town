import { Attribute } from "./Attribute";
import { AttributeType, AttributeTypeEnum } from "./attributeType";
import { ItemTypeEnum } from "./itemType";
import { Item } from "./Itemv2";

export class PetAttribute extends Attribute {
    intimacy: PetFriendly;
    constructor(type: AttributeTypeEnum, intimacy: PetFriendly) {
        super(type);
        this.intimacy = intimacy;
    }
}

export interface PetDescription {
    intimacy: PetFriendly;
    description: string;
}

export class Pet extends Item {
    imageId!: number;
    petAttribute: PetAttribute[];
    constructor(id: string, name: string, attribures: Attribute[], petAttribute: PetAttribute[], description: PetDescription[]) {
        super(id, name, ItemTypeEnum.Pet, attribures);
        this.petAttribute = petAttribute;
    }

    static findPetAttribute(pet: Pet, intimacy: PetFriendly): Attribute[] {
        const petAttr = pet.petAttribute.filter((attribute) => attribute.intimacy.name === intimacy.name)
        return petAttr
    }
}

export class PetFriendly {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export enum PetFriendlyEnum {
    friendly, ally, normal,
}