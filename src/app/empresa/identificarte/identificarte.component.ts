import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InicioService } from '../../inicio.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IdentificarteService } from './identificarte.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-identificarte',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './identificarte.component.html',
  styleUrl: './identificarte.component.css'
})
export class IdentificarteComponent {
  empresaId: string | null = null;
  empresaNombre: string | null = null; // Puedes definir un tipo si conoces la estructura de la empresa
  error: string | null = null;


  iniciasesionform: FormGroup;

  iniciosesioncorrectamente: boolean = true;



  constructor(
    private route: ActivatedRoute,
    private inicioService: InicioService,
    private identificarteService:IdentificarteService,
    private router: Router,
    private fb: FormBuilder,
  ) {

    this.iniciasesionform = new FormGroup({
      id: new FormControl('', Validators.required),  // Agregar validaciones si es necesario
      contrasena: new FormControl('', Validators.required)
    });


  }

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


  identificarte() {
    const usuario = {id:this.iniciasesionform.get('id')?.value,contrasena: this.iniciasesionform.get('contrasena')?.value }
    console.log(usuario);
    this.identificarteService.identificarte(this.iniciasesionform.get('id')?.value,this.iniciasesionform.get('contrasena')?.value).subscribe(response => {
      // Manejar la respuesta
      console.log('Respuesta del servicio:', response);

      localStorage.setItem('access_token',response.access_token);

      this.router.navigate(['/empleado'])
    },
      error => {
        // Manejo de errores
        console.log('Respuesta del servicio:', error);
        this.iniciosesioncorrectamente = false;

      }
    );
  }
}
    

