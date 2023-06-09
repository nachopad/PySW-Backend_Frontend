import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  producto!: Producto;
  accion:string="";
  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.producto = new Producto();
    this.producto.destacado = true;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      }else{
      //this.accion = "update";
      //this.obtenerProducto(params['id']);
      }
    })
  }

  // Funcion que me permite registrar un producto.
  agregarProducto(){
    this.productoService.createProducto(this.producto).subscribe(
      (result) => {
        if(result.status==1){
          alert(result.msg);
          this.router.navigate(['producto-list']);
        }
      },
      (error) => { console.log(error) }
    )
    this.router.navigate(['producto-list']);
  }

  // Funcion que modifica el estado "destacado" del producto a registrar.
  // Utilizado para el checkbox del formulario de registro.
  actualizarDestacado() {
    if (this.producto.destacado==false) {
      this.producto.destacado=true;
    } else {
      this.producto.destacado=false;
    }
  }

  onFileSelected(event: any) {
    const files = event.target.files[0];
    if (files.size > 80000) {
      alert('El tamaño  de imagen maximo es 80 KB');
      event.target.value = null;
    }else{
        const reader = new FileReader();
        reader.onload = () => {
        let base64 = reader.result as string;
        this.producto.imagen = base64;
      };
      reader.readAsDataURL(files);
    }
  }

  cancelarOperacion(){
    this.router.navigate(['producto-list']);
  }

}
