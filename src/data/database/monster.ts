import { MonsterId } from "../model/monster";
import * as itemJson from "./json/monster.json"

export const MonsterList: MonsterId[] = [
    ...Array.from(itemJson as MonsterId[]),
    {
        id: "1002",
        name: "Poring",
    },
    {
        id: "1120",
        name: "Ghostring",
    },
    {
        id: "2408",
        name: "Lv 10",
    },
    {
        id: "20573-1",
        monsterId: 20573,
        name: "Phantom of Amdarais Lv.1",
        hp: 600000000,
        hit: 502,
    },
    {
        id: "20573-2",
        monsterId: 20573,
        name: "Phantom of Amdarais Lv.5",
        hp: 1200000000,
        hit: 662,
    },
    {
        id: "20573-3",
        monsterId: 20573,
        name: "Phantom of Amdarais Lv.10",
        hp: 2000000000,
        hit: 862,
    },
].sort((a, b) => a.id < b.id ? -1 : 1)