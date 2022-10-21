import { Component, OnInit } from '@angular/core';
import { calls } from 'src/app/calls/calls.service';
import { Router } from '@angular/router';
import { DetallesPedidoComponent } from '../detalles-pedido/detalles-pedido.component';
import { MatDialog } from '@angular/material/dialog';
import { DetallesVentaComponent } from '../detalles-venta/detalles-venta.component';

interface venta{
  codigo_venta: Number;
  no_pedido: Number;
  cantidad: Number;
  fecha: Date;
  monto: Number;
 
}


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  

  constructor(private calls: calls, private router:Router,
    private dialog: MatDialog) { }
  ventas = null;
  ngOnInit(): void {
    this.reporte();
  }

  async reporte(){
    this.ventas = await this.calls.reporteVentas().toPromise(); 
    console.log(this.ventas);
  }
  
  regresar(){
    this.router.navigate(['overview'])
  }

 
 
 
  async consultar(numero: number){
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
}
