import { Item } from "./Itemv2";
import { PassiveSkill } from "./skill";

export interface Buffable {
    isActive: boolean
}

export class ItemBuff extends Item implements Buffable {
    isActive: boolean = false
}

export class SkillBuff extends PassiveSkill implements Buffable {
    isActive: boolean = false
}