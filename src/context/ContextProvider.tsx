import { useState } from "react";
import { Agi } from "../constraint/status";
import { CharacterModel } from "../model/character";
import { StatusType } from "../model/status";
import { Storage } from "../model/storage";
import { AppApiContext } from "./AppApiContext";
import { AppState, initState, AppContext } from "./AppContext";

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = (props: Props): JSX.Element => {
  const [character, setCharacter] = useState<CharacterModel>(initState.character);
  const [storage, setStorage] = useState<Storage>(initState.storage);
  const app = {
    character,
    storage
  }
  const api = {
    updateCharacter: (newState: Partial<CharacterModel>) => {
      setCharacter({...character, ...newState});
      console.log(character)
    }
  }

  return (
    <AppContext.Provider value={app}>
      <AppApiContext.Provider value={api}>
        {props.children}
      </AppApiContext.Provider>
    </AppContext.Provider>
  )
}