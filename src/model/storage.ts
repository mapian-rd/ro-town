import { Item } from "./Item";

export class Storage {
    items: Item[];
    test: number = 0;
    constructor(items: Item[]) {
        this.items = items
    }
}