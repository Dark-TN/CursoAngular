import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoCComponent } from '../caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleado-hijo-c',
  standalone: true,
  imports: [CaracteristicasEmpleadoCComponent, CommonModule, RouterLink],
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {
  @Input() empLista: Empleado;
  @Input() indice: number;


  @Output() indiceEliminar = new EventEmitter<number>();
  caracteristicas:string[] = [];

  guardarCaracteristica(caracteristica:string):void{
    this.caracteristicas.push(caracteristica);
  }
  
  eliminarUsuario(): void{
    this.indiceEliminar.emit(this.indice);
  }
}
