export function calHp(
    JOB_HP: number,
    VIT: number,
    TRANS_MOD: number,
    HP_MOD_A: number,
    HP_MOD_B: number
): number {
    let MAX_HP = JOB_HP;

    MAX_HP = Math.floor(MAX_HP * (1 + VIT * 0.01) * TRANS_MOD);

    MAX_HP += HP_MOD_A;

    MAX_HP = Math.floor(MAX_HP * (1 + HP_MOD_B * 0.01));
    return MAX_HP;
}

export function caljobHp(
    BASE_LEVEL: number,
    BASE_HP: number,
    HP_JOB_A: number,
    HP_JOB_B: number,
): number {
    BASE_HP += BASE_LEVEL * HP_JOB_B;

    if(BASE_LEVEL >= 2) {
        BASE_HP += 20   
    }

    for (let i = 2; i <= BASE_LEVEL; i++) {
        BASE_HP += Math.round(HP_JOB_A * i);
    }
    return BASE_HP;
}