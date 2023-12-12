import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent  implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( 

    private placeService: PlacesService,
    private mapService: MapService
  
    ) { }

  ngAfterViewInit(): void{
    if(!this.placeService.userLocation) throw Error('No hay placService.userlocation')
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placeService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h1>Estás aquí</h1>
        <p>Latitud: ${this.placeService.userLocation[1]}</p>
        <p>Longitud: ${this.placeService.userLocation[0]}</p>
      `);
    
    new Marker({ color: 'red' })
      .setLngLat(this.placeService.userLocation)
      .setPopup(popup)
      .addTo(map)
   
    this.mapService.setMap(map);
    
  }

}
