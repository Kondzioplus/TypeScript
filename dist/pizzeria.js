"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
//tworzymy klasę
//export modułów
class Pizzeria {
    constructor(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this._manager = 'Jan Kowalski';
        this.id = Pizzeria.id++;
        this.name = name;
    }
    //getter
    get manager() {
        return this._manager;
    }
    //setter
    set manager(manager) {
        this._manager = manager;
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}
exports.Pizzeria = Pizzeria;
Pizzeria.id = 0;
