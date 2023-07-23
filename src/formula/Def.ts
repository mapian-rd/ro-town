export function calSoftDef(finalVit: number, finalAgi: number, baseLv: number, bonus: number, bonusPercent: number): number {
    return (Math.floor((finalVit / 2) + (finalAgi / 5) + (baseLv / 2)) + bonus) * (1 + bonusPercent / 100);
}

export function calSoftMdef(finalInt: number, finalVit: number, finalDex: number, baseLv: number, bonus: number, bonusPercent: number): number {
    return (Math.floor(finalInt + (finalVit / 5) + (finalDex / 5) + (baseLv / 4)) + bonus) * (1 + bonusPercent / 100);
}