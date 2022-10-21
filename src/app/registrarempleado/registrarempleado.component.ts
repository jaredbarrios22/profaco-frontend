import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { calls } from 'src/app/calls/calls.service';
@Component({
  selector: 'app-registrarempleado',
  templateUrl: './registrarempleado.component.html',
  styleUrls: ['./registrarempleado.component.css']
})
export class RegistrarempleadoComponent implements OnInit {
  ingresarForm:FormGroup;
  constructor(private router:Router, private calls: calls) {

    this.ingresarForm = new FormGroup({
        usuarioE: new FormControl('', [Validators.required]),
        contrasenaE: new FormControl('', [Validators.required]),
        contrasena2E: new FormControl('', [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        direccionE: new FormControl('', [Validators.required]),
        municipioE: new FormControl('', [Validators.required]),
        zonaE: new FormControl('', [Validators.required]),
        emailE: new FormControl('', [Validators.required]),
        telefonoE: new FormControl('', [Validators.required]),
    });

   }

  ngOnInit(): void {
  }

}
