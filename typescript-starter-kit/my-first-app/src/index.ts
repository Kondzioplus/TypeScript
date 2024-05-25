    // import modułów
    import { PolishPizzeria } from "./polish-pizzeria";
    import { AmericanPizzeria } from "./american-pizzeria";
    import { Pizza, Size, Status } from "./pizza.model";
    
    const laStrada = new PolishPizzeria("LaStrada", true);
    const americanHouse = new AmericanPizzeria('American House');
    const venezia = new PolishPizzeria('Venezia', false);
    
    const isOvenInVeneziaFull = venezia.isOvenFull();
    
    const capriciosa = {
        name: 'Capriciosa',
        price: '21.00zł',
        size: 'large',
        status: Status.Ordered,
        cancelable: true
    }

    const carbonara = {
        name: 'Carbonara',
        price: '23.00zł',
        size: 'small',
        status: Status.Baked,
        cancelable: true
    }
    
    venezia.order(capriciosa);
    venezia.order(carbonara);
    

    

    const table = document.getElementById('table');

    const createTrNode = (pizza: Pizza) => {
        return `
        <tr>
            <td>${pizza.name}</td>
            <td>${pizza.price}</td>
            <td>${pizza.size}</td>
        </tr>
        `
    }

    const getRowsWithOrderedPizzas = (pizzeria: PolishPizzeria) => {
        return pizzeria.pizzasInOrder.map(pizza => createTrNode(pizza))
        .join();
    }

    table.innerHTML = getRowsWithOrderedPizzas(venezia);