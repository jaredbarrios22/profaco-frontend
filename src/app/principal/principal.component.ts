import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { calls } from 'src/app/calls/calls.service';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private calls: calls, private router:Router) { }

  ngOnInit(): void {
   
  }



  login(){
    this.router.navigate(['inicio-sesion'])  
  };
  catalogo(){
    this.router.navigate(['catalogo'])  
  }
}
