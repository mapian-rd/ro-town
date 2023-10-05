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
        return cal.rawAttributeList.get(attributeType)?.number ?? 0
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
        return cal.rawAttributeList.get(attributeType)?.number ?? 0
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
        return cal.rawAttributeList.get(attributeType)?.number ?? 0
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
        return cal.rawAttributeList.get(attributeType)?.number ?? 0
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

    static getHardefRM(type: AttributeTypeEnum, monster: Monster): number {
        if (type === AttributeTypeEnum.Atk) {
            return hardDefR(monster.hardDef)
        } else {
            return hardMdefR(monster.hardMdef)
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

    // static finalDmg(combatStatus: CombatStatus, cal: CalculatedAttribute, monster: Monster, skill: ActiveSkill, skillLevel: number = 1): number[] {
    //     console.log("useEffect finalDmg 4")
    //     const type = skill.type
    //     combatStatus.hit = skill.hit[skillLevel - 1]
    //     console.log(`cal2 ${cal.statusAtk} type ${type}`)
    //     const varinace = CombatStatus.getVariance(type, cal)
    //     const statustk = CombatStatus.getStatustk(type, cal)
    //     const refineBonus = CombatStatus.getRefineBous(type, cal)
    //     const min = minMATK(statustk, varinace)
    //     const max = maxMATK(statustk, varinace, refineBonus)
    //     const range = [min, max]
    //     console.log(`useEffect finalDmg 5 statustk: ${statustk} varinace: ${varinace} min: ${min}`)
    //     const equipAtk = CombatStatus.getEqiupmenttk(type, cal)
    //     console.log(`useEffect finalDmg 6 equipAtk: ${equipAtk}`)
    //     const dmg = range.map(value => finalMATK(value, 1, equipAtk))
    //         .map(final => {
    //             console.log(`final: ${final}`)
    //             return Math.floor(
    //                 skillMagicDmg(
    //                     final,
    //                     skill.percent[skillLevel - 1] / combatStatus.hit,
    //                     combatStatus.skillMod,
    //                     combatStatus.multiple)
    //             ) * combatStatus.hit
    //         })
    //         .map(skilldmg => {
    //             console.log(`skilldmg: ${skilldmg}`)
    //             return CombatStatus.getFinalDmg(type, skilldmg, monster)
    //         })
    //     console.log("useEffect finalDmg 3", dmg)
    //     combatStatus.minDmg = dmg[0]
    //     combatStatus.maxDmg = dmg[1]
    //     combatStatus.minDmgph = combatStatus.minDmg / combatStatus.hit
    //     combatStatus.maxDmgph = combatStatus.maxDmg / combatStatus.hit
    //     return dmg
    // }

    static finalDmg(
        combatStatus: CombatStatus,
        cal: CalculatedAttribute,
        monster: Monster,
        skill: ActiveSkill,
        skillLevel: number = 1
    ): number[] {
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
        const skillP = skill.percent[skillLevel - 1]
        const powerThrustAP: number = 0 // 25
        const skillMulAP: number = cal.finalAttributeList.get(AttributeTypeEnum.SkillDmg)?.number ?? 0
        const elementDmgMulAP: number = 0
        const hardefRM = CombatStatus.getHardefRM(type, monster)
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
        return dmg
    }
}