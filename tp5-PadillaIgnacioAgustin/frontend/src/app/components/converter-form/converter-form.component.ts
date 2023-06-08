import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {


  transaccion!:Transaccion;
  transacciones!: Array<Transaccion>;
  moneda!:Moneda;
  monedas!:Array<Moneda>;

  constructor(private converterService: ConverterService, private router: Router) { 
    this.transaccion = new Transaccion();
    this.transacciones = new Array<Transaccion>();
    this.monedas = new Array<Moneda>();
    this.obtenerMoneda();
  }

  ngOnInit(): void {
    
  }

  /**
 * Convierte una cantidad de una moneda a otra utilizando el servicio de conversión.
 */
  public convertCurrency(){
    // Parámetros:
    // - this.valor: Valor a convertir.
    // - this.origen: Moneda de origen.
    // - this.destino: Moneda de destino.

    this.converterService.getConvert(String(this.transaccion.cantidadOrigen), String(this.transaccion.monedaOrigen), String(this.transaccion.monedaDestino)).subscribe(
      (result) => {
        this.transaccion.cantidadDestino = result.result;
        this.transaccion.tasaConversion = (this.transaccion.cantidadDestino / this.transaccion.cantidadOrigen);
        this.crearTransaccion();
      },
      // Manejo de errores.
      (error) => { console.log(error) }
    );
  };

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

  // Funcion que permite crear una transaccion.
  public crearTransaccion(){
    this.converterService.createTransaccion(this.transaccion).subscribe(
      (result:any) => {
        if(result.status==1){
          alert(result.msg);
        }
      },
      (error) => { console.log(error) }
    )
  }

  // Funcion que permite ir hacia la lista de transacciones registradas.
  verLista(){
    this.router.navigate(['converter-list']);
  }

}