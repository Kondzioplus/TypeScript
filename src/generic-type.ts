interface Item {
    name: string;
}
//Typ generyczny
class Queue<T extends Item> {
    private data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }
}

interface ProductItem {
    id: number;
    name: string;
}

//const people = new Queue<string>();
//people.push("abc");
//people.push("123");

//const numbers = new Queue<number>();
//numbers.push(456);
//numbers.push(789);

const ProductItems = new Queue<ProductItem>();
ProductItems.push({ id: 123, name: 'Milk'});
