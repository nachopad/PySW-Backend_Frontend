import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  url_base:string="http://localhost:3000/api/ticket/";
  constructor(private _http: HttpClient) { }

  getTicketById(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.url_base+'obtener-ticket-por-id/'+id, httpOptions);
  }

  getTickets():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.url_base+'obtener-tickets', httpOptions);
  }

  getTicketsTipo(categoriaEspectador: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.url_base+'listar-por-tipo-espectador/'+categoriaEspectador, httpOptions);
  }

  createTicket(ticket: Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json" //Especificamos que es de tipo JSON - PARA CREATE Y UPDATE
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket); //serializamos el JSON
    return this._http.post(this.url_base+'crear-ticket', body, httpOptions);
  }

  editTicket(ticket: Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json" //Especificamos que es de tipo JSON - PARA CREATE Y UPDATE
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket); //serializamos el JSON
    return this._http.put(this.url_base+'editar-ticket/'+ticket._id, body, httpOptions);
  }

  deleteTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.delete(this.url_base+'eliminar-ticket/'+id, httpOptions);
  }
}