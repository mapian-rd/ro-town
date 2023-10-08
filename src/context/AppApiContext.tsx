import { createContext } from "react";
import { AttributeType, AttributeTypeEnum } from "../data/model/attributeType";
import { CalculatedAttribute } from "../data/model/CalculatedAttribute";
import { Character } from "../data/model/Characterv2";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { DescriptionNumber } from "../data/model/Formula";
import { Item, Named } from "../data/model/Itemv2";
import { Monster, MonsterId } from "../data/model/monster";
import { ActiveSkill } from "../data/model/skill";
import { ViewState } from "./AppContext";

export interface AppApi {
    setViewState: (state: ViewState) => void;
    setViewItem: (item: Named) => void;
    setDragItem: (item: CraftEqiupment) => void;
    updateCharacter: (newState: Partial<Character>) => void;
    setMonsterId: (newMonsterId: MonsterId) => void;
    setSkill: (newSkill: ActiveSkill) => void;
    setSkillLevel: (newSkillLevel: number) => void;
    getRaw(type: AttributeTypeEnum): DescriptionNumber;
    getFinal(type: AttributeTypeEnum): DescriptionNumber;
    addItem: (item: CraftEqiupment) => void;
    addBuff: (item: Item) => void;
    equip: (item: CraftEqiupment) => void;
    unequip: (item: CraftEqiupment) => void;
}

export const AppApiContext = createContext<AppApi>({} as AppApi)