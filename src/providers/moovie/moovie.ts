import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";

  private apiKey = "9bc15631d6ea5d43427a22b79101070b";

  private lang = "pt-BR";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getFilmesPopulares(){
    return this.http.get(this.baseUrl + "/movie/popular?api_key=" + this.apiKey + "&language=" + this.lang);
  }

  getSeriesPopulares(){
    return this.http.get(this.baseUrl + "/tv/popular?api_key=" + this.apiKey + "&language=" + this.lang);    
  }

}
