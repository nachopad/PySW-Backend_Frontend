import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  url_base:string = "http://localhost:3000/api/transaccion/";
  constructor(private _http: HttpClient) { }

  public getConvert(valor:string, origen:string, destino:string):Observable<any>{

    const encodedParams = new URLSearchParams();
    encodedParams.set('from-value', valor);
    encodedParams.set('from-type', origen);
    encodedParams.set('to-type', destino);

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'f357647e41msh59e1504bcadd4b7p1ffe20jsn5d077ccd29fd',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
    })
    };
      return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", encodedParams, httpOptions);
  }

  public getCurrency():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ff1cd308d5msh5868edd8213b41bp125fedjsn9bd94272d3af',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
    })
    };
      return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies", httpOptions);
  }

  public createTransaccion(transaccion: Transaccion):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(transaccion);
    return this._http.post(this.url_base, body, httpOptions);
  }

  public getTransacciones():Observable<any>{
    let httpOptions = {
      hearders: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.url_base, httpOptions);
  }

  public getTransaccionOrigenDestino(origen:string, destino:string):Observable<any>{
    let httpOptions = {
      hearders: new HttpHeaders({
       
      }),
      params: new HttpParams()
      .set('origen', origen)
      .set('destino',destino)
    }
    return this._http.get(this.url_base+'buscar-por-origen-destino/', httpOptions);
  }

  
}