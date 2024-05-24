"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolishPizzeria = void 0;
//import modułów
const pizzeria_1 = require("./pizzeria");
class PolishPizzeria extends pizzeria_1.Pizzeria {
    constructor(name, openAtNight) {
        super(name);
        this.openAtNight = openAtNight;
    }
    bake() {
        return 'pizza is being baked';
    }
}
exports.PolishPizzeria = PolishPizzeria;
;
