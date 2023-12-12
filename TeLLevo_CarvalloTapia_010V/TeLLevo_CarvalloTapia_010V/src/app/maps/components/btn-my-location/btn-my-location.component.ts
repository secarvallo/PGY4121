import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';
import { MapService } from '../../services';


@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss'],
})
export class BtnMyLocationComponent  implements OnInit {

  constructor(

    private placesService: PlacesService,
    private mapService: MapService

  ) {}

  ngOnInit() {}

  goToMyLocation(){
    
    if (!this.placesService.isUserLocationReady) throw Error('No hay ubicación del usuario');
    if (!this.mapService.isMapReady) throw Error('No hay mapa disponible');

    this.mapService.flyTo(this.placesService.userLocation!);
  }

}
