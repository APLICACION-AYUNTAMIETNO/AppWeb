import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { IdentificarteComponent } from './empresa/identificarte/identificarte.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'inicio', component: InicioComponent },
  { path: 'empresa/:id', component: EmpresaComponent },
  { path: 'empresa/:id/identificarte', component: IdentificarteComponent },
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