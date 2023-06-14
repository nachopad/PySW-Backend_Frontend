import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  accion:string="";
  ticket!:Ticket;
  espectadores!: Array<Espectador>;
  precioInicial!:number;
  precioFinal!:number;

  constructor(private ticketService:TicketService, private activatedRoute: ActivatedRoute, 
              private router: Router, private espectadorService: EspectadorService) { 
    this.ticket = new Ticket();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
        this.accion = "new";
        this.obtenerEspectadores();
      }else{
        this.accion = "update";
        this.obtenerTicket(params['id']);
      }
    })
  }

  // Funcion que trae un ticket registrado en la Base de Datos. 
  // Necesario para la operacion de modificar ticket.
  async obtenerTicket(id:string){
    await this.obtenerEspectadores();
    this.ticketService.getTicketById(id).subscribe(
      (result) => {
        Object.assign(this.ticket, result);
        this.ticket.espectador = this.espectadores.find(tick => (tick._id == this.ticket.espectador._id))!;
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que permite obtener todos los espectadores registrados en la Base de Datos.
  async obtenerEspectadores(){
    this.espectadores = Array<Espectador>();
    this.espectadorService.getEspectadores().subscribe(
      (result) => {
        let espectador = new Espectador();
        result.forEach((element:any) => {
          Object.assign(espectador, element);
          this.espectadores.push(espectador);
          espectador = new Espectador();
        });
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que permite registrar un ticket.
  agregarTicket(){
    this.ticket.fechaCompra = String(this.ticket.fechaCompra);
    this.ticketService.createTicket(this.ticket).subscribe(
      (result) => {
        if(result.status==1){
          alert(result.msg)
          this.router.navigate(['ticket-list']);
        }
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que permite modificar un ticket registrado.
  modificarTicket(){
    this.ticketService.editTicket(this.ticket).subscribe(
      (result) => {
        if(result.status==1){
          alert(result.msg)
          this.router.navigate(['ticket-list']);
        }
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que cancela la operacion de modificacion, regresa a la lista.
  cancelarModificacion(){
    this.router.navigate(['ticket-list']);
  }

  // Funcion que calcula descuento para el ticket en funcion a la categoria del espectador.
  calcularDescuento() {
    this.precioInicial = this.ticket.precioTicket;
    if (this.ticket.categoriaEspectador === 'l') {
      this.precioFinal = this.ticket.precioTicket - (this.ticket.precioTicket * 0.20); // Calcula el precio final restando el descuento al precio del ticket.
      this.ticket.precioTicket = this.precioFinal;
    } else {
      this.precioFinal = this.ticket.precioTicket; // Si no es categoría 'local', el precio final es igual al precio del ticket sin descuento.
      this.ticket.precioTicket = this.precioFinal;
    }
  }
}
