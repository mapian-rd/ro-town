import { rWeapon } from "../../Constraints"
import { finalATK, finalMagicDmg, finalMATK, finalPhysicalDmg, finalWeaponAtk, finalWeaponMatk, getMinMaxVarianceTK, pseudoElementAtk, trueWeaponMatk, defAtk, hardDefR, hardMdefR, monsterSoftDef, monsterSoftMdef, finalCritDmg, statusBonus, getMinMaxOverRefine } from "../../formula"
import { attributeList, magicalAttributeList } from "../constraint/attributeType"
import { MonSizeMedium, MonSizeSmall, Neutral } from "../constraint/Monster"
import { AttributeType, AttributeTypeEnum } from "./attributeType"
import { CalculatedAttribute } from "./CalculatedAttribute"
import { Character } from "./Characterv2"
import { DescriptionNumber } from "./Formula"
import { SizePenalty, WeaponType } from "./itemType"
import { Monster, MonsterSize } from "./monster"
import { ActiveSkill, Skill } from "./skill"

export class CombatStatus {
    type: AttributeTypeEnum = AttributeTypeEnum.Atk
    isWeaponRange: boolean = false
    sizePenaltyP: number = 100

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

    finalWeapontk: DescriptionNumber = new DescriptionNumber()
    equipmenttk: DescriptionNumber = new DescriptionNumber()

    isThanatos: boolean = false
    useDeftk: number = 0

    isEdp: boolean = false
    edpM: number = 1 // 4

    pseudoElementtk: number = 0
    sizeAddMulAP: DescriptionNumber = new DescriptionNumber()
    elementAddMulAP: DescriptionNumber = new DescriptionNumber()
    raceAddMulAP: DescriptionNumber = new DescriptionNumber()
    classAddMulAP: DescriptionNumber = new DescriptionNumber()

    elementMulP: number = 100

    statustk: number = 0
    elementSkillMulP: number = 100
    elementMildWindMulP: number = 100

    finaltk: number[] = []

    isMysticalAmp: boolean = false
    mysticalAmpM: number = 1 // 1.5

    tkAP: DescriptionNumber = new DescriptionNumber()
    mulAP: DescriptionNumber = new DescriptionNumber()

    skillP: DescriptionNumber = new DescriptionNumber()
    finalSkillP: number = 0

    isPowerThrust: boolean = false
    powerThrustAP: number = 0 // 25

    skillMulAP: DescriptionNumber = new DescriptionNumber()
    elementDmgMulAP: DescriptionNumber = new DescriptionNumber()

    ignoreDef: DescriptionNumber = new DescriptionNumber()
    ignoreMdef: DescriptionNumber = new DescriptionNumber()
    ignoreP: DescriptionNumber = new DescriptionNumber()
    monhardef: number = 0
    remainHardef: number = 0
    hardefRM: number = 0
    softef: number = 0

    isSkillRange: boolean = false
    rangeMulAP: DescriptionNumber = new DescriptionNumber()

    isCrit: boolean = false
    critDmgAP: DescriptionNumber = new DescriptionNumber()
    finalCritDmg: number = 1

    darkClawM: number = 1

    vct530: DescriptionNumber = new DescriptionNumber()
    vct: DescriptionNumber = new DescriptionNumber()
    skillVct: DescriptionNumber = new DescriptionNumber()
    fct: DescriptionNumber = new DescriptionNumber()
    fctP: DescriptionNumber = new DescriptionNumber()
    cooldown: DescriptionNumber = new DescriptionNumber()
    delay: DescriptionNumber = new DescriptionNumber()
    hit: DescriptionNumber = new DescriptionNumber()

    minDmg: number = 0
    maxDmg: number = 0
    avgDmg: number = 0
    skillHit: number = 0
    skillN: number = 0
    minDmgph: number = 0
    maxDmgph: number = 0
    avgDmgph: number = 0

    remainVct: number = 0
    remainFct: number = 0
    remainCooldown: number = 0
    remainDelay: number = 0

    secph: number = 1
    hitRatio: number = 100
    ph: DescriptionNumber = new DescriptionNumber()
    finalHitRaio: number = 100

    final: number = 0
    finalph: number = 0

    killedSec: number = 0

    static getSizePenalty(sizePenalty: SizePenalty, monster: Monster): number {
        if (monster.size === MonSizeSmall) {
            return sizePenalty.small
        } else if (monster.size === MonSizeMedium) {
            return sizePenalty.medium
        } else {
            return sizePenalty.large
        }
    }

    static getIgnoreed(
        type: AttributeTypeEnum,
        combatStatus: CombatStatus,
    ): DescriptionNumber {
        if (type === AttributeTypeEnum.Atk) {
            return combatStatus.ignoreDef
        } else {
            return combatStatus.ignoreMdef
        }
    }

    static getWeapontk(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute
    ): number[] {
        if (type === AttributeTypeEnum.Atk) {
            return [cal.rWeaponAtk, cal.lWeaponAtk]
        } else {
            return [cal.rWeaponMatk, cal.lWeaponMatk]
        }
    }

    static getSizeAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): DescriptionNumber {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.size.physicalAttributeType
        } else {
            attributeType = monster.size.magicAttributeType
        }
        return cal.finalAttributeList.get(attributeType) ?? new DescriptionNumber()
    }

    static getElementAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): DescriptionNumber {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.attribute.physicalAttributeType
        } else {
            attributeType = monster.attribute.magicAttributeType
        }
        return cal.finalAttributeList.get(attributeType) ?? new DescriptionNumber()
    }

    static getRaceAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): DescriptionNumber {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.race.physicalAttributeType
        } else {
            attributeType = monster.race.magicAttributeType
        }
        console.log("finalDmg", attributeType)
        return cal.finalAttributeList.get(attributeType) ?? new DescriptionNumber()
    }

    static getClassAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): DescriptionNumber {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.isBoss ? AttributeTypeEnum.PhysicalBoss : AttributeTypeEnum.PhysicalMon
        } else {
            attributeType = monster.isBoss ? AttributeTypeEnum.MagicBoss : AttributeTypeEnum.MagicMon
        }
        return cal.finalAttributeList.get(attributeType) ?? new DescriptionNumber()
    }

    static getStatustk(type: AttributeTypeEnum, cal: CalculatedAttribute): number {
        if (type === AttributeTypeEnum.Atk) {
            console.log(`cal ${cal.statusAtk} type ${type}`)
            return cal.statusAtk * 2
        } else {
            return cal.statusMatk
        }
    }

    static getEqiupmenttk(type: AttributeTypeEnum, cal: CalculatedAttribute): DescriptionNumber {
        if (type === AttributeTypeEnum.Atk) {
            return cal.rawAttributeList.get(AttributeTypeEnum.Atk) ?? new DescriptionNumber()
        } else {
            return cal.rawAttributeList.get(AttributeTypeEnum.Matk) ?? new DescriptionNumber()
        }
    }

    static getEqiupmenttkPercent(type: AttributeTypeEnum, cal: CalculatedAttribute): DescriptionNumber {
        if (type === AttributeTypeEnum.Atk) {
            return cal.rawAttributeList.get(AttributeTypeEnum.AtkPercent) ?? new DescriptionNumber()
        } else {
            return cal.rawAttributeList.get(AttributeTypeEnum.MatkPercent) ?? new DescriptionNumber()
        }
    }

    static getMultiple(type: AttributeTypeEnum, cal: CalculatedAttribute): DescriptionNumber {
        const resistR = cal.rawAttributeList.get(AttributeTypeEnum.AllPropertyResistR)
        return resistR ?? new DescriptionNumber()
    }

    static getHardefRM(type: AttributeTypeEnum, hardDef: number): number {
        if (type === AttributeTypeEnum.Atk) {
            return hardDefR(hardDef)
        } else {
            return hardMdefR(hardDef)
        }
    }

    static getSoftef(type: AttributeTypeEnum, monster: Monster): number {
        if (type === AttributeTypeEnum.Atk) {
            return monsterSoftDef(monster.level, monster.status.vit)
        } else {
            return monsterSoftMdef(monster.level, monster.status.int)
        }
    }

    static getVariance(type: AttributeTypeEnum, cal: CalculatedAttribute): number[] {
        if (type === AttributeTypeEnum.Atk) {
            return [cal.rVarianceAtk, cal.lVarianceAtk]
        } else {
            return [cal.rWeaponMatk, cal.lVarianceMatk]
        }
    }

    static getRefinetk(type: AttributeTypeEnum, cal: CalculatedAttribute): number[] {
        if (type === AttributeTypeEnum.Atk) {
            return [cal.rRefineAtk, cal.lRefineAtk]
        } else {
            return [cal.rRefineMatk, cal.lRefineMatk]
        }
    }

    static getFinalWeapontk(
        type: AttributeTypeEnum,
        weaponAtk: number = 0,
        varianceAtk: number = 0,
        refineAtk: number = 0,
        overRefine: number = 0,
        highRefine: number = 0,
        statusBonus: number = 0,
    ): number {
        if (type === AttributeTypeEnum.Atk) {
            return finalWeaponAtk(weaponAtk, varianceAtk, refineAtk, overRefine, highRefine, statusBonus)
        } else {
            return finalWeaponMatk(weaponAtk, varianceAtk, refineAtk, overRefine, highRefine)
        }
    }
    static getFinalWeapontkCal(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
    ): DescriptionNumber {
        if (type === AttributeTypeEnum.Atk) {
            return cal.finalAttributeList.get(AttributeTypeEnum.WeaponAtk) ?? new DescriptionNumber
        } else {
            return cal.finalAttributeList.get(AttributeTypeEnum.WeaponMatk) ?? new DescriptionNumber
        }
    }

    static getTrueMinMaxWeapontk(
        type: AttributeTypeEnum,
        isRange: boolean = false,
        rWeapontk: number = 0,
        rVariancetk: number = 0,
        rRefinetk: number = 0,
        rOverRefine: number = 0,
        rHighRefine: number = 0,

        lWeapontk: number = 0,
        lVariancetk: number = 0,
        lRefinetk: number = 0,
        lOverRefine: number = 0,
        lHighRefine: number = 0,
        statusBonus: number = 0,
    ): number[] {
        if (type === AttributeTypeEnum.Atk) {
            const minMaxVariancetk = getMinMaxVarianceTK(rVariancetk)
            const minMaxOverRefine = getMinMaxOverRefine(isRange, rOverRefine)
            console.log("finalDmg getTrueMinMaxWeapontk", rWeapontk, statusBonus, rRefinetk, minMaxVariancetk, minMaxOverRefine, rHighRefine)
            const min = finalWeaponAtk(rWeapontk, minMaxVariancetk[0], rRefinetk, minMaxOverRefine[0], rHighRefine, statusBonus)
            const max = finalWeaponAtk(rWeapontk, minMaxVariancetk[1], rRefinetk, minMaxOverRefine[1], rHighRefine, statusBonus)
            return [min, max]
        } else {
            const rMinMaxVariancetk = getMinMaxVarianceTK(rVariancetk)
            const rMinMaxOverRefine = getMinMaxOverRefine(isRange, rOverRefine)
            const rMin = finalWeaponAtk(rWeapontk, rMinMaxVariancetk[0], rRefinetk, rMinMaxOverRefine[0], rHighRefine, statusBonus)
            const rMax = finalWeaponAtk(rWeapontk, rMinMaxVariancetk[1], rRefinetk, rMinMaxOverRefine[1], rHighRefine, statusBonus)

            const lMinMaxVariancetk = getMinMaxVarianceTK(lVariancetk)
            const lMinMaxOverRefine = getMinMaxOverRefine(isRange, lOverRefine)
            const lMin = finalWeaponMatk(lWeapontk, lMinMaxVariancetk[0], lRefinetk, lMinMaxOverRefine[0], lHighRefine)
            const lMax = finalWeaponMatk(lWeapontk, lMinMaxVariancetk[1], lRefinetk, lMinMaxOverRefine[1], lHighRefine)
            return [rMin + lMin, rMax + lMax]
        }
    }

    static getTrueMinMaxWeapontkCal(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
    ): number[] {
        let number: DescriptionNumber | undefined
        if (type === AttributeTypeEnum.Atk) {
            number = cal.finalAttributeList.get(AttributeTypeEnum.WeaponAtk)
        } else {
            number = cal.finalAttributeList.get(AttributeTypeEnum.WeaponMatk)
        }
        return [number?.min ?? 0, number?.max ?? 0]
    }

    static getFinaltk(
        type: AttributeTypeEnum,
        finalWeapontk: number = 0,
        sizePenaltyP: number = 100,
        equipmenttk: number = 0,
        useDefAtk: number = 0,
        consumabletk: number = 0,
        bufftk: number = 0,
        edpM: number = 1,
        pseudoElementAtk: number = 0,
        sizeAddMulAP: number = 0,
        elementAddMulAP: number = 0,
        raceAddMulAP: number = 0,
        classAddMulAP: number = 0,
        elementMulP: number = 100,
        tkAP: number = 0,
        statustk: number = 0,
        masterytk: number = 0,
        elementSkillMulP?: number,
        elementMildWindMulP?: number,

        mysticalAmpM: number = 1,
    ): number {
        console.log("finalDmg getFinaltk finalWeapontk:", finalWeapontk)
        if (type === AttributeTypeEnum.Atk) {
            return finalATK(finalWeapontk, sizePenaltyP, equipmenttk, useDefAtk, consumabletk, bufftk, edpM, pseudoElementAtk, sizeAddMulAP, elementAddMulAP, raceAddMulAP, classAddMulAP, elementMulP, tkAP, statustk, masterytk, elementSkillMulP, elementMildWindMulP)
        } else {
            return finalMATK(statustk, finalWeapontk, mysticalAmpM, equipmenttk, consumabletk, bufftk, tkAP, sizeAddMulAP, elementAddMulAP, raceAddMulAP, classAddMulAP, masterytk)
        }
    }

    static getFinalDmg(
        type: AttributeTypeEnum,
        finaltk: number = 0,
        tkAP: number = 0,
        mulAP: number = 0,
        skillP: number = 100,
        powerThrustAP: number = 0,
        skillMulAP: number = 0,
        elementDmgMulAP: number = 0,
        hardefRM: number = 1,
        softef: number = 0,
        rangeMulAP: number = 0,
        finalCritDmgM: number = 1,
        darkClawM: number = 1,

        elementMulP: number = 100,
    ): number {
        console.log("finalDmg getFinalDmg finaltk:", finaltk)
        if (type === AttributeTypeEnum.Atk) {
            return finalPhysicalDmg(finaltk,
                // tkAP, 
                mulAP, skillP, powerThrustAP, skillMulAP, elementDmgMulAP, hardefRM, softef, rangeMulAP, finalCritDmgM, darkClawM)
        } else {
            return finalMagicDmg(finaltk, mulAP, skillP, skillMulAP, elementDmgMulAP, hardefRM, softef, elementMulP)
        }
    }

    static finalDmg(
        combatStatus: CombatStatus,
        cal: CalculatedAttribute,
        monster: Monster,
        skill: ActiveSkill,
        skillLevel: number = 1
    ): number[] {
        // Vct
        combatStatus.vct530 = cal.vct530
        combatStatus.vct = cal.rawAttributeList.get(AttributeTypeEnum.VctPercent) ?? new DescriptionNumber()
        combatStatus.skillVct = cal.vctAttributeList.get(skill.enum) ?? new DescriptionNumber()
        const vct = Math.min(100, combatStatus.vct.number)
        const skillVct = Math.min(100, combatStatus.skillVct.number)
        const vct530 = Math.min(100, combatStatus.vct530.number)
        const requireVct = skill.vct[skillLevel - 1]
        combatStatus.remainVct = [requireVct]
            .map(value => value - value * vct / 100)
            .map(value => value - value * vct530 / 100)
            .map(value => value - value * skillVct / 100)
            .map(value => Math.max(0, value))
        [0]

        // Fct
        combatStatus.fct = cal.rawAttributeList.get(AttributeTypeEnum.Fct) ?? new DescriptionNumber()
        combatStatus.fctP = cal.rawAttributeList.get(AttributeTypeEnum.FctPercent) ?? new DescriptionNumber()
        const fct = combatStatus.fct.number
        const fctP = Math.min(100, combatStatus.fctP.number)
        console.log("finalDmg fct", fct, fctP)
        combatStatus.remainFct = [skill.fct[skillLevel - 1]]
            .map(value => Math.max(0, value - fct))
            .map(value => value - value * fctP / 100)
        [0]

        // Cooldown
        combatStatus.cooldown = cal.cooldownAttributeList.get(skill.enum) ?? new DescriptionNumber()
        const skillCooldown = Math.min(100, combatStatus.cooldown.number)
        combatStatus.remainCooldown = [skill.cooldown[skillLevel - 1]]
            .map(value => value - skillCooldown)
        [0]

        // Delay
        combatStatus.delay = cal.rawAttributeList.get(AttributeTypeEnum.Delay) ?? new DescriptionNumber()
        const delay = Math.min(100, combatStatus.delay.number)
        combatStatus.remainDelay = [skill.delay[skillLevel - 1]]
            .map(value => value - value * delay / 100)
        [0]

        // Sec per hit
        combatStatus.secph = 4 - (cal.finalAttributeList.get(AttributeTypeEnum.Aspd)?.number ?? 150) / 50

        // Skill parameter
        console.log("useEffect finalDmg 3")
        const type = skill.type
        const isSkillRange = skill.isRange
        combatStatus.skillHit = skill.hit[skillLevel - 1]
        combatStatus.skillN = skill.n ? skill.n[skillLevel - 1] : 1
        combatStatus.type = type
        combatStatus.isSkillRange = isSkillRange ?? false

        // Hit
        if (type === AttributeTypeEnum.Atk) {
            combatStatus.hit = cal.finalAttributeList.get(AttributeTypeEnum.Hit) ?? new DescriptionNumber(175, "175(base)")
            combatStatus.hitRatio = Math.max(0, Math.min(100, 100 + combatStatus.hit.number - monster.hit))
            combatStatus.ph = cal.finalAttributeList.get(AttributeTypeEnum.PerfectHit) ?? new DescriptionNumber()
            console.log("hit", combatStatus.ph)
            combatStatus.finalHitRaio = (combatStatus.ph.number + (100 - combatStatus.ph.number) * combatStatus.hitRatio / 100)
        } else {
            combatStatus.hit = new DescriptionNumber()
            combatStatus.hitRatio = 100
            combatStatus.ph = new DescriptionNumber()
            combatStatus.finalHitRaio = 100
        }

        combatStatus.rWeaponAtk = cal.rWeaponAtk
        combatStatus.rWeaponMatk = cal.rWeaponMatk
        combatStatus.rRefineAtk = cal.rRefineAtk
        combatStatus.rRefineMatk = cal.rRefineMatk
        combatStatus.rVarianceAtk = cal.rVarianceAtk
        combatStatus.rVarianceMatk = cal.rVarianceMatk
        combatStatus.rOverRefine = cal.rOverRefine
        combatStatus.rHighRefine = cal.rHighRefine

        combatStatus.lWeaponAtk = cal.lWeaponAtk
        combatStatus.lWeaponMatk = cal.lWeaponMatk
        combatStatus.lRefineAtk = cal.lRefineAtk
        combatStatus.lRefineMatk = cal.lRefineMatk
        combatStatus.lVarianceAtk = cal.lVarianceAtk
        combatStatus.lVarianceMatk = cal.lVarianceMatk
        combatStatus.lOverRefine = cal.lOverRefine
        combatStatus.lHighRefine = cal.lHighRefine

        const weapontk = this.getWeapontk(type, cal)
        const rWeapontk = weapontk[0]

        // equipmenttk
        combatStatus.equipmenttk = CombatStatus.getEqiupmenttk(type, cal)
        const equipmenttk = combatStatus.equipmenttk.number

        // useDeftk
        if (combatStatus.isThanatos) {
            combatStatus.useDeftk = defAtk(monster.hardDef)
        } else {
            combatStatus.useDeftk = 0
        }
        const useDeftk = combatStatus.useDeftk

        const consumabletk: number = 0 // already in equipmenttk
        const bufftk: number = 0 // already in equipmenttk

        // edp
        if (combatStatus.isEdp) {
            combatStatus.edpM = 4
        } else {
            combatStatus.edpM = 1
        }
        const edpM: number = combatStatus.edpM

        // pseudoElement
        const pseudoElementMulAP = 0 // Magnum Break(Fire20) || EDP(Posion25)
        const pseudoElementtk = pseudoElementAtk(rWeapontk, pseudoElementMulAP)
        combatStatus.pseudoElementtk = pseudoElementtk

        // serc
        combatStatus.sizeAddMulAP = CombatStatus.getSizeAddMulAP(type, cal, monster)
        combatStatus.elementAddMulAP = CombatStatus.getElementAddMulAP(type, cal, monster)
        combatStatus.raceAddMulAP = CombatStatus.getRaceAddMulAP(type, cal, monster)
        combatStatus.classAddMulAP = CombatStatus.getClassAddMulAP(type, cal, monster)
        const sizeAddMulAP = combatStatus.sizeAddMulAP.number
        const elementAddMulAP = combatStatus.elementAddMulAP.number
        const raceAddMulAP = combatStatus.raceAddMulAP.number
        const classAddMulAP = combatStatus.classAddMulAP.number

        const elementMulP: number = 100
        combatStatus.elementMulP = elementMulP

        const statustk = CombatStatus.getStatustk(type, cal)
        combatStatus.statustk = statustk
        const masterytk: number = 0 // already in equipmenttk
        const elementSkillMulP: number = 100
        combatStatus.elementSkillMulP = elementSkillMulP
        const elementMildWindMulP: number = 100
        combatStatus.elementMildWindMulP = elementMildWindMulP

        // mysticalAmp
        if (combatStatus.isMysticalAmp) {
            combatStatus.mysticalAmpM = 1.5
        } else {
            combatStatus.mysticalAmpM = 1
        }
        const mysticalAmpM: number = combatStatus.mysticalAmpM

        combatStatus.tkAP = CombatStatus.getEqiupmenttkPercent(type, cal)
        const tkAP = combatStatus.tkAP.number
        const mulAP = CombatStatus.getMultiple(type, cal)
        combatStatus.mulAP = mulAP

        // skill percent
        combatStatus.skillP = cal.baseSkillAttributeList.get(skill.enum) ?? new DescriptionNumber()
        combatStatus.finalSkillP = skill.percent[skillLevel - 1] * (1 + (combatStatus.skillP.number) / 100)
        const skillP = combatStatus.finalSkillP

        // power thrust
        if (combatStatus.isPowerThrust) {
            combatStatus.powerThrustAP = 25
        } else {
            combatStatus.powerThrustAP = 0
        }
        const powerThrustAP = combatStatus.powerThrustAP

        // skill mul
        combatStatus.skillMulAP = cal.skillAttributeList.get(skill.enum) ?? new DescriptionNumber()
        const skillMulAP = combatStatus.skillMulAP.number

        // elementDmgMulAP
        if (skill.element) {
            combatStatus.elementDmgMulAP = cal.finalAttributeList.get(skill.element[skillLevel - 1]) ?? new DescriptionNumber()
        } else {
            if (type === AttributeTypeEnum.Matk) {
                combatStatus.elementDmgMulAP = cal.finalAttributeList.get(AttributeTypeEnum.MagicSkillNeutral) ?? new DescriptionNumber()
            } else {
                combatStatus.elementDmgMulAP = new DescriptionNumber()
            }
        }
        const elementDmgMulAP = combatStatus.elementDmgMulAP.number

        // IgnoreDef
        combatStatus.ignoreDef = new DescriptionNumber()
        combatStatus.ignoreDef.plusNumber(cal.finalAttributeList.get(AttributeTypeEnum.IgnoreDefAllRace) ?? new DescriptionNumber())
        if (monster.isBoss) {
            combatStatus.ignoreDef.plusNumber(cal.finalAttributeList.get(AttributeTypeEnum.IgnoreDefBoss) ?? new DescriptionNumber())
        } else {
            combatStatus.ignoreDef.plusNumber(cal.finalAttributeList.get(AttributeTypeEnum.IgnoreDefNormal) ?? new DescriptionNumber())
        }
        combatStatus.ignoreDef.plusNumber(cal.finalAttributeList.get(monster.race.ignoreDefAttributeType) ?? new DescriptionNumber())

        // IgnoreMdef
        combatStatus.ignoreMdef = new DescriptionNumber()
        combatStatus.ignoreMdef.plusNumber(cal.finalAttributeList.get(AttributeTypeEnum.IgnoreMdefAllRace) ?? new DescriptionNumber())
        if (monster.isBoss) {
            combatStatus.ignoreMdef.plusNumber(cal.finalAttributeList.get(AttributeTypeEnum.IgnoreMdefBoss) ?? new DescriptionNumber())
        } else {
            combatStatus.ignoreMdef.plusNumber(cal.finalAttributeList.get(AttributeTypeEnum.IgnoreMdefNormal) ?? new DescriptionNumber())
        }
        combatStatus.ignoreMdef.plusNumber(cal.finalAttributeList.get(monster.race.ignoreMdefAttributeType) ?? new DescriptionNumber())

        combatStatus.ignoreP = CombatStatus.getIgnoreed(type, combatStatus)
        const ignoreP: number = Math.min(100, combatStatus.ignoreP.number)
        if (type === AttributeTypeEnum.Atk) {
            combatStatus.monhardef = monster.hardDef
        } else {
            combatStatus.monhardef = monster.hardMdef
        }
        combatStatus.remainHardef = combatStatus.monhardef * (1 - ignoreP / 100)
        const hardDef = combatStatus.remainHardef
        const hardefRM = CombatStatus.getHardefRM(type, hardDef)
        combatStatus.hardefRM = hardefRM
        const softef = CombatStatus.getSoftef(type, monster)
        combatStatus.hardefRM = softef

        // range mul
        if (combatStatus.isSkillRange) {
            combatStatus.rangeMulAP = cal.rawAttributeList.get(AttributeTypeEnum.RangeMul) ?? new DescriptionNumber()
        } else {
            combatStatus.rangeMulAP = new DescriptionNumber()
        }
        const rangeMulAP = combatStatus.rangeMulAP.number

        // crit
        if (combatStatus.isCrit) {
            combatStatus.critDmgAP = cal.rawAttributeList.get(AttributeTypeEnum.CritDmg) ?? new DescriptionNumber()
            combatStatus.finalCritDmg = finalCritDmg(combatStatus.critDmgAP.number)
        } else {
            combatStatus.critDmgAP = new DescriptionNumber()
            combatStatus.finalCritDmg = 1
        }
        const finalCritDmgM = combatStatus.finalCritDmg

        // dark claw
        if (!combatStatus.isSkillRange) {
            combatStatus.darkClawM = cal.rawAttributeList.get(AttributeTypeEnum.DarkClaw)?.number ?? 1
        } else {
            combatStatus.darkClawM = 1
        }
        const darkClawM = combatStatus.darkClawM

        // const variancetk = CombatStatus.getVariance(type, cal)
        // const refinetk = CombatStatus.getRefinetk(type, cal)
        // const overRefine = [cal.rOverRefine, cal.lOverRefine]
        // const highRefine = [cal.rHighRefine, cal.lHighRefine]

        // const rVariancetk = variancetk[0]
        // const rRefinetk = refinetk[0]
        // const rOverRefine = overRefine[0]
        // const rHighRefine = highRefine[0]

        // const lWeapontk = weapontk[1]
        // const lVariancetk = variancetk[1]
        // const lRefinetk = refinetk[1]
        // const lOverRefine = overRefine[1]
        // const lHighRefine = highRefine[1]

        // const statusBonusV = cal.statusBonus
        combatStatus.sizePenaltyP = CombatStatus.getSizePenalty(cal.sizePenalty, monster)
        const sizePenaltyP: number = combatStatus.sizePenaltyP
        // const dmg = CombatStatus.getTrueMinMaxWeapontk(type, cal.isWeaponRange, rWeapontk, rVariancetk, rRefinetk, rOverRefine, rHighRefine, lWeapontk, lVariancetk, lRefinetk, lOverRefine, lHighRefine, statusBonusV)
        combatStatus.finalWeapontk = CombatStatus.getFinalWeapontkCal(type, cal)
        combatStatus.finaltk = []
        const dmg = [combatStatus.finalWeapontk.min ?? 0, combatStatus.finalWeapontk.max ?? 0]
            .map(finalWeapontk => {
                const finaltk = CombatStatus.getFinaltk(type, finalWeapontk, sizePenaltyP, equipmenttk, useDeftk, consumabletk, bufftk, edpM, pseudoElementtk, sizeAddMulAP, elementAddMulAP, raceAddMulAP, classAddMulAP, elementMulP, tkAP, statustk, masterytk, elementSkillMulP, elementMildWindMulP, mysticalAmpM)
                combatStatus.finaltk.push(finaltk)
                return finaltk
            })
            .map(finaltk => CombatStatus.getFinalDmg(type, finaltk, tkAP, mulAP.number, skillP, powerThrustAP, skillMulAP, elementDmgMulAP, hardefRM, softef, rangeMulAP, finalCritDmgM, darkClawM, elementMulP));
        console.log("finalDmg", dmg)
        combatStatus.minDmgph = Math.floor(dmg[0] / combatStatus.skillHit)
        combatStatus.maxDmgph = Math.floor(dmg[1] / combatStatus.skillHit)
        combatStatus.avgDmgph = Math.floor((combatStatus.minDmgph + combatStatus.maxDmgph) / 2)
        combatStatus.minDmg = combatStatus.minDmgph * combatStatus.skillHit
        combatStatus.maxDmg = combatStatus.maxDmgph * combatStatus.skillHit
        combatStatus.avgDmg = combatStatus.avgDmgph * combatStatus.skillHit

        // vct + fct -> motion(secph) & cooldown & delay
        combatStatus.final = [combatStatus.avgDmg]
            .map(value => value * combatStatus.skillN)
            .map(value => value * combatStatus.finalHitRaio / 100)
            .map(value => value / (combatStatus.remainVct + combatStatus.remainFct + Math.max(combatStatus.remainCooldown, combatStatus.remainDelay, combatStatus.secph)))
        [0]
        combatStatus.finalph = [combatStatus.avgDmgph]
            .map(value => value * combatStatus.skillN)
            .map(value => value * combatStatus.finalHitRaio / 100)
            .map(value => value / (combatStatus.remainVct + combatStatus.remainFct + Math.max(combatStatus.remainCooldown, combatStatus.remainDelay, combatStatus.secph)))
        [0]

        combatStatus.killedSec = monster.hp / combatStatus.finalph
        return dmg
    }
}