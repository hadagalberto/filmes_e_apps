import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Hadagalberto Júnior",
    data:"25/10/2017",
    descricao:"Estou começando o desenvolvimento em Ionic",
    qntd_likes:15,
    qntd_comm:5,
    time_comment:"11h atrás"
  };

  public nome_usuario:string = "Júnior";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public newLike(){
    this.objeto_feed.qntd_likes = this.objeto_feed.qntd_likes+1;
  }

  public soma(n1:number, n2:number): void{
    alert(n1 + n2)
  }

  ionViewDidLoad() {
    //this.soma(1,2);
  }

}
