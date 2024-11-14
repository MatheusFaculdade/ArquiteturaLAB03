import Hotel from "./models/hotel";
import Reserva from "./models/reserva";

function main() {
const reserva1 = new Reserva(101, "Alice", new Date("2023-11-01"), new Date("2023-11-05"));
const reserva2 = new Reserva(102, "Bob", new Date("2023-11-02"), new Date("2023-11-06"));

const hotel = new Hotel();

hotel.registrarReserva(reserva1);
hotel.registrarReserva(reserva2);

hotel.consultarStatusQuarto(101);

hotel.cancelarReserva(101);

hotel.consultarStatusQuarto(101);

}

main();
