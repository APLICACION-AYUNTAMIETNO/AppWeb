import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpleadoComponent } from '../empleado.component';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-tecnicos',
  standalone: true,
  imports: [EmpleadoComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css','../empleado.component.css'],
})
export class TecnicosComponent {
  tecnicos: Array<any> = []

  numeropaginadescargadas = 0
  
  numeropagina = 0

  numero_tecnicos_por_pagina = 10;



  obtenertecn: FormGroup;

  constructor(private readonly empleadoService: EmpleadoService){
    this.obtenertecn= new FormGroup({
      nombre: new FormControl('', Validators.required),  // Agregar validaciones si es necesario
    });
    this.obtenertecnicos()

  }



  haytecnicos():boolean{
    return this.tecnicos.length != 0
  }


  obtenertecnicos() {
    const nombre = this.obtenertecn.get('nombre')?.value;
    
    // Asegúrate de limpiar la lista de tecnicos antes de hacer una nueva búsqueda
    this.tecnicos = [];
    
    this.empleadoService.obtenertecnicos(nombre, this.numeropaginadescargadas, this.numero_tecnicos_por_pagina)
      .subscribe(
        (data) => {
          // Verifica que data.array existe y es un arreglo
          if (data && Array.isArray(data)) {
            // Añadir los tecnicos encontrados a la lista
            data.forEach((departamento: any) => {
              this.tecnicos.push(departamento);
            });
          } else {
            // En caso de que data.array no esté presente o no sea un arreglo
            console.error('No se encontraron tecnicos o la respuesta no es válida', data);
          }
        },
        (error) => {
          // Manejo de errores en caso de que la solicitud falle
          console.error('Error al obtener los tecnicos', error);
          // Opcional: mostrar un mensaje de error al usuario
        }
      );
  }
}
