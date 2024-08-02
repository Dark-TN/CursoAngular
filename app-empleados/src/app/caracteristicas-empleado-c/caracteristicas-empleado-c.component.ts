import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  constructor(private servicioEmpleadoService: ServicioEmpleadosService){

  }

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristica(caracteristica:string): void{
    this.servicioEmpleadoService.muestraMensaje("Nueva caracteristica: " + caracteristica);
    this.caracteristicasEmpleados.emit(caracteristica);
  }
}
