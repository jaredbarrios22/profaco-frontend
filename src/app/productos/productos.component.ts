import { Component, Inject, OnInit } from '@angular/core';
import { calls } from 'src/app/calls/calls.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { MatDialog } from '@angular/material/dialog';
import swal from 'sweetalert2';

interface producto{
  codigo_producto: Number;
  nombre_producto: String;
  descripcion_producto: String;
  cantidad: Number;
  estado_producto: Number;
  precio: Number;
}


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = null;
  ingresarForm:FormGroup;


  constructor(
    private calls: calls, 
    private router:Router,
    private dialog:MatDialog
    ) {

    this.ingresarForm = new FormGroup(
      {
        producto: new FormControl(''),
        descripcion : new FormControl(''),
        cantidad : new FormControl(''),
        estado : new FormControl(''),
        precio : new FormControl(''),
 
      }
    );



   }
 
  ngOnInit(): void {
    this.reporteProducto();
  }

  async reporteProducto(){
    this.productos = await this.calls.reporteProductos().toPromise(); 
  
    console.log(this.productos);
  }

  modificar(numero: any){
    console.log(numero);
    const dialogRef = this.dialog.open(EditarProductoComponent,{
      width: 'auto',
      height: 'auto',
      data:numero
    });

  }

  ingresarprod(){

    const nuevoproducto = {
        "codigo_producto": 0,
        "nombre_producto": this.ingresarForm.get('producto')?.value,
        "descripcion_producto": this.ingresarForm.get('descripcion')?.value,
        "cantidad": Number(this.ingresarForm.get('cantidad')?.value),
        "estado_producto":Number(this.ingresarForm.get('estado')?.value),
        "precio": Number(this.ingresarForm.get('precio')?.value),
        "imagen": null
    } 
    console.log(nuevoproducto);
    swal.fire({
      title: '¿Desea agregar el nuevo producto?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-1',
        denyButton: 'order-2',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        //confirmar cambios
        let a = this.calls.registrarProducto(nuevoproducto).toPromise();
        console.log(a);
        swal.fire('Cambios confirmados', '', 'success')
      }
    })

   this.ngOnInit();
  }

  administracion(){
    this.router.navigate(['overview'])  
  }
}
