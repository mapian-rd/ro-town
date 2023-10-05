const baseFlee = 100

export function calFlee(BaseLv: number, finalAgi: number, finalLuk: number, Bonus: number): number {
    return baseFlee + BaseLv + finalAgi + Math.floor(finalLuk / 5) + Bonus
}