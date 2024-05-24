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
class PolishPizzeria extends Pizzeria {
    bake() {
        return 'pizza is being baked';
    }
}
;
class AmericanPizzeria extends Pizzeria {
    bake() {
        return 'pizza is being baked..please wait';
    }
}
;
const laStrada = new PolishPizzeria("LaStrada");
laStrada.order("Havanian Pizza");
//nadpisywanie Managera
laStrada.manager;
laStrada.manager = 'Jola Nowak';
const americanHouse = new PolishPizzeria('American House');
const venezia = new PolishPizzeria('Venezia');
console.log(laStrada, americanHouse, venezia);
