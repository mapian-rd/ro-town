import { AppState } from "../../context/AppContext";
import { CharacterExport } from "./Characterv2";
import { Item } from "./Itemv2";
import { SkillEnum } from "./skill";
import { Storage } from "./storage";

export interface Exportable {

}

export class ExportData {
    storage: Storage = new Storage()
    buffStorage: Item[] = []
    character: CharacterExport = new CharacterExport()
    monsterId: number = -1
    skill: SkillEnum = SkillEnum.NormalAttack
    skillLevel: number = 1

    static getExportData(
        context: AppState
    ): ExportData {
        console.log("getExportData", context)
        const data = new ExportData()
        data.storage = context.storage
        data.buffStorage = context.buffStorage
        data.character = CharacterExport.getExport(context.character)
        if (context.monsterId) {
            data.monsterId = context.monsterId.id
        }
        if (context.skill) {
            data.skill = context.skill?.enum
        }
        if (context.skillLevel) {
            data.skillLevel = context.skillLevel
        }
        return data
    }
}