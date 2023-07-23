const baseHit = 175

export function calHit(BaseLv: number, finalDex: number, finalLuk: number, BonusHit: number) {
    return baseHit + BaseLv + finalDex + Math.floor(finalLuk / 3) + BonusHit
}