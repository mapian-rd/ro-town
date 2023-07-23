import { createContext } from "react";
import { CharacterModel } from "../model/character";

export interface AppApi {
    updateCharacter: (newState: Partial<CharacterModel>) => void;
}

export const AppApiContext = createContext<AppApi>({} as AppApi)