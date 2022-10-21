import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { calls } from 'src/app/calls/calls.service';
import { RegistrarempleadoComponent } from '../registrarempleado/registrarempleado.component';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  usuarioslista: any;
  
  constructor(private router:Router, private calls: calls, private dialog:MatDialog) {



   }

  async ngOnInit(): Promise<void> {
    this.usuarioslista = await this.calls.usuarios().toPromise();
  }


ingresarempleado(){
  const dialogRef = this.dialog.open(RegistrarempleadoComponent,{
    width: 'auto',
    height: 'auto'
  }
   )
}

regresar(){
  this.router.navigate(['overview']);
}

}
