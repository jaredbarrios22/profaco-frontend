import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { cilCenterFocus } from '@coreui/icons';
import { calls } from 'src/app/calls/calls.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { DetallesVentaComponent } from '../detalles-venta/detalles-venta.component';
import { TarjetaproductoComponent } from '../tarjetaproducto/tarjetaproducto.component';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  medicina: any;
  consultarForm: FormGroup;
  constructor( private router:Router, private calls: calls,  private dialog: MatDialog) { 

    this.consultarForm = new FormGroup(
      {
        id_pedido: new FormControl(''),
      }
    );

  }

  ngOnInit(): void {
    this.reporteProducto();
  }


  regresar(){
   this.router.navigate(['principal'])   
  }
  contacto(){
    this.router.navigate(['contacto'])  
  }
  
  
  async reporteProducto(){
    this.medicina = await this.calls.reporteProductos().toPromise(); 
  
    console.log(this.medicina);
  };

  
  carrito(){
    
    
    this.router.navigate(['carrito']);
  //   const dialogRef = this.dialog.open(CarritoComponent, {
  // });
  }





  async consultarPedido(){

    let numero = Number(this.consultarForm.get('id_pedido')?.value)
    console.log('orueboa', numero);
    this.calls.consultaPedido(numero).subscribe((pedido) => {
      console.log('Respuesta',pedido); 
      const dialogRef = this.dialog.open(DetallesVentaComponent, {
         width: '60%',
         height: 'auto',
        
        data: pedido,
      })
      console.log(pedido);
    });  
  }


ordenar(data:any){ 
  const dialogRef = this.dialog.open(TarjetaproductoComponent, {
    // width: '25%',
    // height: '25%',
    data: data
  });
}

}
