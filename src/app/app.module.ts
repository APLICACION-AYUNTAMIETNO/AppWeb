import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { InicioComponent } from './inicio/inicio.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

  // Importa el módulo de rutas

@NgModule({
  declarations: [
    
    // otros componentes aquí
  ],
  imports: [AppComponent,
    BrowserModule,
    AppRoutingModule, 
    InicioComponent
    
  ],
 
  providers: [ ],
  bootstrap: []
})
export class AppModule { }