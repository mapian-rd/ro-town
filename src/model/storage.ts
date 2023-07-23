import { Item } from "./Item";

export class Storage {
    items: Item[];
    constructor(items: Item[]) {
        this.items = items
    }
}