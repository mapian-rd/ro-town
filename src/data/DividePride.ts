import { MonEleList, MonSizeList, MonSizeSmall, MonTypeFormless, MonTypeList } from "./constraint/Monster"
import { Item } from "./model/Itemv2"
import { Monster } from "./model/monster"
import { Status } from "./model/status"

const dividePrideUrl = "https://www.divine-pride.net/"
const apiKey = "4da2f23f5572f2a857e6eab5fefa5b17"

interface MonsterResponse {
    "id": 1002,
    "name": "Poring",
    "stats": {
        "attackRange": 1,
        "level": 1,
        "health": 60,
        "str": 6,
        "_int": 0,
        "vit": 1,
        "dex": 6,
        "agi": 1,
        "luk": 5,
        "attack": {
            "minimum": 8,
            "maximum": 9
        },
        "defense": 2,
        "baseExperience": 18,
        "jobExperience": 10,
        "aggroRange": 10,
        "escapeRange": 12,
        "movementSpeed": 3.3333333333333335,
        "attackSpeed": 1.4880952380952381,
        "attackedSpeed": 480,
        "element": 21,
        "scale": 1,
        "race": 3,
        "magicDefense": 5,
        "hit": 202,
        "flee": 207,
        "ai": "MONSTER_TYPE_02",
        "mvp": 0,
        "_class": 0
    },
    "slaves": [],
    "sounds": [
        "poring_attack.wav",
        "poring_damage.wav",
        "poring_die.wav",
        "poring_move.wav"
    ],
    "questObjective": [
        5094,
    ],
    "drops": [
        {
            "itemId": 909,
            "chance": 7000,
            "stealProtected": false
        },
    ],
    "mvpdrops": [],
    "spawn": [
        {
            "mapname": "prt_fild01",
            "amount": 30,
            "respawnTime": 5000
        },
    ],
    "skill": [
        {
            "skillId": 197,
            "status": "MOVEITEM_ST",
            "level": 1,
            "chance": 200,
            "casttime": 0,
            "delay": 5000,
            "interruptable": true,
            "condition": null,
            "conditionValue": null
        },
    ]
}

interface ItemResponse {
    "classNum": null,
    "sets": [
        {
            "name": "Abyss_Death",
            "items": [
                {
                    "itemId": 4140,
                    "name": "Abysmal Knight Card"
                },
                {
                    "itemId": 18574,
                    "name": "Lord of Death [1]"
                }
            ]
        }
    ],
    "soldBy": [],
    "id": 4140,
    "aegisName": "Knight_Of_Abyss_Card",
    "flavorText": null,
    "name": "Abysmal Knight Card",
    "unidName": "Card",
    "resName": "이름없는카드",
    "unidResName": "이름없는카드",
    "description": "โจมตี Monster Class Boss แรงขึ้น 25%\nประเภท : ^777777Card^000000\nใช้กับ : ^777777Weapon^000000\nน้ำหนัก : ^7777771^000000",
    "unidDescription": "โจมตี Monster Class Boss แรงขึ้น 25%\nประเภท : ^777777Card^000000\nใช้กับ : ^777777Weapon^000000\nน้ำหนัก : ^7777771^000000",
    "slots": 0,
    "setname": null,
    "itemTypeId": 6,
    "itemSubTypeId": 0,
    "itemSummonInfoContainedIn": [
        {
            "internalType": "",
            "Type": 0,
            "sourceId": 12698,
            "sourceName": "Weapon Card Album",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "itemSummonTarget",
            "chance": 89
        },
        {
            "internalType": "random1",
            "Type": 0,
            "sourceId": 616,
            "sourceName": "Old Card Album",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "packageTarget",
            "chance": 0
        },
        {
            "internalType": "natural_random",
            "Type": 0,
            "sourceId": 616,
            "sourceName": "Old Card Album",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "packageTarget",
            "chance": 1
        },
        {
            "internalType": "natural_random",
            "Type": 0,
            "sourceId": 12698,
            "sourceName": "Weapon Card Album",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "packageTarget",
            "chance": 1
        },
        {
            "internalType": "natural_random",
            "Type": 0,
            "sourceId": 12817,
            "sourceName": "Old Card Album",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "packageTarget",
            "chance": 1
        },
        {
            "internalType": "random1",
            "Type": 0,
            "sourceId": 13618,
            "sourceName": "Super Pet Egg 2",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "packageTarget",
            "chance": 3
        },
        {
            "internalType": "random1",
            "Type": 0,
            "sourceId": 17233,
            "sourceName": "Bone's Death Scroll",
            "targetId": 4140,
            "targetName": "Abysmal Knight Card",
            "count": 1,
            "totalOfSource": 0,
            "summonType": "packageTarget",
            "chance": 10
        }
    ],
    "itemSummonInfoContains": [],
    "attack": 0,
    "defense": 0,
    "weight": 1.0,
    "requiredLevel": null,
    "limitLevel": 0,
    "itemLevel": null,
    "job": null,
    "compositionPos": 0,
    "attribute": 0,
    "location": null,
    "locationId": 0,
    "accessory": null,
    "price": 20,
    "range": null,
    "matk": null,
    "gender": null,
    "refinable": null,
    "indestructible": null,
    "itemMoveInfo": {
        "drop": true,
        "trade": true,
        "store": true,
        "cart": true,
        "sell": true,
        "mail": true,
        "auction": true,
        "guildStore": true
    },
    "rewardForAchievement": [],
    "cardPrefix": "Liberation",
    "pets": [],
    "hasScript": true
}

export async function MonsterSearch(id: number): Promise<Monster> {
    const res = await fetch(`${dividePrideUrl}/api/database/Monster/${id}?apiKey=${apiKey}`)
    const json = await res.json()
    const monRes = json as MonsterResponse
    const monster = new Monster()
    monster.id = monRes.id
    monster.name = monRes.name
    monster.level = monRes.stats.level
    monster.size = MonSizeList.find(monSize => monSize.id === monRes.stats.scale) ?? MonSizeSmall
    monster.race = MonTypeList.find(item => item.id === monRes.stats.race) ?? MonTypeFormless
    monster.isBoss = monRes.stats.mvp ? true : false
    monster.attribute = MonEleList.find(monEle => monEle.id === monRes.stats.element) ?? MonEleList[0]
    monster.hp = monRes.stats.health
    monster.status = new Status(monRes.stats.str, monRes.stats.agi, monRes.stats.vit, monRes.stats._int, monRes.stats.dex, monRes.stats.luk)
    monster.hardDef = monRes.stats.defense
    monster.hardMdef = monRes.stats.magicDefense
    monster.flee = monRes.stats.flee
    monster.hit = monRes.stats.hit
    return monster
}

export async function ItemDescriptionSearch(id: number): Promise<string> {
    const res = await fetch(`${dividePrideUrl}/api/database/Item/${id}?apiKey=${apiKey}&server=thROG`)
    const json = await res.json()
    const itemRes = json as ItemResponse
    return itemRes.description
}

export async function SkillDescriptionSearch(id: number): Promise<string> {
    const res = await fetch(`${dividePrideUrl}/api/database/Skill/${id}?apiKey=${apiKey}&server=thROG`)
    const json = await res.json()
    const itemRes = json as ItemResponse
    return itemRes.description
}

export async function CardPrefixSearch(id: number): Promise<string> {
    const res = await fetch(`${dividePrideUrl}/api/database/Item/${id}?apiKey=${apiKey}&server=thROG`)
    const json = await res.json()
    const itemRes = json as ItemResponse
    return itemRes.cardPrefix
}