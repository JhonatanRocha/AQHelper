import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html',
})
export class FightPage {

  public diceAttack = 0;
  public rerrollAtack = 0;
  public diceDefense = 0;
  public rerrollDefense = 0;
  public headerAttack: string;
  public flagIsRangedAttack = false;
  public flagRerrollAttack = false;
  public flagRerrollDefense = false;
  public pathDiceAttack: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headerAttack = 'BATALHA_ATAQUE_MELEE_HEADER';
    this.pathDiceAttack = 'assets/imgs/dices/symbol_melee_reverse.png';
  }

  public toggleRangedAttack(toggleRangedAttack: boolean): void {
    if (toggleRangedAttack) {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_ranged_reverse.png';
      this.headerAttack = 'BATALHA_ATAQUE_RANGED_HEADER';
    } else {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_melee_reverse.png';
      this.headerAttack = 'BATALHA_ATAQUE_MELEE_HEADER';
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
    this.navCtrl.push('FightResultPage', {
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

  public selectInputTextContent(textInput: TextInput) {
    textInput._native.nativeElement.select();
  }
}
