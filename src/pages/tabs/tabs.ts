import { FightPage } from './../fight/fight';
import { RespawnPage } from './../respawn/respawn';
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
  fightPage = FightPage;
  respawnPage = RespawnPage;
  tabCurseName = 'CURSE_TAB_TITULO';
  tabRespawnName = 'RESPAWN_TAB_TITULO';
  tabFightName = 'BATALHA_TAB_TITULO';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
