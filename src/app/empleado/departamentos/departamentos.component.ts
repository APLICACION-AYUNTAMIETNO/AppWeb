import { Component } from '@angular/core';
import { EmpleadoComponent } from "../empleado.component";
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [EmpleadoComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css','../empleado.component.css']
})
export class DepartamentosComponent {
  departamentos: Array<any> = []

  numeropaginadescargadas = 0
  
  numeropagina = 0

  numero_departamentos_por_pagina = 10;

  


  obtenerdepart: FormGroup;

  constructor(private readonly empleadoService: EmpleadoService){
    this.obtenerdepart= new FormGroup({
      nombre: new FormControl('', Validators.required),  // Agregar validaciones si es necesario
    });
    this.obtenerdepartamentos()

  }



  haydepartamentos():boolean{
    return this.departamentos.length != 0
  }


  obtenerdepartamentos() {
    const nombre = this.obtenerdepart.get('nombre')?.value;
    
    // Asegúrate de limpiar la lista de departamentos antes de hacer una nueva búsqueda
    this.departamentos = [];
    
    this.empleadoService.obtenerdepartamentos(nombre, this.numeropaginadescargadas, this.numero_departamentos_por_pagina)
      .subscribe(
        (data) => {
          // Verifica que data.array existe y es un arreglo
          if (data && Array.isArray(data)) {
            // Añadir los departamentos encontrados a la lista
            data.forEach((departamento: any) => {
              this.departamentos.push(departamento);
            });
          } else {
            // En caso de que data.array no esté presente o no sea un arreglo
            console.error('No se encontraron departamentos o la respuesta no es válida', data);
          }
        },
        (error) => {
          // Manejo de errores en caso de que la solicitud falle
          console.error('Error al obtener los departamentos', error);
          // Opcional: mostrar un mensaje de error al usuario
        }
      );
  }

}
