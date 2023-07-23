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
    return Math.floor(baseLv / 4 + finalInt + finalInt / 2 + finalDex / 5 + finalLuk / 3);
}

export function varianceMATK(weaponMATK: number, refineMATK: number, weaponLevel: number): number {
    return (weaponMATK + refineMATK) * weaponLevel / 10
}

function refineWeapon(refineLevel: number, weaponLevel: number): number {
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

export function refineATK(refineLevel: number, weaponLevel: number): number {
    return refineWeapon(refineLevel, weaponLevel)
}

export function refineMATK(refineLevel: number, weaponLevel: number, isRange: boolean): number {
    if (isRange) {
        return 0
    }
    return refineWeapon(refineLevel, weaponLevel)
}

function refineBonusWeapon(weaponLevel: number, refineLevel: number): number {
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

export function refineBonusATK(isRange: boolean, weaponLevel: number, refineLevel: number) {
    if (isRange) {
        return 0
    }
    return refineBonusWeapon(weaponLevel, refineLevel)
}

export function refineBonusMATK(isRange: boolean, weaponLevel: number, refineLevel: number) {
    if (isRange) {
        return 0
    }
    return refineBonusWeapon(weaponLevel, refineLevel)
}

// function minMATK(baseLv: number, finalInt: number, finalDex: number, finalLuk: number, weaponMATK: number, weaponLevel: number, refineLevel: number, isRange: boolean) {
//     let status = statusMATK(baseLv, finalInt, finalDex, finalLuk)
//     let refine = refineMATK(refineLevel, weaponLevel, isRange)
//     let variance = varianceMATK(weaponMATK, refine, weaponLevel)
//     return status - variance + 1
// }

// function maxMATK(baseLv: number, finalInt: number, finalDex: number, finalLuk: number, weaponMATK: number, weaponLevel: number, refineLevel: number, isRange: boolean) {
//     let status = statusMATK(baseLv, finalInt, finalDex, finalLuk)
//     let refine = refineMATK(refineLevel, weaponLevel, isRange)
//     let refineBonus = refineBonusMATK(isRange, weaponLevel, refineLevel)
//     let variance = varianceMATK(weaponMATK, refine, weaponLevel)
//     return status + variance + refineBonus
// }

export function minMATK(statusMATK: number, varianceMATK: number) {
    return statusMATK - varianceMATK + 1
}

export function maxMATK(statusMATK: number, varianceMATK: number, refineBonusMATK: number) {
    return statusMATK + varianceMATK + refineBonusMATK
}

export function finalMATK(
    matk: number,
    mysticalAmplification: number = 1,
    equipMatk: number = 0,
    matkPercentBonus: number = 0,
    raceBonus: number = 0,
    sizeBonus: number = 0,
    monsterTypeBonus: number = 0,
    monsterElementBonus: number = 0
) {
    return (matk * mysticalAmplification + equipMatk) * (1 + matkPercentBonus / 100) * (1 + raceBonus / 100) * (1 + sizeBonus / 100) * (1 + monsterTypeBonus / 100) * (1 + monsterElementBonus / 100)
}

export function skillMagicDmg(finalMATK: number, skillPercent: number = 100, skillMultiple: number = 100, dmgMultiple: number = 100) {
    return finalMATK * skillPercent / 100 * skillMultiple / 100 * dmgMultiple / 100
}

export function monsterSoftMdef(monsterLevel: number, monsterInt: number) {
    return (monsterLevel + monsterInt) / 4
}

export function finalMagicDmg(skillDmg: number, reductionPercent: number = 100, softMdef: number = 0, hardMdef: number = 0, mdefPenetrationPercent: number = 0) {
    let penetrationMdef = hardMdef * mdefPenetrationPercent / 100
    let finalMdef = hardMdef - penetrationMdef
    return skillDmg * reductionPercent / 100 * (1000 + finalMdef) / (1000 + finalMdef * 10) - softMdef
}