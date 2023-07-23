import { useEffect, useState } from "react";
import { CharacterModel } from "../model/character";
import CharacterAttribute from "../model/CharacterAttribute";
import { Storage } from "../model/storage";
import { AppApiContext } from "./AppApiContext";
import { AppContext } from "./AppContext";

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = (props: Props): JSX.Element => {
  const [character, setCharacter] = useState<CharacterModel>(new CharacterModel());
  const [storage, setStorage] = useState<Storage>(new Storage([]));
  const [attribute, setAttribute] = useState<CharacterAttribute>(new CharacterAttribute())
  const app = {
    character,
    storage,
    characterAttribute: attribute
  }

  useEffect(() => {
    setAttribute({})
  }, [character])

  const api = {
    updateCharacter: (newState: Partial<CharacterModel>) => {
      setCharacter({ ...character, ...newState });
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