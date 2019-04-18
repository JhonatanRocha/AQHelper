import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-respawn-result',
  templateUrl: 'respawn-result.html',
})
export class RespawnResultPage {

  public amountDices = 10;
  public respawnDiceResult: any[] = [];
  public respawnResult: any[] = [];
  public imgInboxPath = 'assets/imgs/graveyard/inbox2.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rollRespawn(this.amountDices);
  }

  public rollRespawn(diceAmount: number): void {
    let firstResult = 0;
    let secondResult = 0;

    for (var i = 0; i < diceAmount; i++) {
      const diceResult = Math.floor(Math.random() * 6) + 1;

      if (i % 2 === 0) {
        firstResult = diceResult;
      } else {
        secondResult = diceResult;
        this.respawnDiceResult.push({ dices: [firstResult, secondResult] });
      }
    }
    console.log(this.respawnDiceResult);
    this.buildResult(this.respawnDiceResult);
    console.log(this.respawnResult);
  }

  public buildResult(dices: any[]): void {
    let swordAndSword = 0;
    let swordAndCrit = 0;
    let swordAndBow = 0;
    let bowAndBow = 0;
    let bowAndCrit = 0;

    for (const respawn of dices) {
      console.log(respawn.dices[0]);
      console.log(respawn.dices[1]);

      for (var i = 0; i < respawn.dices.length; i++) {
        if (this.isSwordResult(respawn.dices[0]) && this.isSwordResult(respawn.dices[1])) {
          if (swordAndSword < 2) {
            this.respawnResult.push({
              flagTwice: false,
              imgDiceResult1Path: this.getImgDicePath(respawn.dices[0]),
              imgDiceResult2Path: this.getImgDicePath(respawn.dices[1]),
              imgInboxPath: null
            });
          } else {
            this.respawnResult.push({
              flagTwice: true,
              imgDiceResult1Path: null,
              imgDiceResult2Path: null,
              imgInboxPath: this.imgInboxPath
            });
          }
          swordAndSword++;

        } else if ((this.isSwordResult(respawn.dices[0]) && this.isCritResult(respawn.dices[1])) ||
          (this.isSwordResult(respawn.dices[1]) && this.isCritResult(respawn.dices[0]))) {
          if (swordAndCrit < 2) {
            this.respawnResult.push({
              flagTwice: false,
              imgDiceResult1Path: this.getImgDicePath(respawn.dices[0]),
              imgDiceResult2Path: this.getImgDicePath(respawn.dices[1]),
              imgInboxPath: null
            });
          } else {
            this.respawnResult.push({
              flagTwice: true,
              imgDiceResult1Path: null,
              imgDiceResult2Path: null,
              imgInboxPath: this.imgInboxPath
            });
          }
          swordAndCrit++;

        } else if ((this.isSwordResult(respawn.dices[0]) && this.isBowResult(respawn.dices[1])) ||
          (this.isSwordResult(respawn.dices[1]) && this.isBowResult(respawn.dices[0]))) {
          if (swordAndBow < 2) {
            this.respawnResult.push({
              flagTwice: false,
              imgDiceResult1Path: this.getImgDicePath(respawn.dices[0]),
              imgDiceResult2Path: this.getImgDicePath(respawn.dices[1]),
              imgInboxPath: null
            });
          } else {
            this.respawnResult.push({
              flagTwice: true,
              imgDiceResult1Path: null,
              imgDiceResult2Path: null,
              imgInboxPath: this.imgInboxPath
            });
          }
          swordAndBow++;

        } else if (this.isBowResult(respawn.dices[0]) && this.isBowResult(respawn.dices[1])) {
          if (bowAndBow < 2) {
            this.respawnResult.push({
              flagTwice: false,
              imgDiceResult1Path: this.getImgDicePath(respawn.dices[0]),
              imgDiceResult2Path: this.getImgDicePath(respawn.dices[1]),
              imgInboxPath: null
            });
          } else {
            this.respawnResult.push({
              flagTwice: true,
              imgDiceResult1Path: null,
              imgDiceResult2Path: null,
              imgInboxPath: this.imgInboxPath
            });
          }
          bowAndBow++;

        } else if ((this.isBowResult(respawn.dices[0]) && this.isCritResult(respawn.dices[1])) ||
          (this.isBowResult(respawn.dices[1]) && this.isCritResult(respawn.dices[0]))) {
          if (bowAndCrit < 2) {
            this.respawnResult.push({
              flagTwice: false,
              imgDiceResult1Path: this.getImgDicePath(respawn.dices[0]),
              imgDiceResult2Path: this.getImgDicePath(respawn.dices[1]),
              imgInboxPath: null
            });
          } else {
            this.respawnResult.push({
              flagTwice: true,
              imgDiceResult1Path: null,
              imgDiceResult2Path: null,
              imgInboxPath: this.imgInboxPath
            });
          }
          i === 1 ? bowAndCrit++ : null;

        } else {
          this.respawnResult.push({
            flagTwice: true,
            imgDiceResult1Path: null,
            imgDiceResult2Path: null,
            imgInboxPath: this.imgInboxPath
          });
        }
        i++;
      }
    }
  }

  public isSwordResult(result: number): boolean {
    return result === 1 || result === 3 || result === 4;
  }

  public isBowResult(result: number): boolean {
    return result === 2 || result === 5;
  }

  public isCritResult(result: number): boolean {
    return result === 6;
  }

  public getImgDicePath(diceNumber: number): string {
    let imgDicePath = '';

    if (this.isSwordResult(diceNumber)) {
      imgDicePath = 'assets/imgs/dices/symbol_melee.png';
    } else if (this.isBowResult(diceNumber)) {
      imgDicePath = 'assets/imgs/dices/symbol_ranged.png';
    } else {
      imgDicePath = 'assets/imgs/dices/symbol_crit.png';
    }

    return imgDicePath;
  }

}
