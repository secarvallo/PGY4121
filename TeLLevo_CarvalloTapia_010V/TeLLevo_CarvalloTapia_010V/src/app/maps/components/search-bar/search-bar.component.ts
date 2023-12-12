import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent  implements OnInit {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService) { }

  ngOnInit() {}

  onQueryChanged( query: string = '' ){
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      console.log('query', query);
    }, 500);
  }
}
