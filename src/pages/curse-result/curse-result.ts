import { PlayerCurse } from './../../model/playerCurse';
import { Curse } from './../../model/curse';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HeroCurse } from '../../model/heroCurse';

@IonicPage()
@Component({
  selector: 'page-curse-result',
  templateUrl: 'curse-result.html',
})
export class CurseResultPage {
  public players: PlayerCurse[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _loadingCtrl: LoadingController) {

    this.players = this.navParams.get('players');
  }
}
