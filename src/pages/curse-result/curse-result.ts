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
  /**
INFD-00	- 10 cartas
INFD-01	- 3 cartas
INFD-02	- 2 cartas
INFD-03	- 3 cartas
INFD-04	- 2 cartas
INFD-05	- 2 cartas
INFD-06	- 1 carta
INFD-07	- 1 carta
24 total
   */

  public players: PlayerCurse[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _loadingCtrl: LoadingController) {

    this.players = this.navParams.get('players');
  }
}
