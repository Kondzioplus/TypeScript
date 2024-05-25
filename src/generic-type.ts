interface Item {
    name: string;
    code: string;
}
    // łączenie deklaracji interfejsu.
    // interface Item {
    //    name: string;
    // }
    // interface Item {
    //    code: string;
    // }
    // lepiej nie zostawiać deklaracji oddzielnie!!!.

    // Generyczny interfejs.
interface ProductsQueue<T> {
    push(item: T): void;
    getAll(): T[];
}

    // Typ generyczny
class Queue<T extends Item> implements ProductsQueue<T> {
    private data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll() {
        return this.data;
    }
}

interface ProductItem {
    id: number;
}

    // const people = new Queue<string>();
    // people.push("abc");
    // people.push("123");

    // const numbers = new Queue<number>();
    // numbers.push(456);
    // numbers.push(789);

const ProductItems = new Queue<ProductItem & Item>();
ProductItems.push({ id: 123, name: 'Milk', code: 'AABB1122'});
