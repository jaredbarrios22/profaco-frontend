import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'profaco';

constructor(private router:Router){}


ngOnInit(){
  this.router.navigate(['principal'])
  //this.router.navigate(['pedidoform']) 
}


}



