import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppVariables } from '../../app-config';

@Injectable({
  providedIn: 'root'
})
export class IdentificarteService {

  constructor( private http: HttpClient
  ) { }

  
  identificarte(id:string, contrasena: string):Observable<any>{
    const url = AppVariables.API_URL + `/empleado/identificarte`;
    console.log(url)
    // Realizamos una solicitud GET, pasando el id de la empresa como parte de la URL
    return this.http.post<any>(url,{id:id,contrasena:contrasena});
    
  }
   
}
