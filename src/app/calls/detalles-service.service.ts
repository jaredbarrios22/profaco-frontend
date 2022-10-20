import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetallesServiceService {

  constructor() { }

  $detalles = new EventEmitter<any>();
}
