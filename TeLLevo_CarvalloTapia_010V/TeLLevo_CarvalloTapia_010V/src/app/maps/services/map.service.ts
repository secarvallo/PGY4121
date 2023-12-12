import { Injectable } from '@angular/core';
import { Map } from 'mapbox-gl';
import { LngLatLike } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;

  constructor() { }

  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Map ){
    this.map = map; 
  }  

  flyTo( coords: LngLatLike ){

    if ( !this.isMapReady) throw Error('Mapa no inicializado');
      
    this.map?.flyTo({
      zoom: 14,
      center: coords,
    });
  }
}

