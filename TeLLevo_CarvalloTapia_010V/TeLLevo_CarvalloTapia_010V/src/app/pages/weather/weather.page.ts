import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/servicios/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weathers: any[] = [];
  
  constructor(public weatherServices: WeatherService) { 
  }
  
  ngOnInit() {

    this.weatherServices.getTopHeadlines().subscribe( resp => {
      console.log('weathers', resp );
      this.weathers.push( resp );
    });
  }
}
