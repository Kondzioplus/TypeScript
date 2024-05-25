    // tworzymy klasę

import { Orderable } from "./orderable";
import { Pizza, Status, SizeKey, PaymentMethod } from "./pizza.model";

    // export modułów
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
    // getter
    get manager() {
        return this._manager;
    }
    // setter
    set manager(manager){
        this._manager = manager;
    }

    // Discriminated Unions - potrafią określić jakiego typu jest zmienna.
    getPaymentMethod(payment: PaymentMethod) {
        switch(payment.type) {
            case 'cash': return `Paid in cash in ${payment.currency}`
            case 'debitCard': return `Paid with debit card with code ${payment.code}`
            case 'onlinePayment': return `Paid online, with bank account ${payment.bankAccount}`
        }
    }
    order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }
    // zmiana statusu
    changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }
    // zmiana rozmiaru
    changeSize(index: number, size: SizeKey) {
        this.pizzasInOrder[index].size = size;
    }
    // Typ Guards
    checkPrice({ price}: Pizza) {
        if (typeof price === "string") {
            console.log('price is string', price.toLowerCase())
        } else if (typeof price === 'number') {
            console.log('price is number', price.toFixed());
        } else {
            console.log(price);// pole typu NEVER.
        }
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
    abstract bake(): string;
}






