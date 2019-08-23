import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-respawn',
  templateUrl: 'respawn.html',
})
export class RespawnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public respawn(): void {
    this.navCtrl.push('RespawnResultPage');
  }

}
