import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InicioService } from '../inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
  
})
export class EmpresaComponent implements OnInit {

  empresaId: string | null = null;
  empresaNombre: string | null = null; // Puedes definir un tipo si conoces la estructura de la empresa
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private inicioService: InicioService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    // Obtener el parámetro `id` de la URL
    this.route.paramMap.subscribe(params => {
      this.empresaId = params.get('id');
      if (this.empresaId) {
        this.getEmpresaData(this.empresaId);
      }
    });
  }

  // Función para hacer la llamada a la API y verificar si la empresa existe
  getEmpresaData(id: string): void {
    
      this.inicioService.existeempresa(id).subscribe(response => {
          // Manejar la respuesta
          console.log('Respuesta del servicio:', response);

          this.empresaId = response.id;
          this.empresaNombre = response.nombre;

        },
        error => {
          // Manejo de errores
          this.router.navigate(['/inicio']);
         
        }
      );
    } 
    
  
}
