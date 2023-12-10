import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { InterfaceRegister } from '../pages/interfaces/InterfaceRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private httpclient : HttpClient,

  ) { }

GetUserById( codigo: any ): Observable<InterfaceRegister>{
  return this.httpclient.get<InterfaceRegister>(`${environment.HOST_URL}/users/?username=${codigo}`);
}
//IsLoggedIn(): nos devuelve username en caso de que sea distinto a null.
IsLoggedIn(){
  return sessionStorage.getItem('username') != null;
}
//GetUserrole(): nos devuelve el tipo de usuario conectado.
GetUserRole(){
  return sessionStorage.getItem('userrole')!= null ? sessionStorage.getItem('userrole')?.toString() : ''
}

}
