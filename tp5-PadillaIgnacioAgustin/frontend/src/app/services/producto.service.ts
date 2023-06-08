import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url_base: string = "http://localhost:3000/api/producto/";
  constructor(private _http: HttpClient) { }

  getProductosDestacados():Observable<any>{
    let httpOptions = {
      hearders: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.url_base+'destacado', httpOptions);
  }

  createProducto(producto: Producto):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json" //Especificamos que es de tipo JSON - PARA CREATE Y UPDATE
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(producto); //serializamos el JSON
    return this._http.post(this.url_base, body, httpOptions);
  }
}