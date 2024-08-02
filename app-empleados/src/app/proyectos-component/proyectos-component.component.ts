import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit{
  constructor(private router:Router, private empleadosService:EmpleadosService){

  }

  ngOnInit(): void {

  }

  titulo = 'Registrar empleado';
  nombre: string = "";
  apellido: string = "";
  cargo: string = '';
  salario:number = 0;

  registrar():void{
    let empleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
    this.empleadosService.agregarEmpleado(empleado);
    this.router.navigate([''])
  }
}
