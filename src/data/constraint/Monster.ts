import { AttributeTypeEnum } from "../model/attributeType";
import { Element } from "../model/Element";
import { MonsterElement, MonsterSize, MonsterRace } from "../model/monster";

export const MonSizeSmall = new MonsterSize(0, "Small", AttributeTypeEnum.PhysicalSmall, AttributeTypeEnum.MagicSmall)
export const MonSizeMedium = new MonsterSize(1, "Medium", AttributeTypeEnum.PhysicalMed, AttributeTypeEnum.MagicMed)
export const MonSizeBig = new MonsterSize(2, "Big", AttributeTypeEnum.PhysicalLarge, AttributeTypeEnum.MagicLarge)

export const MonSizeList = [MonSizeSmall, MonSizeMedium, MonSizeBig]

export const MonTypeFormless = new MonsterRace(0, "Formless", AttributeTypeEnum.PhysicalFormless, AttributeTypeEnum.MagicFormless, AttributeTypeEnum.IgnoreDefFormless, AttributeTypeEnum.IgnoreMdefFormless)
export const MonTypeUndead = new MonsterRace(1, "Undead", AttributeTypeEnum.PhysicalRaceUndead, AttributeTypeEnum.MagicUndead, AttributeTypeEnum.IgnoreDefUndead, AttributeTypeEnum.IgnoreMdefUndead)
export const MonTypeBrute = new MonsterRace(2, "Brute", AttributeTypeEnum.PhysicalBrute, AttributeTypeEnum.MagicBrute, AttributeTypeEnum.IgnoreDefBrute, AttributeTypeEnum.IgnoreMdefBrute)
export const MonTypePlant = new MonsterRace(3, "Plant", AttributeTypeEnum.PhysicalPlant, AttributeTypeEnum.MagicPlant, AttributeTypeEnum.IgnoreDefPlant, AttributeTypeEnum.IgnoreMdefPlant)
export const MonTypeInsect = new MonsterRace(4, "Insect", AttributeTypeEnum.PhysicalInsect, AttributeTypeEnum.MagicInsect, AttributeTypeEnum.IgnoreDefInsect, AttributeTypeEnum.IgnoreMdefInsect)
export const MonTypeAngel = new MonsterRace(5, "Angel", AttributeTypeEnum.PhysicalAngel, AttributeTypeEnum.MagicAngel, AttributeTypeEnum.IgnoreDefAngel, AttributeTypeEnum.IgnoreMdefAngel)
export const MonTypeDemon = new MonsterRace(6, "Demon", AttributeTypeEnum.PhysicalDemon, AttributeTypeEnum.MagicDemon, AttributeTypeEnum.IgnoreDefDemon, AttributeTypeEnum.IgnoreMdefDemon)
export const MonTypeDemi = new MonsterRace(7, "Demi-human", AttributeTypeEnum.PhysicalDemi, AttributeTypeEnum.MagicDemi, AttributeTypeEnum.IgnoreDefDemi, AttributeTypeEnum.IgnoreMdefDemi)

export const MonTypeList = [MonTypeFormless, MonTypeUndead, MonTypeBrute, MonTypePlant, MonTypeInsect, MonTypeAngel, MonTypeDemon, MonTypeDemi]

export const Neutral = new Element("Neutral", 0, AttributeTypeEnum.PhysicalNeutral, AttributeTypeEnum.MagicNeutral, AttributeTypeEnum.MagicSkillNeutral)
export const Water = new Element("Water", 1, AttributeTypeEnum.PhysicalWater, AttributeTypeEnum.MagicWater, AttributeTypeEnum.MagicSkillWater)
export const Earth = new Element("Earth", 2, AttributeTypeEnum.PhysicalEarth, AttributeTypeEnum.MagicEarth, AttributeTypeEnum.MagicSkillEarth)
export const Fire = new Element("Fire", 3, AttributeTypeEnum.PhysicalFire, AttributeTypeEnum.MagicFire, AttributeTypeEnum.MagicSkillFire)
export const Wind = new Element("Wind", 4, AttributeTypeEnum.PhysicalWind, AttributeTypeEnum.MagicWind, AttributeTypeEnum.MagicSkillWind)
export const Poison = new Element("Poison", 5, AttributeTypeEnum.PhysicalPoison, AttributeTypeEnum.MagicPoison, AttributeTypeEnum.MagicSkillPoison)
export const Holy = new Element("Holy", 6, AttributeTypeEnum.PhysicalHoly, AttributeTypeEnum.MagicHoly, AttributeTypeEnum.MagicSkillHoly)
export const Dark = new Element("Dark", 7, AttributeTypeEnum.PhysicalDark, AttributeTypeEnum.MagicDark, AttributeTypeEnum.MagicSkillDark)
export const Ghost = new Element("Ghost", 8, AttributeTypeEnum.PhysicalGhost, AttributeTypeEnum.MagicGhost, AttributeTypeEnum.MagicSkillGhost)
export const Undead = new Element("Undead", 9, AttributeTypeEnum.PhysicalUndead, AttributeTypeEnum.MagicUndead, AttributeTypeEnum.MagicSkillUndead)

export const ElementList = [Neutral, Water, Earth, Fire, Wind, Poison, Holy, Dark, Ghost, Undead]

// export const Neutral1 = new MonsterElement(20, Neutral, 1)
// export const Neutral2 = new MonsterElement(40, Neutral, 2)
// export const Neutral3 = new MonsterElement(60, Neutral, 3)
// export const Neutral4 = new MonsterElement(80, Neutral, 4)
// export const Earth1 = new MonsterElement(22, Earth, 1)
// export const Earth2 = new MonsterElement(42, Earth, 2)
// export const Earth3 = new MonsterElement(62, Earth, 3)
// export const Earth4 = new MonsterElement(82, Earth, 4)
// export const Fire1 = new MonsterElement(23, Fire, 1)
// export const Fire2 = new MonsterElement(43, Fire, 2)
// export const Fire3 = new MonsterElement(63, Fire, 3)
// export const Fire4 = new MonsterElement(83, Fire, 4)
// export const Wind1 = new MonsterElement(24, Wind, 1)
// export const Wind2 = new MonsterElement(44, Wind, 2)
// export const Wind3 = new MonsterElement(64, Wind, 3)
// export const Wind4 = new MonsterElement(84, Wind, 4)
// export const Poison1 = new MonsterElement(25, Poison, 1)
// export const Poison2 = new MonsterElement(45, Poison, 2)
// export const Poison3 = new MonsterElement(65, Poison, 3)
// export const Poison4 = new MonsterElement(85, Poison, 4)
// export const Dark1 = new MonsterElement(27, Dark, 1)
// export const Dark2 = new MonsterElement(47, Dark, 2)
// export const Dark3 = new MonsterElement(67, Dark, 3)
// export const Dark4 = new MonsterElement(87, Dark, 4)
// export const Undead1 = new MonsterElement(29, Undead, 1)
// export const Undead2 = new MonsterElement(49, Undead, 2)
// export const Undead3 = new MonsterElement(69, Undead, 3)
// export const Undead4 = new MonsterElement(89, Undead, 4)

export const MonEleList = [1, 2, 3, 4].map(first => {
    return ElementList.map(element => new MonsterElement(20 * first + element.last, element, first, element.physicalAttributeType, element.magicAttributeType))
}).flat()