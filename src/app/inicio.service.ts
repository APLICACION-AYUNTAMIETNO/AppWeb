import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppVariables } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor( private http: HttpClient) { }

  
  existeempresa(id:string):Observable<any>{
    const url = AppVariables.API_URL + `/empresa/busca/`;
    console.log(url)
    // Realizamos una solicitud GET, pasando el id de la empresa como parte de la URL
    return this.http.post<any>(url,{id:id});
    
  }
    
  
}
