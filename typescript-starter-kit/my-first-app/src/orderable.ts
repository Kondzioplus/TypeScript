import { Pizza } from "./pizza.model";
    // interfejs
export interface Orderable {
    pizzasInOrder: Pizza[];
    order(pizza: Pizza): void;
}