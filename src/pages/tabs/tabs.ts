import { FightPage } from './../fight/fight';
import { RespawnPage } from './../respawn/respawn';
import { DraftPage } from './../draft/draft';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursePage } from '../curse/curse';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  cursePage = CursePage;
  draftPage = DraftPage;
  fightPage = FightPage;
  respawnPage = RespawnPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
