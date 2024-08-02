import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  //template in line
  //template: '<p>Aqui iria un empleado</p>',
  styleUrl: './empleado.component.css'
  //estilo in line
  //styles: ['p{background-color: red;}'] 
})
export class EmpleadoComponent {
  nombre = 'Eduardo';
  apellido = 'Ruvalcaba';
  private anoNacimiento = 1996;
  empresa = 'Empresa';
  enabledTxtEmpresa = true;
  usuarioRegistrado = false;
  private usuarios = ["Eduardo", "Luis"];
  msjUsuarioRegistrado = '';
  msjUsuariosRegistrados = 'No hay usuarios registrados';

  getAnoNacimiento(){
    return this.anoNacimiento;
  }

  getEmpresa(){
    return this.empresa;
  }

  setEmpresa(empresa: string){
    this.empresa = empresa;
    if(this.empresa == ''){
      this.empresa = 'Empresa';
    }
  }

  setUsuarioRegistrado(usuario: string){
    this.usuarioRegistrado = this.usuarios.includes(usuario); 
    let msj = this.usuarioRegistrado? 'El usuario ' + usuario + ' esta registrado' : 'El usuario ' + usuario +' no esta registrado';
    this.msjUsuarioRegistrado = msj;
    //alert(msj);
  }

  onRegistrar(e: Event){
    if((<HTMLInputElement>e.target).value == 'si'){
      this.msjUsuariosRegistrados = "Usuario registrado";
    }
    else{
      this.msjUsuariosRegistrados = "Usuario no registrado";
    }
  }
}
