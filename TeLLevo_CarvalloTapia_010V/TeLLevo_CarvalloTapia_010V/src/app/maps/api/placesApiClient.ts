import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root', 
})
export class PlacesApiCLient extends HttpClient{

    public baseUrl: string = 'https://api.mapbox.com/search/geocode/v6/forward?q='

    constructor( 
        
        handler: HttpHandler){
        super( handler )
    }

    public override get<T>( url: string, options: ){

        url = this.baseUrl + url;
    
        return super.get<T>( url, {
            params: {
                limit: 5,
                language: 'es',
                acces_token: environment.API_MAP_KEY
            }
        });
    }
}