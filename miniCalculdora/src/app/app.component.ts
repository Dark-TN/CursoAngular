import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculdora';

  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  sumar(): void{
    this.resultado = this.numero1 + this.numero2;
  }
  restar(): void{
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar(): void{
    this.resultado = this.numero1 * this.numero2;
  }
}
