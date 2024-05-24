//import modułów
import { Pizzeria } from "./pizzeria";
import { Pizza, Status } from "./pizza.model";

interface CancelablePizza {
    cancelable: boolean;
}

function PizzaCreated(target: Function) {
    console.log('Polish Pizza has been created...');
}

function ClosedAtNight<T extends {new(...args:any[]):{}}>(constructor: T) {
    return class extends constructor {
        openAtNight = false;
    }
}

function Enumerable(value: boolean) {
    return function(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        propertyDescriptor.enumerable = value;
    }
}

@ClosedAtNight
@PizzaCreated

export class PolishPizzeria extends Pizzeria {
    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }

    //Intersection type. "&"(i).
    order(pizza: Pizza & CancelablePizza) {
        this.pizzasInOrder.push(pizza);
    }

    @Enumerable(false)
    bake(): string {
        return 'pizza is being baked';
    }
};