import { doramClass } from "./data/constraint/class"
import { CharacterModel } from "./data/model/Characterv1"
import { Status } from "./data/model/status"

const meoStatus = new Status(120, 100, 90, 1, 120, 33)
const meo = new CharacterModel()
// meo.clazz = doramClass
meo.baseLv = 175
meo.jobLv = 50