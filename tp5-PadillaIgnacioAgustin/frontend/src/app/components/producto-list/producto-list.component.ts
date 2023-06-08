import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  destacados!:Array<Producto>;
  constructor(private productoService: ProductoService, private router: Router) {
    this.destacados = new Array<Producto>();
    this.obtenerProductos();
   }

  ngOnInit(): void {
  }

  // Funcion que me permite ir hacia el formulario de registro.
  agregarProducto(){
    this.router.navigate(['producto-form',0]);
  }

  // Funcion que me devuelve los productos destacados.
  obtenerProductos(){
    this.productoService.getProductosDestacados().subscribe(
      result => {
        let unProducto = new Producto();
       result.forEach((element:any) => {
        Object.assign(unProducto, element);
        this.destacados.push(unProducto);
        unProducto = new Producto();
       });
      },
      error => { console.log(error) }
    )
  }

}
