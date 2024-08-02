import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualiza-usuario.component.html',
  styleUrl: './actualiza-usuario.component.css'
})
export class ActualizaUsuarioComponent  implements OnInit{
  constructor(private router:Router, private empleadosService:EmpleadosService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.nombreAccion = this.accion == 1? "Actualizar" : "Eliminar";
    let empleado = this.empleadosService.obtenerEmpleado(this.indice);
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.cargo = empleado.cargo;
    this.salario = empleado.salario;
  }

  indice: number = 0;
  accion: number = 0;
  nombreAccion:string = "";
  titulo = 'Modificar empleado';
  nombre: string = "";
  apellido: string = "";
  cargo: string = '';
  salario:number = 0;

  actualizar():void{
    if(this.accion == 1){
      let empleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario)
      this.empleadosService.modificarEmpleado(empleado, this.indice);
      this.router.navigate(['']);
    }
    else{
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }
    
  }
}
