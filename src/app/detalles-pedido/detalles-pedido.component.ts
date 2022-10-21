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
import { OverviewComponent } from '../overview/overview.component';




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
  a: any;
  total = 0;
  precioP: any;
  
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    @Inject (MAT_DIALOG_DATA) public desde: number,
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
    console.log(this.desde);
    this.pedido = this.data;
    this.contenido();
    this.reporteProducto();

    // this.ingresoForm.controls['no_pedido'].setValue(this.data.no_pedido);
    // this.ingresoForm.controls['estado'].setValue(this.data.estado_pedido);
    // this.ingresoForm.controls['fecha'].setValue(moment(this.data.fecha_pedido).format('DD/MM/YYYY'));
    // this.ingresoForm.controls['nombre'].setValue(this.data.nombre_cliente);
    // this.ingresoForm.controls['telefono'].setValue(this.data.telefono);
    // this.ingresoForm.controls['correo'].setValue(this.data.email);
    // this.ingresoForm.controls['direccion'].setValue(this.data.direccion);
    // this.ingresoForm.controls['departamento'].setValue(this.data.departamento);
  }

  async contenido(){
    this.contenidopedido = await this.pedidos.contenidoPedido().toPromise(); 
    console.log(this.contenidopedido);
  }

  async reporteProducto(){
    this.productos = await this.pedidos.reporteProductos().toPromise(); 
  
    console.log(this.productos);
  }

  confirmarPedido(){
    const actualizacionpedido = {
      
        "no_pedido": this.data.no_pedido,
        "estado_pedido": "confirmado",
        "fecha_pedido": this.data.fecha_pedido,
        "nombre_cliente": this.data.nombre_cliente,
        "apellido_cliente": this.data.apellido_cliente,
        "telefono": this.data.telefono,
        "email": this.data.email,
        "direccion": this.data.direccion,
        "municipio": this.data.municipio,
        "zona": this.data.zona,
        "departamento": this.data.departamento
    
    }

    console.log(actualizacionpedido);
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
        let a = this.pedidos.registrarPedido(actualizacionpedido).toPromise();
        console.log(a);
        swal.fire('Cambios confirmados', '', 'success')
      }
    })
  }

  async terminarPedido(){
    const actualizacionpedido = {
      
        "no_pedido": this.data.no_pedido,
        "estado_pedido": "terminado",
        "fecha_pedido": this.data.fecha_pedido,
        "nombre_cliente": this.data.nombre_cliente,
        "apellido_cliente": this.data.apellido_cliente,
        "telefono": this.data.telefono,
        "email": this.data.email,
        "direccion": this.data.direccion,
        "municipio": this.data.municipio,
        "zona": this.data.zona,
        "departamento": this.data.departamento
    
    }

    console.log(actualizacionpedido);
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
        this.registrarventa();
        let a = this.pedidos.registrarPedido(actualizacionpedido).toPromise();
        console.log(a);
        
        swal.fire('Cambios confirmados', '', 'success')
      }
    })
 

  }


async registrarventa(){
   //registrar venta

  
   //this.contenido();
   //let precioP = await this.pedidos.reporteProductos().toPromise();
   console.log(this.productos);
   console.log(this.contenidopedido);
   for (let index = 0; index < this.contenidopedido.length; index++) {
     const element = this.contenidopedido[index];
     console.log(element.no_pedido);
     if (element.no_pedido == this.data.no_pedido) {
       for (let I2 = 0; I2 < this.productos.length; I2++) {
         const element2 = this.productos[I2];
         if (element2.codigo_producto == element.producto) {
           this.total += (element2.precio * element.cantidad);

         }
       }
     }
   }
   const now = new Date();
   console.log(now);
     const nuevaVenta = {
       "codigo_venta": 0,
       "no_pedido": Number(this.data.no_pedido),
       "cantidad": null,
       "fecha": now,
       "monto": this.total
     }

     console.log(nuevaVenta);
     let aa = this.pedidos.registrarVenta(nuevaVenta).toPromise();
     console.log(aa);
}
 

  cerrardetalles(){
    const dialogRef = this.dialog.closeAll();
    
  }
}
