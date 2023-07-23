export function calCrit(finalLuk: number, bonus: number): number {
    return Math.floor(finalLuk * 0.3 + bonus);
}

export function calCritDmg(maxDmg: number, critModPerc: number = 100): number {
    return Math.floor(maxDmg * 1.4 * critModPerc / 100)
}