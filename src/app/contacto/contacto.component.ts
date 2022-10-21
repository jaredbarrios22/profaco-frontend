import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconImportModule } from 'mat-icon-import';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  informacion(){
    this.router.navigate(['informacion']) 
  }
  regresar(){
    this.router.navigate(['principal'])  
  }
}
