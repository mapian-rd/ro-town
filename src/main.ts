import { doramClass } from "./constraint/class"
import { CharacterModel } from "./model/character"
import { Status } from "./model/status"

const meoStatus = new Status(120, 100, 90, 1, 120, 33)
const meo = new CharacterModel()
meo.clazz = doramClass
meo.baseLv = 175
meo.jobLv = 50