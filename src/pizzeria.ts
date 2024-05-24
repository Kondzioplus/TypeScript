//tworzymy klasę

import { Orderable } from "./orderable";
import { Pizza, Status } from "./pizza.model";

//export modułów
export abstract class Pizzeria implements Orderable {
    static id = 0;
    id;
    readonly name;
    pizzasInOrder: Pizza[] = [];
    private maxPizzasInOven = 10;
    protected recipes: string[] = [];
    private _manager = 'Jan Kowalski';

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }
//getter
    get manager() {
        return this._manager;
    }
//setter
    set manager(manager){
        this._manager = manager;
    }
    order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }

    changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
    abstract bake(): string;
}






