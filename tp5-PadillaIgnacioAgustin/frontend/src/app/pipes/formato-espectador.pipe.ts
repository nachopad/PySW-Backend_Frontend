import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoEspectador'
})
export class FormatoEspectadorPipe implements PipeTransform {

  transform(text:any): string {
    let formateo:string = "Local";
    if(text==='e'){
      formateo = "Extranjero";
    }
    return formateo;
  }

}
