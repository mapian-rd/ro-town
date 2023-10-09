import { classList, getClass, noviceClass } from "../constraint/class"
import { petFriendlyList } from "../constraint/pet"
import { itemBuffDatabase, skillBuffDatabase } from "../database/buff"
import { petList } from "../database/pet"
import { ItemBuff, SkillBuff } from "./Buff"
import { JobClass, JobClassEnum } from "./class"
import { CraftEqiupment } from "./CraftEquipment"
import { EquipmentSlot } from "./EquipmentSlot"
import { Exportable } from "./Exportable"
import { Item } from "./Itemv2"
import { Pet, PetFriendly, PetFriendlyEnum } from "./Petv2"
import { ActiveSkill, Skill } from "./skill"
import { Status } from "./status"
import { Storage } from "./storage"

export class CharacterExport implements Exportable {
    name: string = "Character1"
    clazz: JobClassEnum = JobClassEnum.Novice
    baseLv: number = 1
    jobLv: number = 1
    str: number = 1
    agi: number = 1
    vit: number = 1
    int: number = 1
    dex: number = 1
    luk: number = 1
    equipmentMap: Map<EquipmentSlot, string | undefined> = new Map()
    pet?: string;
    petFriendly?: PetFriendlyEnum;
    itemBuff: Map<string, boolean> = new Map()
    skillBuff: Map<string, boolean> = new Map()

    static getCharacter(cExport: CharacterExport, storage: Storage, buffStorage: Item[]): Character {
        const character = new Character()
        character.name = cExport.name
        character.clazz = getClass(cExport.clazz)
        character.baseLv = cExport.baseLv
        character.jobLv = cExport.jobLv
        character.status = new Status(cExport.str, cExport.agi, cExport.vit, cExport.int, cExport.dex, cExport.luk)
        character.equipmentMap = new Map(Array.from(cExport.equipmentMap).map(([key, value]) => {
            return [key, storage.items.find(item => item.id === value)]
        }))
        character.pet = petList.find(pet => pet.id === cExport.pet)
        character.petFriendly = Array.from(petFriendlyList).find(([key, value]) => key === cExport.petFriendly)?.[1]
        character.itemBuff = Array.from(cExport.itemBuff).flatMap(([key, value]) => {
            const item = [...itemBuffDatabase, ...buffStorage].find(item => item.id === key)
            if (item) {
                return {
                    ...item,
                    isActive: value
                }
            }
            return []
        })
        character.skillBuff = Array.from(cExport.skillBuff).flatMap(([key, value]) => {
            const item = skillBuffDatabase.find(item => item.id === key)
            if (item) {
                return {
                    ...item,
                    isActive: value
                }
            }
            const passive = character.clazz.passiveSkill.find(item => item.id === key)
            if (passive) {
                return {
                    ...passive,
                    isActive: value
                }
            }
            return []
        })
        console.log("getChar", character)
        return character
    }

    static getExport(character: Character): CharacterExport {
        const cExport = new CharacterExport()
        cExport.name = character.name
        cExport.clazz = character.clazz.enum
        cExport.baseLv = character.baseLv
        cExport.jobLv = character.jobLv
        cExport.str = character.status.str
        cExport.agi = character.status.agi
        cExport.vit = character.status.vit
        cExport.int = character.status.int
        cExport.dex = character.status.dex
        cExport.luk = character.status.luk
        cExport.equipmentMap = new Map(Array.from(character.equipmentMap).map(([key, value]) => {
            return [key, value?.id]
        }))
        cExport.pet = character.pet?.id
        cExport.petFriendly = Array.from(petFriendlyList).find(([key, value]) => value.name === character.petFriendly?.name)?.[0]
        cExport.itemBuff = new Map()
        character.itemBuff.forEach(item => {
            cExport.itemBuff.set(item.id, item.isActive)
        })
        cExport.skillBuff = new Map()
        character.skillBuff.forEach(item => {
            cExport.skillBuff.set(item.id, item.isActive)
        })
        console.log("getExport", cExport)
        return cExport
    }
}

export class Character {
    name: string = "Character1"
    clazz: JobClass = noviceClass
    baseLv: number = 1
    jobLv: number = 1
    status: Status = new Status()
    equipmentMap: Map<EquipmentSlot, CraftEqiupment | undefined> = new Map()
    pet?: Pet;
    petFriendly?: PetFriendly;
    itemBuff: ItemBuff[] = [];
    skillBuff: SkillBuff[] = [];
}