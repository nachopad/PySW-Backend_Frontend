import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticket!:Ticket;
  tickets!:Array<Ticket>;
  ticketsFiltrados!: Array<Ticket>;
  filtroCategoria!: string;
  element:boolean=false; // variable para ocultar y mostrar elementos html.
  activated:boolean=false; // variable para ocultar y mostrar elementos html.

  constructor(private ticketService: TicketService, private router: Router) { 
    this.tickets = new Array<Ticket>();
    this.ticketsFiltrados = new Array<Ticket>();
    this.obtenerTickets();
  }

  ngOnInit(): void {
  }

  // Función para obtener todos los tickets.
  obtenerTickets(){
    this.tickets = new Array<Ticket>();
    this.ticketService.getTickets().subscribe(
      (result) => {
        let unTicket = new Ticket();
        result.forEach((element:any) => {
          Object.assign(unTicket, element);
          this.tickets.push(unTicket);
          unTicket = new Ticket();
        })
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que permite realizar el filtro de tickets por categoria de espectador.
  realizarFiltro(){
    this.ticketsFiltrados = new Array<Ticket>();
    this.ticketService.getTicketsTipo(this.filtroCategoria).subscribe(
      (result) => {
        let ticketFiltrado = new Ticket();
        result.forEach((element:any) => {
          Object.assign(ticketFiltrado, element);
          this.ticketsFiltrados.push(ticketFiltrado);
          console.log(ticketFiltrado.espectador);
          ticketFiltrado = new Ticket();
        })
        this.activated = true;
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que te lleva a la pestaña de formulario para registrar un ticket.
  agregarTicket(){
    this.router.navigate(['ticket-form', 0]);
  }

  // Funcion para modificar un ticket. Recibe un id por parametro.
  modificarTicket(id:string){
    this.router.navigate(['ticket-form', id]);
    this.obtenerTickets();
    this.realizarFiltro();
  }

  // Funcion que elimina un ticket. Recibe un id por parametro. 
  eliminarTicket(id:string){
    this.ticketService.deleteTicket(id).subscribe(
      (result) => {
        alert(result.msg);
        this.obtenerTickets();
        this.realizarFiltro();
      },
      (error) => { console.log(error) }
    );
  }

  // Funcion que modifica el estado del boton "filtrar" en el componente de la lista.
  estadoResumen(){
    if(this.element==false){
      return this.element=true;
    }
    return this.element=false;
  }
}
