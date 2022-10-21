import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { calls } from '../calls/calls.service';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: ['./detalles-venta.component.css']
})
export class DetallesVentaComponent implements OnInit {
  contenidopedido: any;
  productos: any;
  pedido: any;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private pedidos: calls,
    private router: Router,
    private dialog:MatDialog
  )  { 

}


  cerrardetalles(){
    const dialogRef = this.dialog.closeAll();
  }

  async ngOnInit(): Promise<void> {
    this.contenido();
    this.reporteProducto();
  }



  async contenido(){
    this.contenidopedido = await this.pedidos.contenidoPedido().toPromise(); 
    console.log(this.contenidopedido);
  }
  
  async reporteProducto(){
    this.productos = await this.pedidos.reporteProductos().toPromise(); 
  
    console.log(this.productos);
  }


}
