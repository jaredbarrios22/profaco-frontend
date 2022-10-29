import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { calls } from 'src/app/calls/calls.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-pedidoform',
  templateUrl: './pedidoform.component.html',
  styleUrls: ['./pedidoform.component.css']
})
export class PedidoformComponent implements OnInit {
  pedidoForm:FormGroup;
  contenidoingreso: any;
  constructor(private router:Router, private calls: calls) {
    

    this.pedidoForm = new FormGroup(
      {
        Nombre: new FormControl(''),
        Apellido : new FormControl(''),
        Correo : new FormControl(''),
        Telefono : new FormControl(''),
        Direccion : new FormControl(''),
        Municipio: new FormControl (''),
        Departamento: new FormControl(''),
      }
    );
  }

  ngOnInit(): void {
    this.contenidoingreso = this.calls.arreglo;
  }



  registrarpedido(){
    const num1 = new Date();
    const now = Number(new Date());
    const corte = String(now).slice(-9); 
    const corteNum = Number(corte);
    console.log(corteNum)
    console.log(now)

    const ingpedido = {
      "no_pedido": corteNum,
      "estado_pedido": "esperando",
      "fecha_pedido": num1,
      "nombre_cliente": this.pedidoForm.get('Nombre')?.value,
      "apellido_cliente": this.pedidoForm.get('Apellido')?.value,
      "telefono": Number(this.pedidoForm.get('Telefono')?.value),
      "email":this.pedidoForm.get('Correo')?.value,
      "direccion": this.pedidoForm.get('Direccion')?.value,
      "municipio": 2,//Number(this.pedidoForm.get('Municipio')?.value),
      "zona": 0,
      "departamento": "guatemala"//this.pedidoForm.get('Departamento')?.value
  }


  console.log(ingpedido)
  let a = this.calls.registrarPedido(ingpedido).toPromise();
  console.log(this.contenidoingreso)
  delay(3000)
  for (let i = 0; i < this.contenidoingreso.length; i++) {
   const element = this.contenidoingreso[i];
    const contpedido =  {
      "id": 0,
      "producto": element.producto,
      "cantidad": element.cantidad,
      "no_pedido": corteNum
  }
  delay(2500)
    console.log(contpedido)
    let b = this.calls.registrarPedidoContenido(contpedido).toPromise();
    console.log(b);
  }
  swal.fire({
    title: 'Orden realizada con exito, No.' + corteNum,
    showDenyButton: false,
    confirmButtonText: 'Aceptar',
    denyButtonText: 'No',
    icon: 'success',
    customClass: {
      actions: 'my-actions',
      confirmButton: 'order-1',
      denyButton: 'order-2',
    }
  });

  
  this.router.navigate(['catalogo']);
  }
}
