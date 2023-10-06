import { Attribute, AttributeName } from "./Attribute";
import { AttributeTypeEnum } from "./attributeType";
import { DescriptionNumber, FormulaString } from "./Formula";
import { SkillEnum } from "./skill";
import { Status } from "./status";

export class CalculatedAttribute {
    bonusStatus: Status = new Status()
    jobHp: number = 0;
    jobSp: number = 0;

    rWeaponAtk: number = 0
    rWeaponMatk: number = 0
    rRefineAtk: number = 0
    rRefineMatk: number = 0
    rVarianceAtk: number = 0
    rVarianceMatk: number = 0
    rOverRefine: number = 0
    rHighRefine: number = 0

    lWeaponAtk: number = 0
    lWeaponMatk: number = 0
    lRefineAtk: number = 0
    lRefineMatk: number = 0
    lVarianceAtk: number = 0
    lVarianceMatk: number = 0
    lOverRefine: number = 0
    lHighRefine: number = 0

    statusBonus: number = 0

    isWeaponRange: boolean = false;

    minMaxFinalWeaponAtk: number[] = [0, 0]
    minMaxFinalWeaponMatk: number[] = [0, 0]

    shieldPenalty: number = 0
    weaponPenalty: number = 0

    remainStatusPoint: number = 0

    checkedAttributeList: Map<string, AttributeName[]> = new Map()
    formulaList: Map<AttributeTypeEnum, FormulaString[]> = new Map()
    skillFormulaList: Map<SkillEnum, FormulaString[]> = new Map()
    rawAttributeList: Map<AttributeTypeEnum, DescriptionNumber> = new Map()
    calRawCall: boolean = false
    finalAttributeList: Map<AttributeTypeEnum, DescriptionNumber> = new Map()
    skillAttributeList: Map<SkillEnum, DescriptionNumber> = new Map()
    calFinalCall: boolean = false
    statusAtk: number = 0
    statusMatk: number = 0
}