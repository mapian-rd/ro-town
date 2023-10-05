export function calSp(
    JOB_SP: number,
    INT: number,
    TRANS_MOD: number,
    SP_MOD_A: number,
    SP_MOD_B: number
): number {
    let MAX_SP = JOB_SP;
    MAX_SP = Math.floor(JOB_SP * (1 + INT * 0.01));

    MAX_SP = Math.floor(MAX_SP * TRANS_MOD);

    MAX_SP += SP_MOD_A;

    MAX_SP = Math.floor(MAX_SP * (1 + SP_MOD_B * 0.01));
    return MAX_SP;
}

export function caljobSp(
    BASE_LEVEL: number,
    BASE_SP: number,
    SP_JOB: number,
): number {
    BASE_SP += BASE_LEVEL * SP_JOB;
    return BASE_SP;
}