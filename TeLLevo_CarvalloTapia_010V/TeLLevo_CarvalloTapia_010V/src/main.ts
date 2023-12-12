import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VjYXJ2YWxsbyIsImEiOiJjbHExOWdjeWcwNm5nMmpvMDd4cWZqd255In0.DOicbrPtsTekSLEkbhQpYA';

if (!navigator.geolocation){
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
