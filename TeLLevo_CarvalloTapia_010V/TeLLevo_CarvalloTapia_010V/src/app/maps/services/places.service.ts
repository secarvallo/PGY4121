import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

public userLocation?: [number, number];
public isLoadingPlaces: boolean = false;
public places: Feature[] = [];

get isUserLocationReady(): boolean {
  return !!this.userLocation;
}

  constructor( private http: HttpClient ) { 
    
    this.getUserLocation();

  }

  public async getUserLocation(): Promise <[number, number]>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [ coords.longitude, coords.latitude];
          resolve( this.userLocation );
        },
        ( error )=>{
          alert( 'No se pudo obtener la geolocalización del usuario');
          console.log( error );
          reject( );
        }
      );
    });
  }

  getPlacesByQuery( query: string =' ' ){

    this.isLoadingPlaces = true;

    this.http.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${ query }&proximity=-70.75661194350499%2C-33.509898868300155&access_token=pk.eyJ1Ijoic2VjYXJ2YWxsbyIsImEiOiJjbHExOWdjeWcwNm5nMmpvMDd4cWZqd255In0.DOicbrPtsTekSLEkbhQpYA`)
    .subscribe( ( resp: any ) => {
      console.log( resp );
      this.isLoadingPlaces = false;
      this.places = resp.features;

    })
  }
}
