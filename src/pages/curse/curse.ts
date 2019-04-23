import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-curse',
  templateUrl: 'curse.html',
})
export class CursePage {

  public player1Hero1 = 0;
  public player1Hero2 = 0;
  public player1Hero3 = 0;
  public player2Hero1 = 0;
  public player2Hero2 = 0;
  public player2Hero3 = 0;
  public player3Hero1 = 0;
  public player3Hero2 = 0;
  public player3Hero3 = 0;
  public player4Hero1 = 0;
  public player4Hero2 = 0;
  public player4Hero3 = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursePage');
  }

}
