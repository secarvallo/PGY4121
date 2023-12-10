import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InterfaceRegister } from '../pages/interfaces/InterfaceRegister';
import { registers } from '../pages/interfaces/InterfaceRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterCrudService {

  constructor( private httpclient : HttpClient) {}
  //GetAllUsers(): nos devuelve todos los usuarios almacenados.
  ListarRegister(): Observable<InterfaceRegister>{
    return this.httpclient.get<InterfaceRegister>(`${environment.HOST_URL}/users`); 
  }
  //GetUserById(): nos devuelve usuario a través de su username.
  BuscarUserId( usersId: number ): Observable<InterfaceRegister>{
    return this.httpclient.get<InterfaceRegister>(`${environment.HOST_URL}/users/?id=${usersId}`);
  }
  CrearRegister( newRegister: registers): Observable<registers>{
    return this.httpclient.post<InterfaceRegister>(`${environment.HOST_URL}/users`, newRegister);
  }

  UpdateUser( usersId: any ): Observable<InterfaceRegister>{
    return this.httpclient.put<InterfaceRegister>(`${environment.HOST_URL}/users/${ usersId.id }`, usersId);
  }
  DeleteUser( usersId: any ): Observable<InterfaceRegister>{
    return this.httpclient.delete<InterfaceRegister>(`${environment.HOST_URL}/users/${ usersId.id }`);
  }


}