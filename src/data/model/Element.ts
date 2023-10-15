import { AttributeTypeEnum } from "./attributeType";

export class Element {
    name!: string;
    last!: number;
    physicalAttributeType: AttributeTypeEnum;
    magicAttributeType: AttributeTypeEnum;
    skillAttributeType: AttributeTypeEnum;

    constructor(name: string, last: number, physicalAttributeType: AttributeTypeEnum, magicAttributeType: AttributeTypeEnum, skillAttributeType: AttributeTypeEnum) {
        this.name = name;
        this.last = last;
        this.physicalAttributeType = physicalAttributeType
        this.magicAttributeType = magicAttributeType
        this.skillAttributeType = skillAttributeType
    }
}