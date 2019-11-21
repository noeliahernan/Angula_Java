import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable()
export class ServiceService {

  
  constructor(private http: HttpClient) { }

  url='http://localhost:8080/backend/usuarios';

  usuarioLogin(usuario: Usuario){
    return this.http.post<Usuario>(this.url+'/login',usuario);
  }
  getUsuarios(){
    return this.http.get<Usuario[]>(this.url);
  }
  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url,usuario);
  }
  getUsuarioId(id: number) {
    return this.http.get<Usuario>(this.url+"/"+id);
  }
  updateUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.url+"/"+usuario.id,usuario);
   }
  deleteUsuario(usuario: Usuario) {
    return this.http.delete<Usuario>(this.url+"/"+usuario.id);
  }
}
