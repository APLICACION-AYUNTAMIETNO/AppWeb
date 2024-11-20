import { Component } from '@angular/core';
import { EmpleadoComponent } from "../empleado.component";

@Component({
  selector: 'app-modificar-cuenta',
  standalone: true,
  imports: [EmpleadoComponent],
  templateUrl: './modificar-cuenta.component.html',
  styleUrl: './modificar-cuenta.component.css'
})
export class ModificarCuentaComponent {

}
