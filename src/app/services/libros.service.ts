import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  private API_LIBROS = "http://localhost:3000/libros";

  getPersonal(): Observable <any>{
    return this.http.get( this.API_LIBROS)
  }
  getPersonalUnico(id: any):Observable<any>{
    return this.http.get( `${this.API_LIBROS}/${id}` )
  }
  ////////////////GUARDAR- POST//////////////
  postPersonal(persona:JSON): Observable<any>{
    return this.http.post(this.API_LIBROS, persona)
  }
  ///////////////Eliminar////////////////////////////////


deletePersonalID(id:any): Observable<any>{
  return this.http.delete(`${this.API_LIBROS}/${id}`)
}
///////////////////EDITAR//////////////////////
putNosotros(persona:any):Observable <any>{
  return this.http.put(`${this.API_LIBROS}/${persona.id}`,persona)
}

}
