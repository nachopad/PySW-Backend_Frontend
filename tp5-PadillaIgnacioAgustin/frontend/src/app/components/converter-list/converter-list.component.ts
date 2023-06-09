import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-converter-list',
  templateUrl: './converter-list.component.html',
  styleUrls: ['./converter-list.component.css']
})
export class ConverterListComponent implements OnInit {

  moneda!: Moneda;
  monedas!: Array<Moneda>;
  transacciones!:Array<Transaccion>;
  transaccionesFiltradas!:Array<Transaccion>;
  filtroOrigen:string="";
  filtroDestino:string="";
  element:boolean=false;
  activated:boolean=false;

  constructor(private converterService: ConverterService, private router: Router) {
    this.transacciones = new Array<Transaccion>();
    this.transaccionesFiltradas = new Array<Transaccion>();
    this.monedas = new Array<Moneda>();
    this.obtenerTransacciones();
    this.obtenerMoneda();
   }

  ngOnInit(): void {
  }

  obtenerTransacciones(){
    this.converterService.getTransacciones().subscribe(
      (result) => {
        let unaTransaccion = new Transaccion();
        result.forEach((element:any) => {
        Object.assign(unaTransaccion, element);
        this.transacciones.push(unaTransaccion);
        unaTransaccion = new Transaccion();
       });
      },
      (error) => { console.log(error) }
    )
  }


   /**
 * Obtiene los tipos de monedas disponibles para seleccionar en el formulario y realizar
 * la conversión seleccionada.
 */
   public obtenerMoneda(){
    this.converterService.getCurrency().subscribe(
      (result) => {
          result.forEach((element: any) => {
            this.moneda = new Moneda();
            this.moneda.symbol = element.symbol;
            this.moneda.name = element.name;
            this.monedas.push(this.moneda);
       });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Método que me permite obtener un nuevo array con los tickets filtrados por tipo de espectador.
  public realizarFiltro(){
    this.transaccionesFiltradas = new Array<Transaccion>();
    this.converterService.getTransaccionOrigenDestino(this.filtroOrigen, this.filtroDestino).subscribe(
      (result) => {
        let transaccion = new Transaccion();
        result.forEach((element:any) => {
          Object.assign(transaccion, element);
          this.transaccionesFiltradas.push(transaccion);
          transaccion = new Transaccion();
        })
        this.activated=true;
      },
      (error) => { console.log(error) }
    )
  }

  agregarTransaccion(){
    this.router.navigate(['converter-form',0]);
  }

  estadoResumen(){
    if(this.element==false){
      return this.element=true;
    }
    return this.element=false;
  }

}