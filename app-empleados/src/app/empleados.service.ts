import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EmpleadosService{
    constructor(private servicioAlert:ServicioEmpleadosService){

    }

    private empleados: Empleado[] = [
        new Empleado("Eduardo","Ruvalcaba","Desarrollo",12443),
        new Empleado("Peter","Parker","Dreccion",87465),
        new Empleado("Ostras","Pedrin","Gerente",4668),
        new Empleado("Hugh","Jackman","Actor",83445)
      ];

    obtenerEmpleados():Empleado[]{
        return this.empleados;
    }

    obtenerEmpleado(indice:number):Empleado{
        return this.empleados[indice];
    }

    agregarEmpleado(empleado: Empleado):void{
        this.servicioAlert.muestraMensaje("Nombre del empleado: " + empleado.nombre);
        this.empleados.push(empleado);
    }

    eliminarEmpleado(indice: number):void{
        this.empleados.splice(indice, 1);
    }

    modificarEmpleado(empleado:Empleado, indice:number):void{
        let empleadoActual =this.empleados[indice];
        empleadoActual.nombre = empleado.nombre;
        empleadoActual.apellido = empleado.apellido;
        empleadoActual.cargo = empleado.cargo;
        empleadoActual.salario = empleado.salario;
    }
}