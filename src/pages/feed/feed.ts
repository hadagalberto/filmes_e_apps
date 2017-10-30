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

  public objeto_feed = {
    titulo:"Hadagalberto Júnior",
    data:"25/10/2017",
    descricao:"Estou começando o desenvolvimento em Ionic",
    qntd_likes:15,
    qntd_comm:5,
    time_comment:"11h atrás"
  };

  public nome_usuario:string = "Júnior";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }

  public newLike(){
    this.objeto_feed.qntd_likes = this.objeto_feed.qntd_likes+1;
  }

  public soma(n1:number, n2:number): void{
    alert(n1 + n2)
  }

  ionViewDidLoad() {
    this.movieProvider.getFilmes().subscribe(
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
