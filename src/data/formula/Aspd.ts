export function calAspd(baseAspd: number, finalAgi: number, finalDex: number, bonusPercent: number, bonusFlat: number, weaponPenalty: number, shieldPenalty: number) {
    return baseAspd
        + Math.floor(
            Math.sqrt((Math.pow(finalAgi, 2) / 2) + (Math.pow(finalDex, 2) / 5)) / 4
            + (bonusPercent * finalAgi / 200)
            + bonusFlat
            + weaponPenalty
            + shieldPenalty
        )
}