export function calAspd(baseAspd: number, finalAgi: number, finalDex: number, bonusPercent: number, bonusFlat: number, weaponPenalty: number, shieldPenalty: number, haste: number = 0) {
    console.log("calAspd", bonusPercent, weaponPenalty, Math.round(weaponPenalty - weaponPenalty * bonusPercent / 100))
    return [0]
        .map(value => value + Math.sqrt((Math.pow(finalAgi, 2) / 2) + (Math.pow(finalDex, 2) / 5)) / 4)
        .map(value => value + (haste * finalAgi / 195))
        .map(value => value + baseAspd)
        .map(value => value + ((195 - value) * bonusPercent / 100))
        .map(value => value + Math.round(weaponPenalty - weaponPenalty * bonusPercent / 100))
        .map(value => value + Math.round(shieldPenalty - shieldPenalty * bonusPercent / 100))
        .map(value => value + bonusFlat)
        .map(value => Math.floor(value))
    [0]
}