"use strict";
//tworzymy klasę
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
Pizzeria.id = 0;
const laStrada = new Pizzeria("LaStrada");
laStrada.order("Havanian Pizza");
//nadpisywanie Managera
laStrada.manager;
laStrada.manager = 'Jola Nowak';
const americanHouse = new Pizzeria('American House');
const venezia = new Pizzeria('Venezia');
console.log(laStrada, americanHouse, venezia);
