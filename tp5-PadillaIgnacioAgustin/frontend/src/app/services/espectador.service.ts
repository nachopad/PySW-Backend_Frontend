import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {
  url_base:string="http://localhost:3000/api/espectador/";

  constructor(private _http: HttpClient) { }

  getEspectadores():Observable<any>{
    let httpOptions = {
      hearders: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.url_base+'obtener-espectadores', httpOptions);
  }
}
