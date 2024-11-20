import { Component } from '@angular/core';
import { EmpleadoService } from './empleado.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';

export class User{
  dni: string = "";
  nombre: string = "";
  rol: string = "";
  id_empresa: string = ""; 
  fotoperfil:string = "";
}

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
  providers:[],
  
})
export class EmpleadoComponent {
  

  usuario: User = new User();

  constructor(private empleadoService: EmpleadoService,private router:Router) {
    this.empleadoService.informaciondeempleado().subscribe(
      response=>{
        this.empleadoService.infoempleado.dni = this.usuario.dni = response.dni;
        this.empleadoService.infoempleado.id_empresa = this.usuario.id_empresa = response.id_empresa;
        this.empleadoService.infoempleado.rol = this.usuario.rol = response.rol;
        this.empleadoService.infoempleado.nombre = this.usuario.nombre = response.nombre;
      },
      error =>{
         const token = localStorage.getItem('access_token');
         if(token){localStorage.removeItem('access_token');
          this.router.navigate(['']);
         }else{
         this.router.navigate(['/inicio']);
         }
      }
    )
  }

  cerrarsesion(){
    const token = localStorage.getItem('access_token');
    if(token){localStorage.removeItem('access_token');
      this.router.navigate(['']);
    }
  }

 

 


}
