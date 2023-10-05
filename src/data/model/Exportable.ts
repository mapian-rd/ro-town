import { CharacterExport } from "./Characterv2";
import { Storage } from "./storage";

export interface Exportable {

}

export class ExportData {
    storage: Storage = new Storage()
    character: CharacterExport = new CharacterExport()
    monsterId: number = -1
    skillName: string = ""
    skillLevel: number = 1
}