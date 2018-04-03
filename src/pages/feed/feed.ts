import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public listaFilmes = new Array<any>();

  public nome_usuario:string = "Júnior";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }

  public soma(n1:number, n2:number): void{
    alert(n1 + n2)
  }

  ionViewDidLoad() {
    this.movieProvider.getFilmesPopulares().subscribe(
      data=>{
        const response = (data as any);
        const obj = JSON.parse(response._body);
        this.listaFilmes = obj.results;
        //console.log(obj);
      }, error=>{
        console.log(error);
      }
    )
  }

}
