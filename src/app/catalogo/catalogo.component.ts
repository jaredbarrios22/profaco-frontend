import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { calls } from 'src/app/calls/calls.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  medicina: any;

  constructor( private router:Router, private calls: calls) { }

  ngOnInit(): void {
    this.reporteProducto();
  }

  regresar(){
    
      this.router.navigate(['principal'])  
    
  }

  async reporteProducto(){
    this.medicina = await this.calls.reporteProductos().toPromise(); 
  
    console.log(this.medicina);
  };
}
