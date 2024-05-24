//tworzymy klasę

class Pizzeria {
    static id = 0;
    id;
    readonly name;
    private pizzasInOrder = [];
    private maxPizzasInOven = 10;
    protected recipes = [];
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
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    private isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}

const laStrada = new Pizzeria("LaStrada");
laStrada.order("Havanian Pizza");
//nadpisywanie Managera
laStrada.manager;
laStrada.manager = 'Jola Nowak';

const americanHouse = new Pizzeria('American House');
const venezia = new Pizzeria('Venezia');
console.log(laStrada, americanHouse, venezia);
