    // import modułów
import { PolishPizzeria } from "./polish-pizzeria";
import { AmericanPizzeria } from "./american-pizzeria";
import { Size, Status } from "./pizza.model";

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

venezia.order(capriciosa);
americanHouse.order(capriciosa);
venezia.changeStatus(0, Status.Baked);
venezia.changeSize(0, "small");