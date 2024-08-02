import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  nombre: string = "";
  apellido: string = "";
  cargo: string = "";
  registrado: boolean = false;
  mensaje:string = "";
  entradas: { titulo: string }[] = [];

constructor(){
  this.entradas = [
    {titulo:"Entrada 1"} ,
    {titulo:"Entrada 2"}, 
    {titulo:"Entrada 3"}, 
    {titulo:"Entrada 4"}, 
    {titulo:"Entrada 5"}
  ];
}

  registrar(): void{
    this.registrado = true;
    this.mensaje = "Usuario registrado correctamente";
  }

}
