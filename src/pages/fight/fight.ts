import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html',
})
export class FightPage {

  flagIsRangedAttack = false;
  flagRerrollAttack = false;
  flagRerrollDefense = false;
  pathDiceAttack = 'assets/imgs/dices/symbol_melee_reverse.png';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public toggleRangedAttack(toggleRangedAttack: boolean): void {
    if (toggleRangedAttack) {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_ranged_reverse.png';
    } else {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_melee_reverse.png';
    }

    this.flagIsRangedAttack = toggleRangedAttack;
  }

  public hasRerrolAttack(hasRerrolAttack: boolean): void {
    this.flagRerrollAttack = hasRerrolAttack;
  }

  public hasRerrolDefense(hasRerrolDefense: boolean): void {
    this.flagRerrollDefense = hasRerrolDefense;
  }

}
