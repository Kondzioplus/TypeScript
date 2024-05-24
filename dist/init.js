"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import modułów
const polish_pizzeria_1 = require("./polish-pizzeria");
const american_pizzeria_1 = require("./american-pizzeria");
const laStrada = new polish_pizzeria_1.PolishPizzeria("LaStrada", true);
const americanHouse = new american_pizzeria_1.AmericanPizzeria('American House');
const venezia = new polish_pizzeria_1.PolishPizzeria('Venezia', false);
console.log(laStrada, americanHouse, venezia);
