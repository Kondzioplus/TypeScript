"use strict";
// Typ generyczny
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        this.data.shift();
    }
    getAll() {
        return this.data;
    }
}
// const people = new Queue<string>();
// people.push("abc");
// people.push("123");
// const numbers = new Queue<number>();
// numbers.push(456);
// numbers.push(789);
const ProductItems = new Queue();
ProductItems.push({ id: 123, name: 'Milk', code: 'AABB1122' });
