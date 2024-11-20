import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { IdentificarteComponent } from './empresa/identificarte/identificarte.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ModificarCuentaComponent } from './empleado/modificar-cuenta/modificar-cuenta.component';
import { DepartamentosComponent } from './empleado/departamentos/departamentos.component';
import { TecnicosComponent } from './empleado/tecnicos/tecnicos.component';
import { MicuentaComponent } from './empleado/micuenta/micuenta.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'inicio', component: InicioComponent },
  { path: 'empresa/:id', component: EmpresaComponent },
  { path: 'empresa/:id/identificarte', component: IdentificarteComponent },
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'empleado/modificarcuenta', component:ModificarCuentaComponent},
  { path: 'empleado/departamentos', component: DepartamentosComponent},
  { path: 'empleado/tecnicos', component: TecnicosComponent},
  { path: 'empleado/micuenta', component: MicuentaComponent},

          // Ruta raíz (home)
 // { path: 'about', component: AboutComponent }, // Ruta 'about'
  //{ path: 'contact', component: ContactComponent }, // Ruta 'contact'
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta para manejar 404 (cualquier otra URL)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }