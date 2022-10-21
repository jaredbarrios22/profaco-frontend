import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import swal from 'sweetalert2';
import { calls } from 'src/app/calls/calls.service';


@Component({
  selector: 'app-tarjetaproducto',
  templateUrl: './tarjetaproducto.component.html',
  styleUrls: ['./tarjetaproducto.component.css']
})




export class TarjetaproductoComponent implements OnInit {
  carritoForm: FormGroup;
  //arreglo: any =[];
  constructor( @Inject (MAT_DIALOG_DATA) public data: any, private calls: calls) { 
   
    this.carritoForm = new FormGroup(
      {
        cantidad: new FormControl(''),
      })

  }

  ngOnInit(): void {
   // console.log(this.data);
  }


  ordenar( data: any){
    const inputValue = 345.67
const inputStep = 0.01

const now = Number(new Date());
const corte = String(now).slice(-12); 
const corteNum = Number(corte);
swal.fire({
  title: '¿Desea agregar este contenido a su pedido?',
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
    
    let carrito = {    
        id: 0,
        producto: data.codigo_producto,
        nombre_producto: data.nombre_producto,
        precio: data.precio,
        imagen: data.imagen,
        cantidad: Number(this.carritoForm.get('cantidad')?.value),
        no_pedido: 0 
    }

    console.log(carrito);
    this.calls.arreglo.push(carrito);
    console.log(this.calls.arreglo);
    swal.fire('Agregado al pedido', '', 'success')
  }
})




  }

}
