import { Component } from '@angular/core';
import { InicioService } from '../inicio.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [InicioService],
})
export class InicioComponent {

  identificarempresaform: FormGroup;

  identificadorcorrecto: boolean = true;

  constructor(private inicioService: InicioService,private fb: FormBuilder,private router:Router) {
    this.identificarempresaform = new FormGroup({
      idempresa: new FormControl('', Validators.required)  // Agregar validaciones si es necesario
    });
  }

 

  subir(): void {
    console.log('MEMETO: ',this.identificarempresaform.get('idempresa')?.value);
    // Aquí manejamos el envío del formulario
    if (this.identificarempresaform.valid) {
      const idempresa = this.identificarempresaform.get('idempresa')?.value
      console.log('Formulario enviado:', idempresa);
      this.inicioService.existeempresa(idempresa).subscribe(
        response => {
          this.router.navigate(['/empresa',response.id]);
        },
        error => {
          this.identificadorcorrecto = false;
        }
      );
    } else {
      console.log();
      this.identificadorcorrecto = false;
    }
  }

  masinformacion() {
    window.location.href = 'https://www.innovasur.com/'; // Reemplaza con la URL externa deseada
  }

  

}
