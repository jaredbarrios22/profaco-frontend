import { Component, OnInit } from '@angular/core';
import { calls } from 'src/app/calls/calls.service';
import { Router } from '@angular/router';

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

  constructor(private calls: calls, private router:Router) { }
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

  consultar(numero: any){
    console.log(numero);
  }
}
