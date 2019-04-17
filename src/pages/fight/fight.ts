import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FightResultPage } from '../fight-result/fight-result';

@IonicPage()
@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html',
})
export class FightPage {

  private diceAttack = 0;
  private rerrollAtack = 0;
  private diceDefense = 0;
  private rerrollDefense = 0;
  private headerAttack = 'Ataque Próximo';
  private flagIsRangedAttack = false;
  private flagRerrollAttack = false;
  private flagRerrollDefense = false;
  private pathDiceAttack = 'assets/imgs/dices/symbol_melee_reverse.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public toggleRangedAttack(toggleRangedAttack: boolean): void {
    if (toggleRangedAttack) {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_ranged_reverse.png';
      this.headerAttack = 'Ataque a Distância';
    } else {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_melee_reverse.png';
      this.headerAttack = 'Ataque Próximo';
    }

    this.flagIsRangedAttack = toggleRangedAttack;
  }

  public hasRerrolAttack(hasRerrolAttack: boolean): void {
    this.flagRerrollAttack = hasRerrolAttack;
  }

  public hasRerrolDefense(hasRerrolDefense: boolean): void {
    this.flagRerrollDefense = hasRerrolDefense;
  }

  public fight(): void {
    this.navCtrl.push(FightResultPage.name, {
      diceAttack: this.checkNullValue(this.diceAttack),
      isRangedAttack: this.flagIsRangedAttack,
      hasRerrolAttack: this.flagRerrollAttack,
      rerrollAtack: this.checkNullValue(this.rerrollAtack),
      diceDefense: this.checkNullValue(this.diceDefense),
      hasRerrolDefense: this.flagRerrollDefense,
      rerrollDefense: this.checkNullValue(this.rerrollDefense)
    });
  }

  private checkNullValue(numberToCheck: number): number {
    return numberToCheck.toString() === '' ? 0 : numberToCheck;
  }
}
