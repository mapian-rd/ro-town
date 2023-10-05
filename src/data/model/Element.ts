import { AttributeTypeEnum } from "./attributeType";

export class Element {
    name!: string;
    last!: number;
    physicalAttributeType: AttributeTypeEnum;
    magicAttributeType: AttributeTypeEnum;

    constructor(name: string, last: number, physicalAttributeType: AttributeTypeEnum, magicAttributeType: AttributeTypeEnum) {
        this.name = name;
        this.last = last;
        this.physicalAttributeType = physicalAttributeType
        this.magicAttributeType = magicAttributeType
    }
}