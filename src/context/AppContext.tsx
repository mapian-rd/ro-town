import { createContext } from "react";
import { CalculatedAttribute } from "../data/model/CalculatedAttribute";
import { CombatStatus } from "../data/model/CombatStatus";
import { Monster, MonsterId } from "../data/model/monster";
import { ActiveSkill } from "../data/model/skill";
import { Storage } from "../data/model/storage";
import { Character } from "../data/model/Characterv2";
import { JobClass } from "../data/model/class";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { Item, Named } from "../data/model/Itemv2";

interface State {
    updateState: (newState: Partial<State>) => void;
}

export enum ViewState {
    Normal, MoreStatus, Storage, AddItem, BuffStorage, SkillStorage, DebuffStorage, AddBuff, MoreCombat, EditItem,
}

export interface AppState {
    viewState: ViewState;
    viewItem: Named | undefined;
    viewItem2: Named | undefined;
    dragItem: CraftEqiupment | undefined;
    editItem?: CraftEqiupment;

    character: Character;
    storage: Storage;
    buffStorage: Item[];
    calculatedAttribute: CalculatedAttribute;
    monsterId?: MonsterId;
    monster?: Monster;
    skill?: ActiveSkill;
    skillLevel?: number;
    combatStatus: CombatStatus;
}

export const AppContext = createContext<AppState>({} as AppState)