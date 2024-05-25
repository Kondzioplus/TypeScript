"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmericanPizzeria = void 0;
// import modułów
const pizzeria_1 = require("./pizzeria");
class AmericanPizzeria extends pizzeria_1.Pizzeria {
    bake() {
        return 'pizza is being baked..please wait';
    }
}
exports.AmericanPizzeria = AmericanPizzeria;
;
