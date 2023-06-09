import { Espectador } from "./espectador";

export class Ticket {
    _id!:string;
    precioTicket!: number;
    fechaCompra!: string;
    espectador!: Espectador;
    categoriaEspectador!: string;
}