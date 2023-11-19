import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Users } from '../pages/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(  private httpclient: HttpClient) { }
  getAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }
  getUserByName(name:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${name}`);
  }
  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
}
