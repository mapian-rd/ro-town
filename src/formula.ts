export function statusBonus(weaponATK: number, isRange: boolean, baseStr: number, baseDex: number): number {
    let mainStatus = baseStr
    if (isRange) {
        mainStatus = baseDex
    }
    console.log("statusBonus", weaponATK, mainStatus)
    return weaponATK * mainStatus / 200
}

export function refineTK(refineLevel: number, weaponLevel: number): number {
    let ATK = 0
    switch (weaponLevel) {
        case 1:
            ATK = 2
            break;
        case 2:
            ATK = 3
            break;
        case 3:
            ATK = 5
            break
        case 4:
            ATK = 7
            break
        default:
            break;
    }
    return refineLevel * ATK
}

export function varianceATK(weaponATK: number, weaponLevel: number): number {
    return weaponATK * weaponLevel * 5 / 100
}

export function varianceMATK(weaponMATK: number, refineMATK: number, weaponLevel: number): number {
    return (weaponMATK + refineMATK) * weaponLevel * 10 / 100
}

export function getMinMaxVarianceTK(varianceTK: number): number[] {
    return [-varianceTK, varianceTK]
}

export function overRefineWeapon(weaponLevel: number, refineLevel: number): number {
    let refineSafe = 0
    switch (weaponLevel) {
        case 1:
            refineSafe = 7
            break;
        case 2:
            refineSafe = 6
            break;
        case 3:
            refineSafe = 5
            break
        case 4:
            refineSafe = 4
            break
        default:
            break;
    }
    let exceedRefine = refineLevel - refineSafe
    if (exceedRefine <= 0) {
        return 0
    }
    let exceedATK = 0
    switch (weaponLevel) {
        case 1:
            exceedATK = 3
            break;
        case 2:
            exceedATK = 5
            break;
        case 3:
            exceedATK = 8
            break
        case 4:
            exceedATK = 14
            break
        default:
            break;
    }
    return exceedATK * exceedRefine
}

export function overRefine(isRange: boolean, weaponLevel: number, refineLevel: number): number {
    if (isRange) {
        return 0
    }
    return overRefineWeapon(weaponLevel, refineLevel)
}

export function getMinMaxOverRefine(isRange: boolean, overRefine: number) {
    if (isRange) {
        return [0, 0]
    }
    return [Math.min(1, overRefine), overRefine]
}

export function highRefine(weaponLevel: number, refineLevel: number): number {
    return [16, 32, 32, 48][weaponLevel - 1] + [1, 2, 2, 3][weaponLevel - 1] * (Math.min(20, refineLevel) - 16)
}

export function finalWeaponAtk(weaponAtk: number, varianceAtk: number, refineAtk: number, overRefine: number, highRefine: number, statusBonus: number): number {
    return weaponAtk + varianceAtk + statusBonus + refineAtk + overRefine + highRefine
}

export function finalWeaponMatk(weaponMatk: number, varianceMatk: number, refineMatk: number, overRefine: number, highRefine: number): number {
    return weaponMatk + varianceMatk + refineMatk + overRefine + highRefine
}

export function trueWeaponMatk(leftFinalWeaponMatk: number, rightFinalWeaponMatk: number) {
    return leftFinalWeaponMatk + rightFinalWeaponMatk
}

// ---

export function defAtk(targetHardDef: number): number {
    return targetHardDef / 2
}

// ---

export function pseudoElementAtk(weaponAtk: number, pseudoElementMulAP: number = 0): number {
    return Math.floor(weaponAtk * pseudoElementMulAP / 100)
}

// ---

export function statusAtk(baseLv: number, isRange: boolean, finalStr: number, finalDex: number, finalLuk: number): number {
    let mainStatus = finalStr
    let subStatus = finalDex
    if (isRange) {
        mainStatus = finalDex
        subStatus = finalStr
    }
    return Math.floor(baseLv / 4 + mainStatus + subStatus / 5 + finalLuk / 3);
}

export function statusMATK(baseLv: number, finalInt: number, finalDex: number, finalLuk: number): number {
    return Math.floor(Math.floor(baseLv / 4) + finalInt + Math.floor(finalInt / 2) + Math.floor(finalDex / 5) + Math.floor(finalLuk / 3));
}

export function finalStatusAtk(statusAtk: number) {
    return statusAtk * 2
}

export function finalATK(
    finalWeaponAtk: number = 0,
    sizePenaltyP: number = 100,
    equipmentAtk: number = 0,
    useDefAtk: number = 0,
    consumableAtk: number = 0,
    buffAtk: number = 0,
    edpM: number = 1,
    pseudoElementAtk: number = 0,
    sizeAddMulAP: number = 0,
    elementAddMulAP: number = 0,
    raceAddMulAP: number = 0,
    classAddMulAP: number = 0,
    elementMulP: number = 100,
    tkAP: number = 0,
    finalStatusAtk: number = 0,
    masteryAtk: number = 0,
    elementSkillMulP?: number,
    elementMildWindMulP?: number,
): number {
    console.log("finalDmg finalWeaponAtk", finalWeaponAtk)
    console.log("finalDmg sizePenaltyP", sizePenaltyP)
    console.log("finalDmg equipmentAtk", equipmentAtk)
    console.log("finalDmg useDefAtk", useDefAtk)
    console.log("finalDmg consumableAtk", consumableAtk)
    console.log("finalDmg buffAtk", buffAtk)
    console.log("finalDmg edpM", edpM)
    console.log("finalDmg pseudoElementAtk", pseudoElementAtk)
    console.log("finalDmg sizeAddMulAP", sizeAddMulAP)
    console.log("finalDmg elementAddMulAP", elementAddMulAP)
    console.log("finalDmg raceAddMulAP", raceAddMulAP)
    console.log("finalDmg classAddMulAP", classAddMulAP)
    console.log("finalDmg elementMulP", elementMulP)
    console.log("finalDmg finalStatusAtk", finalStatusAtk)
    console.log("finalDmg masteryAtk", masteryAtk)
    console.log("finalDmg elementSkillMulP", elementSkillMulP)
    console.log("finalDmg elementMildWindMulP", elementMildWindMulP)
    const atk = finalWeaponAtk * sizePenaltyP / 100 + equipmentAtk + useDefAtk + consumableAtk + buffAtk
    return [atk]
        .map(value => value * edpM)
        .map(value => value + pseudoElementAtk)
        .map(value => value + Math.floor(value * sizeAddMulAP / 100))
        .map(value => value + Math.floor(value * elementAddMulAP / 100))
        .map(value => value + Math.floor(value * raceAddMulAP / 100))
        .map(value => value + Math.floor(value * classAddMulAP / 100))
        .map(value => value + Math.floor(atk * (tkAP / 100)))
        .map(value => value * elementMulP / 100)
        .map(value => value + finalStatusAtk * (elementSkillMulP ?? (elementMildWindMulP ?? 100) / 100))
        .map(value => value + masteryAtk * (elementSkillMulP ?? 100) / 100)
    [0]
}

export function finalMATK(
    statusMatk: number = 0,
    trueWeaponMatk: number = 0,
    mysticalAmpM: number = 1,
    equipmentMatk: number = 0,
    consumableMatk: number = 0,
    buffMatk: number = 0,
    matkAP: number = 0,
    sizeAddMulAP: number = 0,
    elementAddMulAP: number = 0,
    raceAddMulAP: number = 0,
    classAddMulAP: number = 0,
    masteryMatk: number = 0,
) {
    return [trueWeaponMatk]
        .map(value => value + statusMatk)
        .map(value => value * mysticalAmpM)
        .map(value => value + equipmentMatk + consumableMatk + buffMatk)
        .map(value => value + Math.floor(value * matkAP / 100))
        .map(value => value + Math.floor(value * sizeAddMulAP / 100))
        .map(value => value + Math.floor(value * elementAddMulAP / 100))
        .map(value => value + Math.floor(value * raceAddMulAP / 100))
        .map(value => value + Math.floor(value * classAddMulAP / 100))
        .map(value => value + masteryMatk)
    [0]
}

export function monsterSoftDef(monsterLevel: number, monsterVit: number) {
    return Math.floor((monsterLevel + monsterVit) / 2)
}

export function monsterSoftMdef(monsterLevel: number, monsterInt: number) {
    return Math.floor((monsterLevel + monsterInt) / 4)
}

export function hardDefR(finalTargetHardDef: number) {
    return (4000 + finalTargetHardDef) / (4000 + finalTargetHardDef * 10)
}

export function hardMdefR(finalTargetHardMdef: number) {
    return (1000 + finalTargetHardMdef) / (1000 + finalTargetHardMdef * 10)
}

export function finalCritDmg(critDmgAP: number) {
    return (1 + critDmgAP / 100) * 1.4
}

export function finalPhysicalDmg(
    finalAtk: number = 0,
    // atkAP: number = 0,
    mulAP: number = 0,
    skillP: number = 100,
    powerThrustAP: number = 0,
    skillMulAP: number = 0,
    elementDmgMulAP: number = 0,
    hardDefRM: number = 1,
    softDef: number = 0,
    rangeMulAP: number = 0,
    finalCritDmgM: number = 1,
    darkClawM: number = 1,
) {
    console.log("getFinalDmg finalAtk:", finalAtk)
    // console.log("getFinalDmg atkAP:", atkAP)
    console.log("getFinalDmg mulAP:", mulAP)
    console.log("getFinalDmg skillP:", skillP)
    console.log("getFinalDmg powerThrustAP:", powerThrustAP)
    console.log("getFinalDmg skillMulAP:", skillMulAP)
    console.log("getFinalDmg elementDmgMulAP:", elementDmgMulAP)
    console.log("getFinalDmg hardDefRM:", hardDefRM)
    console.log("getFinalDmg softDef:", softDef)
    console.log("getFinalDmg rangeMulAP:", rangeMulAP)
    console.log("getFinalDmg finalCritDmgM:", finalCritDmgM)
    console.log("getFinalDmg darkClawM:", darkClawM)
    return [finalAtk]
        .map(value => value + (value * mulAP / 100))
        .map(value => {
            const add = Math.floor(value * rangeMulAP / 100)
            console.log("getFinalDmg rangeMulAP add:", add)
            return value + add
        })
        .map(value => {
            const mul = skillP / 100 + powerThrustAP / 100
            console.log("getFinalDmg skillP", value, mul)
            return value * mul
        }) // check la no floor
        .map(value => value + (value * elementDmgMulAP / 100))
        .map(value => Math.floor(value * hardDefRM))
        .map(value => value - softDef)
        .map(value => value + (value * skillMulAP / 100))
        .map(value => Math.floor(value * finalCritDmgM))
        .map(value => Math.floor(value * darkClawM))
    [0]
}

export function finalMagicDmg(
    // skillHit: number = 1,
    finalMatk: number = 0,
    // matkAP: number = 0,
    mulAP: number = 0,
    skillP: number = 100,
    skillMulAP: number = 0,
    elementDmgMulAP: number = 0,
    hardMdefRM: number = 1,
    softMdef: number = 0,
    elementMulP: number = 100,
) {
    return [finalMatk]
        // .map(value => value + Math.floor(value * matkAP / 100))
        .map(value => value + (value * mulAP / 100))
        .map(value => value * skillP / 100)
        .map(value => value + (value * skillMulAP / 100))
        .map(value => value + (value * elementDmgMulAP / 100))
        // .map(value => value * skillHit)
        .map(value => Math.floor(value * hardMdefRM))
        .map(value => value - softMdef)
        .map(value => value * elementMulP / 100)
    [0]
}