import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespawnResultPage } from '../respawn-result/respawn-result';

/**
 * Generated class for the RespawnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respawn',
  templateUrl: 'respawn.html',
})
export class RespawnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public respawn(): void {
    this.navCtrl.push(RespawnResultPage.name);
  }

}
