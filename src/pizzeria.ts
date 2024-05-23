//tworzymy klasę

class Pizzeria {
    readonly name;
    private pizzasInOrder = [];
    private maxPizzasInOven = 10;
    protected recipes = [];

    constructor(name: string) {
        this.name = name;
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
