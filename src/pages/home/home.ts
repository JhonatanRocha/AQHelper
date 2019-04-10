import { RespawnPage } from './../respawn/respawn';
import { CursePage } from './../curse/curse';
import { FightPage } from './../fight/fight';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = FightPage;
  tab2Root = CursePage;
  tab3Root = RespawnPage;

  constructor(public navCtrl: NavController) {

  }

}
