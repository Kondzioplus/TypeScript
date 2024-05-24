"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import modułów
const polish_pizzeria_1 = require("./polish-pizzeria");
const american_pizzeria_1 = require("./american-pizzeria");
const pizza_model_1 = require("./pizza.model");
const laStrada = new polish_pizzeria_1.PolishPizzeria("LaStrada", true);
const americanHouse = new american_pizzeria_1.AmericanPizzeria('American House');
const venezia = new polish_pizzeria_1.PolishPizzeria('Venezia', false);
const isOvenInVeneziaFull = venezia.isOvenFull();
const capriciosa = {
    name: 'Capriciosa',
    price: '21.00zł',
    size: 'large',
    status: pizza_model_1.Status.Ordered,
    cancelable: true
};
venezia.order(capriciosa);
americanHouse.order(capriciosa);
venezia.changeStatus(0, pizza_model_1.Status.Baked);
