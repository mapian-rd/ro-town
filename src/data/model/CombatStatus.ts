import { rWeapon } from "../../Constraints"
import { finalATK, finalMagicDmg, finalMATK, finalPhysicalDmg, finalWeaponAtk, finalWeaponMatk, getMinMaxVarianceTK, pseudoElementAtk, trueWeaponMatk, defAtk, hardDefR, hardMdefR, monsterSoftDef, monsterSoftMdef, finalCritDmg, statusBonus, getMinMaxOverRefine } from "../../formula"
import { AttributeType, AttributeTypeEnum } from "./attributeType"
import { CalculatedAttribute } from "./CalculatedAttribute"
import { Character } from "./Characterv2"
import { DescriptionNumber } from "./Formula"
import { WeaponType } from "./itemType"
import { Monster } from "./monster"
import { ActiveSkill, Skill } from "./skill"

export class CombatStatus {
    skillMod: number = 100
    multiple: number = 100

    minDmg: number = 0
    maxDmg: number = 0
    hit: number = 1
    minDmgph: number = 0
    maxDmgph: number = 0

    vct: number = 0
    fct: number = 0
    cooldown: number = 0
    delay: number = 0

    secph: number = 1
    hitRatio: number = 100

    final: number = 0
    finalph: number = 0

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
    ): number {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.size.physicalAttributeType
        } else {
            attributeType = monster.size.magicAttributeType
        }
        return cal.finalAttributeList.get(attributeType)?.number ?? 0
    }

    static getElementAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): number {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.attribute.physicalAttributeType
        } else {
            attributeType = monster.attribute.magicAttributeType
        }
        return cal.finalAttributeList.get(attributeType)?.number ?? 0
    }

    static getRaceAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): number {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.race.physicalAttributeType
        } else {
            attributeType = monster.race.magicAttributeType
        }
        console.log("finalDmg", attributeType)
        return cal.finalAttributeList.get(attributeType)?.number ?? 0
    }

    static getClassAddMulAP(
        type: AttributeTypeEnum,
        cal: CalculatedAttribute,
        monster: Monster
    ): number {
        let attributeType: AttributeTypeEnum
        if (type === AttributeTypeEnum.Atk) {
            attributeType = monster.isBoss ? AttributeTypeEnum.PhysicalBoss : AttributeTypeEnum.PhysicalMon
        } else {
            attributeType = monster.isBoss ? AttributeTypeEnum.PhysicalBoss : AttributeTypeEnum.PhysicalMon
        }
        return cal.finalAttributeList.get(attributeType)?.number ?? 0
    }

    static getStatustk(type: AttributeTypeEnum, cal: CalculatedAttribute): number {
        if (type === AttributeTypeEnum.Atk) {
            console.log(`cal ${cal.statusAtk} type ${type}`)
            return cal.statusAtk * 2
        } else {
            return cal.statusMatk
        }
    }

    static getEqiupmenttk(type: AttributeTypeEnum, cal: CalculatedAttribute): number {
        if (type === AttributeTypeEnum.Atk) {
            return cal.rawAttributeList.get(AttributeTypeEnum.Atk)?.number ?? 0
        } else {
            return cal.rawAttributeList.get(AttributeTypeEnum.Matk)?.number ?? 0
        }
    }

    static getEqiupmenttkPercent(type: AttributeTypeEnum, cal: CalculatedAttribute): number {
        if (type === AttributeTypeEnum.Atk) {
            return cal.rawAttributeList.get(AttributeTypeEnum.AtkPercent)?.number ?? 0
        } else {
            return cal.rawAttributeList.get(AttributeTypeEnum.MatkPercent)?.number ?? 0
        }
    }

    static getMultiple(type: AttributeTypeEnum, cal: CalculatedAttribute): number {
        return 0
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
        const vct = Math.min(100, cal.rawAttributeList.get(AttributeTypeEnum.VctPercent)?.number ?? 0)
        const skillVct = Math.min(100, cal.skillAttributeList.get(skill.enum)?.number ?? 0)
        combatStatus.vct = [skill.vct[skillLevel - 1]]
            .map(value => value - value * vct / 100)
            .map(value => value - value * skillVct / 100)
        [0]

        // Fct
        const fct = cal.rawAttributeList.get(AttributeTypeEnum.Fct)?.number ?? 0
        const fctP = Math.min(100, cal.rawAttributeList.get(AttributeTypeEnum.FctPercent)?.number ?? 0)
        console.log("finalDmg fct", fct, fctP)
        combatStatus.fct = [skill.fct[skillLevel - 1]]
            .map(value => Math.max(0, value - fct))
            .map(value => value - value * fctP / 100)
        [0]

        const skillCooldown = Math.min(100, cal.cooldownAttributeList.get(skill.enum)?.number ?? 0)
        combatStatus.cooldown = [skill.cooldown[skillLevel - 1]]
            .map(value => value - skillCooldown)
        [0]

        const delay = Math.min(100, cal.rawAttributeList.get(AttributeTypeEnum.Delay)?.number ?? 0)
        combatStatus.delay = [skill.delay[skillLevel - 1]]
            .map(value => value - value * delay / 100)
        [0]

        combatStatus.secph = 4 - (cal.finalAttributeList.get(AttributeTypeEnum.Aspd)?.number ?? 150) / 50

        combatStatus.hitRatio = Math.max(0, Math.min(100, 100 + (cal.finalAttributeList.get(AttributeTypeEnum.Hit)?.number ?? 175) - monster.hit))

        console.log("useEffect finalDmg 3")
        const type = skill.type
        const isSkillRange = skill.isRange
        combatStatus.hit = skill.hit[skillLevel - 1]

        const weapontk = this.getWeapontk(type, cal)
        const rWeapontk = weapontk[0]
        const pseudoElementMulAP = 0 // Magnum Break(Fire20) || EDP(Posion25)

        const equipmenttk = CombatStatus.getEqiupmenttk(type, cal)
        // const useDeftk = defAtk(monster.hardDef)
        const useDeftk = 0
        const consumabletk: number = 0 // already in equipmenttk
        const bufftk: number = 0 // already in equipmenttk
        const edpM: number = 1 // 4
        const pseudoElementtk = pseudoElementAtk(rWeapontk, pseudoElementMulAP)
        const sizeAddMulAP = CombatStatus.getSizeAddMulAP(type, cal, monster)
        const elementAddMulAP = CombatStatus.getElementAddMulAP(type, cal, monster)
        const raceAddMulAP = CombatStatus.getRaceAddMulAP(type, cal, monster)
        console.log("finalDmg", raceAddMulAP)
        const classAddMulAP = CombatStatus.getClassAddMulAP(type, cal, monster)
        const elementMulP: number = 100
        const statustk = CombatStatus.getStatustk(type, cal)
        const masterytk: number = 0 // already in equipmenttk
        const elementSkillMulP: number | undefined = undefined
        const elementMildWindMulP: number | undefined = undefined
        const mysticalAmpM: number = 1 // 1.5

        const tkAP = CombatStatus.getEqiupmenttkPercent(type, cal)
        const mulAP = CombatStatus.getMultiple(type, cal)
        const skillP = skill.percent[skillLevel - 1] * (1 + (cal.baseSkillAttributeList.get(skill.enum)?.number ?? 0) / 100)
        const powerThrustAP: number = 0 // 25
        const skillMulAP: number = cal.skillAttributeList.get(skill.enum)?.number ?? 0
        const elementDmgMulAP: number = 0
        const ignoreP: number = 0
        const hardDef = monster.hardDef * (1 - ignoreP / 100)
        const hardefRM = CombatStatus.getHardefRM(type, hardDef)
        const softef = CombatStatus.getSoftef(type, monster)
        let rangeMulAP = 0
        if (isSkillRange) {
            rangeMulAP = cal.rawAttributeList.get(AttributeTypeEnum.RangeMul)?.number ?? 0
        }
        console.log("rangeMulAP", isSkillRange, rangeMulAP)
        // const finalCritDmgM = finalCritDmg(cal.rawAttributeList.get(AttributeTypeEnum.CritDmg)?.number ?? 0)
        const finalCritDmgM = 1
        const darkClawM: number = 1 // 1.3, 1.6, 1.9, 2.2, 2.5

        const variancetk = CombatStatus.getVariance(type, cal)
        const refinetk = CombatStatus.getRefinetk(type, cal)
        const overRefine = [cal.rOverRefine, cal.lOverRefine]
        const highRefine = [cal.rHighRefine, cal.lHighRefine]

        const rVariancetk = variancetk[0]
        const rRefinetk = refinetk[0]
        const rOverRefine = overRefine[0]
        const rHighRefine = highRefine[0]

        const lWeapontk = weapontk[1]
        const lVariancetk = variancetk[1]
        const lRefinetk = refinetk[1]
        const lOverRefine = overRefine[1]
        const lHighRefine = highRefine[1]

        const statusBonusV = cal.statusBonus
        const sizePenaltyP: number = 100
        const dmg = CombatStatus.getTrueMinMaxWeapontk(type, cal.isWeaponRange, rWeapontk, rVariancetk, rRefinetk, rOverRefine, rHighRefine, lWeapontk, lVariancetk, lRefinetk, lOverRefine, lHighRefine, statusBonusV)
            .map(finalWeapontk => CombatStatus.getFinaltk(type, finalWeapontk, sizePenaltyP, equipmenttk, useDeftk, consumabletk, bufftk, edpM, pseudoElementtk, sizeAddMulAP, elementAddMulAP, raceAddMulAP, classAddMulAP, elementMulP, tkAP, statustk, masterytk, elementSkillMulP, elementMildWindMulP, mysticalAmpM))
            .map(finaltk => CombatStatus.getFinalDmg(type, finaltk, tkAP, mulAP, skillP, powerThrustAP, skillMulAP, elementDmgMulAP, hardefRM, softef, rangeMulAP, finalCritDmgM, darkClawM, elementMulP));
        console.log("finalDmg", dmg)
        combatStatus.minDmgph = Math.floor(dmg[0] / combatStatus.hit)
        combatStatus.maxDmgph = Math.floor(dmg[1] / combatStatus.hit)
        combatStatus.minDmg = combatStatus.minDmgph * combatStatus.hit
        combatStatus.maxDmg = combatStatus.maxDmgph * combatStatus.hit

        // vct + fct -> motion(secph) & cooldown & delay
        combatStatus.final = [(combatStatus.minDmg + combatStatus.maxDmg) / 2]
            .map(value => value * combatStatus.hitRatio / 100)
            .map(value => value / (combatStatus.vct + combatStatus.fct + Math.max(combatStatus.cooldown, combatStatus.delay, combatStatus.secph)))
        [0]
        combatStatus.finalph = [(combatStatus.minDmgph + combatStatus.maxDmgph) / 2]
            .map(value => value * combatStatus.hitRatio / 100)
            .map(value => value / (combatStatus.vct + combatStatus.fct + Math.max(combatStatus.cooldown, combatStatus.delay, combatStatus.secph)))
        [0]
        return dmg
    }
}