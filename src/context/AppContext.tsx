import { createContext } from "react";
import { doramClass } from "../constraint/class";
import { CharacterModel } from "../model/character";
import { Status } from "../model/status";
import { Storage } from "../model/storage";

interface State {
    updateState: (newState: Partial<State>) => void;
}

export interface AppState {
    character: CharacterModel;
    storage: Storage;
}

const meoStatus = new Status(120, 100, 90, 1, 120, 33)
const meo = new CharacterModel()
meo.status = meoStatus
meo.clazz = doramClass
meo.baseLv = 175
meo.jobLv = 50

export const initState: AppState = {
    character: new CharacterModel(),
    storage: new Storage([]),
};

export const AppContext = createContext<AppState>({} as AppState)