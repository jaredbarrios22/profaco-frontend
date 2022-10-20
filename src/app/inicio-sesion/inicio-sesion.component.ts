import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { calls } from 'src/app/calls/calls.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
 usuarioslista: any;
 logForm:FormGroup;
  constructor(private router:Router, private calls: calls) {

    this.logForm = new FormGroup(
      {
        user: new FormControl(''),
        pass : new FormControl(''),
  
      }
    );


   }

  async ngOnInit(): Promise<void> {
    this.usuarioslista = await this.calls.usuarios().toPromise();
  }

 error(){
  swal.fire({
    title: 'Usuario o contraseña incorrectos',
    showDenyButton: false,
    confirmButtonText: 'Aceptar',
    denyButtonText: 'No',
    icon: 'error',
    customClass: {
      actions: 'my-actions',
      confirmButton: 'order-1',
      denyButton: 'order-2',
    }
  });
 }

 aceptar(){
  swal.fire({
    title: 'Ha ingresado con exito',
    showDenyButton: false,
    confirmButtonText: 'Aceptar',
    denyButtonText: 'No',
    icon: 'success',
    customClass: {
      actions: 'my-actions',
      confirmButton: 'order-1',
      denyButton: 'order-2',
    }
  });
 }

  administracion(){

    let usuarioingreso = this.logForm.get('user')?.value
    let contraingreso = this.logForm.get('pass')?.value
  
 
    console.log(this.usuarioslista); 
    for (let index = 0; index < this.usuarioslista.length; index++) {
      const element = this.usuarioslista[index];
      if(element.usuario == usuarioingreso && element.contrasena == contraingreso){
        
        this.router.navigate(['overview'])  
        this.aceptar();
       break;
      }else{
          this.error(); 
      }
    }
   
    // console.log(usuarioingreso);
    // console.log(contraingreso);
  
  }
}