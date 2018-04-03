import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiKey } from './private';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";

  private lang = "pt-BR";

  apiKey = ApiKey;

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getFilmesPopulares(){
    return this.http.get(this.baseUrl + "/movie/popular?api_key=" + this.apiKey + "&language=" + this.lang);
  }

  getSeriesPopulares(){
    return this.http.get(this.baseUrl + "/tv/popular?api_key=" + this.apiKey + "&language=" + this.lang);    
  }

  getCustomLink(point:String, methods:String){
    return this.http.get(this.baseUrl + "")
  }

}
