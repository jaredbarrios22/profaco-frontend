import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pedidoform',
  templateUrl: './pedidoform.component.html',
  styleUrls: ['./pedidoform.component.css']
})
export class PedidoformComponent implements OnInit {
  pedidoForm:FormGroup;
  constructor() {
    

    this.pedidoForm = new FormGroup(
      {
        Nombre: new FormControl(''),
        Apellido : new FormControl(''),
        Correo : new FormControl(''),
        Telefono : new FormControl(''),
        Direccion : new FormControl(''),

      }
    );
  }

  ngOnInit(): void {
  }

}
