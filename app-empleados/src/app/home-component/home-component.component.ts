import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoCComponent } from '../empleado-hijo-c/empleado-hijo-c.component';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [FormsModule, CommonModule, EmpleadoHijoCComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{
  constructor(private empleadosService:EmpleadosService){
    
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.obtenerEmpleados();
  }

  empleados:Empleado[] = [];

  titulo = 'Listado de empleados';
  nombre: string = "";
  apellido: string = "";
  cargo: string = '';
  salario:number = 0;

  registrar():void{
    let empleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
    this.empleadosService.agregarEmpleado(empleado);
  }

  eliminarUsuario(indice:number):void{
    this.empleadosService.eliminarEmpleado(indice);
  }
}
