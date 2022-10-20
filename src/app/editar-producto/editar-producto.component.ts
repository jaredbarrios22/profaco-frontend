import { formatDate } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { calls } from 'src/app/calls/calls.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

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
    this.editarForm.controls['producto'].setValue(this.data.nombre_producto);
    this.editarForm.controls['descripcion'].setValue(this.data.descripcion_producto);
    this.editarForm.controls['cantidad'].setValue(this.data.cantidad);
    this.editarForm.controls['estadoP'].setValue(this.data.estado_producto);


    this.editarForm.controls['precio'].setValue(this.data.precio);
  }


  
  cerraredicion(){
    const dialogRef = this.dialog.closeAll();
  }

}
