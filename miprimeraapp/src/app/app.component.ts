import { Component } from '@angular/core';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [RouterOutlet, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miprimeraapp';
}
