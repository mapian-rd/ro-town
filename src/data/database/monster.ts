import { MonsterId } from "../model/monster";

export const MonsterList: MonsterId[] = [
    {
        id: 0,
        name: "0",
    },
    {
        id: 1002,
        name: "Poring",
    },
    {
        id: 1120,
        name: "Ghostring",
    },
    {
        id: 2408,
        name: "Lv 10",
    },
    {
        id: 20573,
        name: "Phantom of Amdarais",
    }
].sort((a, b) => a.id - b.id)