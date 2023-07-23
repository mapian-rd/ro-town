import { Status } from "../model/status";

export function calUsingStatusPoint(point: number) { // statToPoints
    let totalPoint = 0;
    for (let i = 2; i <= point; i++) {
        if (i <= 100) {
            totalPoint += Math.floor((i - 2) / 10) + 2;
        } else {
            totalPoint += Math.floor((i - 101) / 5) * 4 + 16;
        }
    }
    return totalPoint;
}

export function calRemainStatusPoint(baseLv: number, str: number, agi: number, vit: number, int: number, dex: number, luk: number, isTrans: boolean): number {
    let point = 48;
    if (isTrans) {
        point = 100;
    }
    for (let i = 1; i < baseLv; i++) {
        if (i < 99) {
            point += Math.floor(i / 5 + 3)
        } else {
            point += Math.floor(i / 10 + 13)
        }
    }
    point -= calUsingStatusPoint(str)
    point -= calUsingStatusPoint(agi)
    point -= calUsingStatusPoint(vit)
    point -= calUsingStatusPoint(int)
    point -= calUsingStatusPoint(dex)
    point -= calUsingStatusPoint(luk)
    return point;
}