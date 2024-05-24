"use strict";
//tworzymy klasę
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
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
    //zmiana statusu
    changeStatus(index, status) {
        this.pizzasInOrder[index].status = status;
    }
    //zmiana rozmiaru
    changeSize(index, size) {
        this.pizzasInOrder[index].size = size;
    }
    //Typ Guards
    checkPrice({ price }) {
        if (typeof price === "string") {
            console.log('price is string', price.toLowerCase());
        }
        else if (typeof price === 'number') {
            console.log('price is number', price.toFixed());
        }
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}
exports.Pizzeria = Pizzeria;
Pizzeria.id = 0;
