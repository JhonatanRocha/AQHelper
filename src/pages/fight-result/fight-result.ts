import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fight-result',
  templateUrl: 'fight-result.html',
})
export class FightResultPage {

  public attackResult = 0;
  public rangedAttackResult = 0;
  public attackCritResult = 0;
  public blockResult = 0;
  public blockCritResult = 0;
  public wound = 0;
  public pathDiceAttack = 'assets/imgs/dices/symbol_melee.png';
  public textFightResult = 'Ataque Efetivo';
  public imgFightResult = 'assets/imgs/dices/attack.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const flagIsRangedAttack = this.navParams.get('isRangedAttack')

    if (flagIsRangedAttack) {
      this.pathDiceAttack = 'assets/imgs/dices/symbol_ranged.png';
    }

    this.rollAttack(this.navParams.get('diceAttack'), flagIsRangedAttack,
      this.navParams.get('rerrollAtack'), this.navParams.get('hasRerrolAttack'));

    this.rollDefense(this.navParams.get('diceDefense'), this.navParams.get('hasRerrolDefense'),
      this.navParams.get('rerrollDefense'));

    if (flagIsRangedAttack) {
      this.calculateWounds(this.rangedAttackResult, this.attackCritResult, this.blockResult, this.blockCritResult);

    } else {
      this.calculateWounds(this.attackResult, this.attackCritResult, this.blockResult, this.blockCritResult);
    }
  }

  public isMeleeResult(result: number): boolean {
    return result === 1 || result === 3 || result === 4;
  }

  public isRangedResult(result: number): boolean {
    return result === 2 || result === 5;
  }

  public isCritResult(result: number): boolean {
    return result === 6;
  }

  public isBlockResult(result: number): boolean {
    return result === 1;
  }

  public isBlockCritResult(result: number): boolean {
    return result === 6;
  }

  public rollAttack(diceAttack: number, flagIsRangedAttack: boolean,
    rerrollAtack: number, flagRerrollAttack: boolean): void {

    for (var i = 0; i < diceAttack; i++) {
      const diceResult = Math.floor(Math.random() * 6) + 1;

      if (this.isCritResult(diceResult)) {
        this.attackCritResult++;
        diceAttack++;
      } else if (this.isMeleeResult(diceResult)) {
        if (flagRerrollAttack && flagIsRangedAttack && rerrollAtack > 0) {
          rerrollAtack--;
          diceAttack++;
        } else {
          this.attackResult++;
        }
      } else if (flagRerrollAttack && !flagIsRangedAttack && rerrollAtack > 0) {
        rerrollAtack--;
        diceAttack++;
      } else {
        this.rangedAttackResult++;
      }
    }
  }

  public rollDefense(diceDefense: number, flagRerrollDefense: boolean, rerrollDefense: number): void {
    for (var i = 0; i < diceDefense; i++) {
      const diceResult = Math.floor(Math.random() * 6) + 1;

      if(this.isBlockCritResult(diceResult)) {
        this.blockCritResult++;
      } else if (this.isBlockResult(diceResult)) {
        this.blockResult++;
      } else if (flagRerrollDefense && rerrollDefense > 0) {
        rerrollDefense--;
        diceDefense++;
      }
    }
  }

  public calculateWounds(attackResult: number, attackCritResult: number,
    blockResult: number, blockCritResult: number): void {

    const totalAttack = attackResult + attackCritResult;
    const totalDefense = blockResult + blockCritResult;
    const total = totalAttack - totalDefense;

    total < 0 ? this.wound = 0 : this.wound = total;

    if(this.wound > 0) {
      this.imgFightResult = 'assets/imgs/dices/attack.png';
      this.textFightResult = 'Ataque com Sucesso!';
    } else {
      this.textFightResult = 'Ataque Bloqueado!';
      this.imgFightResult = 'assets/imgs/dices/defense.png';
    }
  }

}
