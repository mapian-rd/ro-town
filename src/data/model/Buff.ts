import { Item, Named } from "./Itemv2";
import { PassiveSkill } from "./skill";

export interface Buffable {
    isActive: boolean
}

export class ItemBuff extends Item implements Buffable {
    isActive: boolean = false
}

export class SkillBuff extends PassiveSkill implements Buffable {
    isActive: boolean = false
    activeLv: number = 1

    static is(item: Named): item is SkillBuff {
        return (item as SkillBuff).maxLv !== undefined
    }
}