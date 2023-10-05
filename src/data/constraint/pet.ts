import { PetFriendly } from "../model/Petv1"
import { PetFriendlyEnum } from "../model/Petv2"

export const friendly = new PetFriendly("สนิทสนม")
export const ally = new PetFriendly("เป็นมิตร")
export const normal = new PetFriendly("ปกติ")

export const petFriendlyList: Map<PetFriendlyEnum, PetFriendly>  = new Map([
    [PetFriendlyEnum.friendly, friendly],
    [PetFriendlyEnum.ally, ally], 
    [PetFriendlyEnum.normal, normal],
])