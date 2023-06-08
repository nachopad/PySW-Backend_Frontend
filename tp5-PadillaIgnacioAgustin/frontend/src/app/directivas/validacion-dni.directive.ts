import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function verificarCaracter(c:AbstractControl){
  if (c.value == null) return null;
  if(/^[0-9]*$/.test(c.value) == false){
  return {caracterNoNumero: true}
  }
  return null;
 } 

@Directive({
  selector: '[caracter-noNumero]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue: verificarCaracter}
    ]
   
})
export class ValidacionDniDirective {

  constructor() { }

}
