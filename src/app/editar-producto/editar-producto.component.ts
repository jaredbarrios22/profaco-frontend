import { formatDate } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { calls } from 'src/app/calls/calls.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  contenidopedido: any;
  productos: any;
  estadosP: any; 
  editarForm:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private calls: calls,
    private router: Router,
    private dialog:MatDialog
  ) {

    this.editarForm = new FormGroup(
      {
        producto: new FormControl(''),
        descripcion : new FormControl(''),
        cantidad : new FormControl(''),
        estadoP : new FormControl(''),
        precio: new FormControl(''),

      }
    );

   }

  async ngOnInit(): Promise<void> {

    this.estadosP = await this.calls.estadoProducto().toPromise(); 
    console.log(this.estadosP);
    console.log(this.data);
    this.editarForm.controls['producto'].setValue(this.data.nombre_producto);
    this.editarForm.controls['descripcion'].setValue(this.data.descripcion_producto);
    this.editarForm.controls['cantidad'].setValue(this.data.cantidad);
    this.editarForm.controls['estadoP'].setValue(this.data.estado_producto);
    this.editarForm.controls['precio'].setValue(this.data.precio);
  }


  
  cerraredicion(){
    const dialogRef = this.dialog.closeAll();
  }


  agregarproducto(){
  console.log(this.data);
    const ingresoproducto =     {
      "codigo_producto": this.data.codigo_producto,
      "nombre_producto": this.editarForm.get('producto')?.value,
      "descripcion_producto": this.editarForm.get('descripcion')?.value,
      "cantidad": Number(this.editarForm.get('cantidad')?.value),
      "estado_producto":Number(this.editarForm.get('estadoP')?.value),
      "precio": Number(this.editarForm.get('precio')?.value),
      "imagen": this.data.imagen
  }


console.log("estado: ", this.editarForm.get('estadoP')?.value);
console.log(ingresoproducto);
 
swal.fire({
    title: '¿Desea confirmar los cambios?',
    showDenyButton: true,
    confirmButtonText: 'Si',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      confirmButton: 'order-1',
      denyButton: 'order-2',
    }
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      //confirmar cambios

      let a = this.calls.registrarProducto(ingresoproducto).toPromise();
      console.log(a);
      swal.fire('Cambios confirmados', '', 'success')
    }
  })


  }
}
