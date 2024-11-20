import { Component } from '@angular/core';
import { EmpleadoComponent } from '../empleado.component';
import { EmpleadoService } from '../empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-micuenta',
  standalone: true,
  imports: [EmpleadoComponent,CommonModule],
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css','../empleado.component.css'],
  providers:[EmpleadoService],
})
export class MicuentaComponent {

  infoempleado:any;

constructor(private readonly empleadoService:EmpleadoService){
  this.infoempleado = empleadoService.infoempleado;
}


}
