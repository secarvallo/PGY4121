import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherServices} from '../pages/interfaces/interfaces';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private Http:HttpClient) { }

  getTopHeadlines(){
  let resp = this.Http.get<WeatherServices>(`${API_URL}/weather?lat=-33.45694&lon=-70.64827&appid=${API_KEY}&units=metric&lang={es}`)
  return resp;
  };
}
