import { CraftEqiupment } from "./CraftEquipment";
import { Exportable } from "./Exportable";

export class Storage implements Exportable {
    items: CraftEqiupment[] = []
    test: number = 0;
}