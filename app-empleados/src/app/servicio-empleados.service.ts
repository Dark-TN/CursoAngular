import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string):void{
    alert(mensaje);
  }
}
