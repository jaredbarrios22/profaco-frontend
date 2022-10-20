import { formatDate } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { calls } from 'src/app/calls/calls.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import swal from 'sweetalert2';




@Component({
  selector: 'app-detalles-pedido',
  templateUrl: './detalles-pedido.component.html',
  styleUrls: ['./detalles-pedido.component.css']
})

export class DetallesPedidoComponent implements OnInit {
  contenidopedido: any;
  productos: any;
  estados = null; 
  ingresoForm:FormGroup;
  pedido = null;
  
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private pedidos: calls,
    private router: Router,
    private dialog:MatDialog
  ) { 


    this.ingresoForm = new FormGroup(
      {
        no_pedido: new FormControl(''),
        estado : new FormControl(''),
        fecha : new FormControl(''),
        nombre : new FormControl(''),
        telefono: new FormControl(''),
        correo: new FormControl(''),
        direccion: new FormControl(''),
        departamento: new FormControl(''),
        estado2: new FormControl('')
      }
    );

  }



  async ngOnInit(): Promise<void> {
    this.estados = await this.pedidos.estadoPedido().toPromise(); 
    console.log(this.estados);
    console.log(this.data);
    this.pedido = this.data;
    this.contenido();
    this.reporteProducto();
    // this.ingresoForm.controls['no_pedido'].setValue(this.data.no_pedido);
    this.ingresoForm.controls['estado'].setValue(this.data.estado_pedido);
    this.ingresoForm.controls['fecha'].setValue(moment(this.data.fecha_pedido).format('DD/MM/YYYY'));
    this.ingresoForm.controls['nombre'].setValue(this.data.nombre_cliente);
    this.ingresoForm.controls['telefono'].setValue(this.data.telefono);
    this.ingresoForm.controls['correo'].setValue(this.data.email);
    this.ingresoForm.controls['direccion'].setValue(this.data.direccion);
    this.ingresoForm.controls['departamento'].setValue(this.data.departamento);
  }

  async contenido(){
    this.contenidopedido = await this.pedidos.contenidoPedido().toPromise(); 
    console.log(this.contenidopedido);
  }

  async reporteProducto(){
    this.productos = await this.pedidos.reporteProductos().toPromise(); 
  
    console.log(this.productos);
  }

  confirmarPedido(data: any){
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
      if (result.isConfirmed) {
        //confirmar cambios
        
        swal.fire('Cambios confirmados', '', 'success')
      }
    })
  }


  cerrardetalles(){
    const dialogRef = this.dialog.closeAll();
  }
}
