"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolishPizzeria = void 0;
// import modułów
const pizzeria_1 = require("./pizzeria");
function PizzaCreated(_target) {
    console.log('Polish Pizza has been created...');
}
function ClosedAtNight(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.openAtNight = false;
        }
    };
}
function Enumerable(value) {
    return function (target, propertyKey, propertyDescriptor) {
        propertyDescriptor.enumerable = value;
    };
}
let PolishPizzeria = class PolishPizzeria extends pizzeria_1.Pizzeria {
    constructor(name, openAtNight) {
        super(name);
        this.openAtNight = openAtNight;
    }
    // Intersection type. "&"(i).
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    bake() {
        return 'pizza is being baked';
    }
};
exports.PolishPizzeria = PolishPizzeria;
__decorate([
    Enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PolishPizzeria.prototype, "bake", null);
exports.PolishPizzeria = PolishPizzeria = __decorate([
    ClosedAtNight,
    PizzaCreated,
    __metadata("design:paramtypes", [String, Boolean])
], PolishPizzeria);
;
