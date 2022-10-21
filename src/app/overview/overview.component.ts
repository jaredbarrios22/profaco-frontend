import { Component, OnInit } from '@angular/core';
import { calls } from 'src/app/calls/calls.service';
import { Router } from '@angular/router';
import { DetallesPedidoComponent } from '../detalles-pedido/detalles-pedido.component';
import { DetallesServiceService } from '../calls/detalles-service.service';
import { MatDialog } from '@angular/material/dialog';

interface pedido{
  no_pedido: Number;
  estado_pedido: String;
  fecha_pedido: Date;
  nombre_cliente: String;
  apellido_cliente: String;
  telefono: Number;
  email: String;
  direccion: String;
  municipio: Number;
  zona: Number;
  departamento: String;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  pedidos = null;
  estado= false;
  municipioslista: any;
   constructor(private calls: calls, private router:Router, private detallesS:DetallesServiceService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.reporte();
    this.munnombre();
    this.detallesS.$detalles.subscribe((estado)=>{this.detallesS = estado})
  }

  async reporte(){
    this.pedidos = await this.calls.reportePedidos().toPromise(); 
    // console.log(this.pedidos);
  }

  async munnombre(){
    this.municipioslista = await this.calls.municipios().toPromise();
  }

  modificacion(numero: any){
    console.log(numero);
  }

  productosModificar(){
    this.router.navigate(['productos'])  
  }
  
  ventasReporte(){
    this.router.navigate(['ventas'])
  }
  regresar(){
    this.router.navigate(['principal'])
  }

 
  empleados(){
    this.router.navigate(['empleados'])
  }

  abrirDetalles(data:any){
    const dialogRef = this.dialog.open(DetallesPedidoComponent, {
      width: 'auto',
      height: 'auto',
      data: data
    });
  }
}
