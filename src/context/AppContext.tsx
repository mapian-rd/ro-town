import { createContext } from "react";
import { CharacterModel } from "../model/character";
import CharacterAttribute from "../model/CharacterAttribute";
import { Storage } from "../model/storage";

interface State {
    updateState: (newState: Partial<State>) => void;
}

export interface AppState {
    character: CharacterModel;
    storage: Storage;
    characterAttribute: CharacterAttribute;
}

export const AppContext = createContext<AppState>({} as AppState)