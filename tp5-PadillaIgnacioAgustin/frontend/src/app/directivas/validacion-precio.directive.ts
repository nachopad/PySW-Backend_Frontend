import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function verificarValorPrecio(c:AbstractControl){
  if (c.value == null) return null;
  if((c.value >=1) == false){
  return {valorNegativo: true}
  }
  return null;
 } 

@Directive({
  selector: '[precio-negativo]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue: verificarValorPrecio}
    ]
})
export class ValidacionPrecioDirective {

  constructor() { }

}
