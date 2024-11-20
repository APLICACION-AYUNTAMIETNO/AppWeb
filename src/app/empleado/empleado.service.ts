import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppVariables } from '../app-config';

export class User{
  dni: string = "";
  nombre: string = "";
  rol: string = "";
  id_empresa: string = ""; 
  fotoperfil:string = "";
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public infoempleado = new User();

  constructor(private http: HttpClient) { 
  }

  informaciondeempleado():Observable<any>{
    const url = AppVariables.API_URL + `/empleado/perfil`;
    console.log(url)
    // Realizamos una solicitud GET, pasando el id de la empresa como parte de la URL
    return this.http.get<any>(url);
    
  }

  obtenerdepartamentos(nombre_departamento:string,numero_pagina:number,numero_departamentos_pagina:number):Observable<any>{
    const url = AppVariables.API_URL + `/departamento/obtener`;
    console.log(url)
    // Realizamos una solicitud GET, pasando el id de la empresa como parte de la URL
    return this.http.post<any>(url,{nombre_departamento:nombre_departamento,numero_pagina:numero_pagina,numero_departamentos_pagina:numero_departamentos_pagina});
  
  }

  obtenertecnicos(busqueda:string,numero_pagina:number,numero_departamentos_pagina:number):Observable<any>{
    const url = AppVariables.API_URL + `/empleado/obtenertecnicos`;
    console.log(url)
    // Realizamos una solicitud GET, pasando el id de la empresa como parte de la URL
    return this.http.post<any>(url,{busqueda: busqueda,numero_pagina:numero_pagina,numero_tecnicos_pagina:numero_departamentos_pagina});
    
  }
  
  
}
