import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { calls } from 'src/app/calls/calls.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  medicina: any;
  contenidos: any;
  total = 0;
  constructor(private calls: calls,  private router:Router) { }

  ngOnInit(): void {
    this.reporteProducto();
    this.contenidos = this.calls.arreglo;
    this.calcularTotal();
  }


  removeritem(pedido: any){
    const index = this.calls.arreglo.indexOf(pedido);
    console.log(index)
    if (index > -1) { 
      this.calls.arreglo.splice(index, 1); 
     // console.log(this.calls.arreglo);
    }
    this.contenidos = this.calls.arreglo;
    //console.log(this.contenidos);
    this.calcularTotal();
  }

  vaciarcarrito(){
    swal.fire({
      title: '¿Desea vaciar el carrito?',
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
        this.calls.arreglo.length = 0;
        console.log(this.calls.arreglo);
        swal.fire('Carrito vaciado', '', 'success')
        this.regresar();
        
      }
    })

  }


  terminarPedido(){
  if (this.calls.arreglo.length < 1) {
    this.error();
  }else{
    
    swal.fire({
      title: '¿Desea avanzar con su pedido?',
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
        console.log("continuar pedido");
        this.router.navigate(['pedidoform'])   
        //continuar pedido
        
      }
    })  
  }
}


error(){
  swal.fire({
    title: 'El carrito se encuentra vacio',
    showDenyButton: false,
    confirmButtonText: 'Aceptar',
    denyButtonText: 'No',
    icon: 'warning',
    customClass: {
      actions: 'my-actions',
      confirmButton: 'order-1',
      denyButton: 'order-2',
    }
  });
 }

calcularTotal(){
  this.total = 0;
  for (let index = 0; index < this.contenidos.length; index++) {
    const element = this.contenidos[index];
    this.total += Number(element.precio) * Number(element.cantidad);
  }
}
  async reporteProducto(){
    this.medicina = await this.calls.reporteProductos().toPromise(); 
  
   // console.log(this.medicina);
  };


  regresar(){ 
      this.router.navigate(['catalogo'])    
  }
}
