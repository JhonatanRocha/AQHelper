import { PlayerCurse } from './../../model/playerCurse';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Curse } from '../../model/curse';
import { HeroCurse } from '../../model/heroCurse';
import { NgModel } from '@angular/forms';
import { Globalization } from '@ionic-native/globalization';

@IonicPage()
@Component({
  selector: 'page-curse',
  templateUrl: 'curse.html',
})
export class CursePage {

  public player1Hero1 = 0;
  public player1Hero2 = 0;
  public player1Hero3 = 0;
  public player2Hero1 = 0;
  public player2Hero2 = 0;
  public player2Hero3 = 0;
  public player3Hero1 = 0;
  public player3Hero2 = 0;
  public player3Hero3 = 0;
  public player4Hero1 = 0;
  public player4Hero2 = 0;
  public player4Hero3 = 0;

  public loading: Loading;
  public loadingText: string;
  public isInferno = false;
  public playersCurseForm: any[] = [];
  public players: PlayerCurse[] = [];
  public aqCurses: Curse[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _loadingCtrl: LoadingController, private globalization: Globalization) {
      this.verificaIdiomaLoadingText();
  }

  public begeinDraftCurse(): void {
    this.loading = this._loadingCtrl.create({
      content: this.loadingText
    });
    this.loading.present();


    this.playersCurseForm = this.buildPlayersDeath();
    this.shuffleCards();
    this.setupPlayers();

    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.push('CurseResultPage', {
        players: this.players
      });
    }, 3000);
  }

  private verificaIdiomaLoadingText(): void {
    this.globalization.getPreferredLanguage().then(result => {
      if (result.value == 'en-US') {
        this.loadingText = 'Shuffling and Drafting Curses...'
      } else if (result.value == 'es-ES') {
        this.loadingText = 'Baraja y repartindo las maldiciones...'
      } else {
        this.loadingText = 'Embaralhando e distribuindo Maldições...';
      }
    });
  }

  private buildPlayersDeath(): any[] {
    this.playersCurseForm = [];
    const playersDeath: any[] = [
      {
        playerNumber: 1,
        heroes: [
          { heroNumber: 1, deaths: this.checkNullValue(this.player1Hero1) },
          { heroNumber: 2, deaths: this.checkNullValue(this.player1Hero2) },
          { heroNumber: 3, deaths: this.checkNullValue(this.player1Hero3) },
        ]
      },
      {
        playerNumber: 2,
        heroes: [
          { heroNumber: 1, deaths: this.checkNullValue(this.player2Hero1) },
          { heroNumber: 2, deaths: this.checkNullValue(this.player2Hero2) },
          { heroNumber: 3, deaths: this.checkNullValue(this.player2Hero3) },
        ]
      },
      {
        playerNumber: 3,
        heroes: [
          { heroNumber: 1, deaths: this.checkNullValue(this.player3Hero1) },
          { heroNumber: 2, deaths: this.checkNullValue(this.player3Hero2) },
          { heroNumber: 3, deaths: this.checkNullValue(this.player3Hero3) },
        ]
      },
      {
        playerNumber: 4,
        heroes: [
          { heroNumber: 1, deaths: this.checkNullValue(this.player4Hero1) },
          { heroNumber: 2, deaths: this.checkNullValue(this.player4Hero2) },
          { heroNumber: 3, deaths: this.checkNullValue(this.player4Hero3) },
        ]
      }
    ];

    return playersDeath;
  }

  private checkNullValue(numberToCheck: number): number {


    if (numberToCheck.toString() === '') {
      numberToCheck = 0;
    }

    if (numberToCheck > 12) {
      numberToCheck = 12;
    }

    return numberToCheck;
  }

  public shuffleCards(): void {
    if (this.isInferno) {
      this.getInfernoCurseDeck();
    } else {
      this.getBaseCurseDeck();
    }

    this.shuffleCurseCards();
  }

  public shuffleCurseCards(): void {
    for (let i = this.aqCurses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.aqCurses[i], this.aqCurses[j]] = [this.aqCurses[j], this.aqCurses[i]];
    }
  }

  public setupPlayers(): void {
    this.players = [];
    for (let playerCurseForm of this.playersCurseForm) {
      const heroes: HeroCurse[] = [];

      for (let playerHero of playerCurseForm.heroes) {
        let curse: Curse = this.draftCurse(playerHero.deaths);
        heroes.push({ id: playerHero.heroNumber, amountOfDeaths: playerHero.deaths, curse: curse });
      }

      this.players.push({ id: playerCurseForm.playerNumber, heroes: heroes });
    }
  }

  public draftCurse(numberOfDeaths: number): Curse {
    let curseLevel: number = null;
    let curse = null;

    for (let i = 0; i < numberOfDeaths; i++) {
      const positionCard = Math.floor(Math.random() * (this.aqCurses.length));

      const curseAux: Curse = this.aqCurses[positionCard];

      if (!curseLevel || curseLevel < curseAux.id) {
        curseLevel = curseAux.id;
        curse = curseAux;
      }
    }

    this.removeCurseFromDeck(curse);

    return curse;
  }

  public removeCurseFromDeck(curse: Curse): void {
    const index: number = this.aqCurses.indexOf(curse);
    if (index !== -1) {
      this.aqCurses.splice(index, 1);
    }
  }

  public toggleInfernoDeck(toggleInferno: boolean): void {
    this.isInferno = toggleInferno;
  }

  public incrementHeroDeath(ngModel: NgModel): void {
    let deathAmount: number = 0;

    if (ngModel.value != null && ngModel.value >= 0) {
      deathAmount = Number(ngModel.value);
      deathAmount++;
      ngModel.control.setValue(deathAmount);
    } else {
      ngModel.control.setValue(0);
    }
  }

  public decrementHeroDeath(ngModel: NgModel): void {
    let deathAmount: number = 0;

    if (ngModel.value != null && ngModel.value > 0) {
      deathAmount = Number(ngModel.value);
      deathAmount--;
      ngModel.control.setValue(deathAmount);
    } else {
      ngModel.control.setValue(0);
    }
  }

  public getBaseCurseDeck(): void {
    this.aqCurses = [
      { id: 0, code: 'D-00', numberOfCard: 1, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 2, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 3, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 4, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 5, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 6, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 7, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 8, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 9, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'D-00', numberOfCard: 10, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 1, code: 'D-01', numberOfCard: 1, name: 'Hidrofobia', description: 'Este Herói não pode usar marcadores de Poção', img: 'assets/imgs/curses/base/1.png' },
      { id: 2, code: 'D-02', numberOfCard: 1, name: 'Estado de Choque', description: 'Ocupa um espaço de carta. Não tem nehum outro efeito.', img: 'assets/imgs/curses/base/2.png' },
      { id: 2, code: 'D-02', numberOfCard: 2, name: 'Estado de Choque', description: 'Ocupa um espaço de carta. Não tem nehum outro efeito.', img: 'assets/imgs/curses/base/2.png' },
      { id: 2, code: 'D-02', numberOfCard: 3, name: 'Estado de Choque', description: 'Ocupa um espaço de carta. Não tem nehum outro efeito.', img: 'assets/imgs/curses/base/2.png' },
      { id: 2, code: 'D-02', numberOfCard: 4, name: 'Estado de Choque', description: 'Ocupa um espaço de carta. Não tem nehum outro efeito.', img: 'assets/imgs/curses/base/2.png' },
      { id: 3, code: 'D-03', numberOfCard: 1, name: 'Nariz Sangrando', description: '-1 Vida', img: 'assets/imgs/curses/base/3.png' },
      { id: 3, code: 'D-03', numberOfCard: 2, name: 'Nariz Sangrando', description: '-1 Vida', img: 'assets/imgs/curses/base/3.png' },
      { id: 4, code: 'D-04', numberOfCard: 1, name: 'Amnésia', description: 'Coloque esta carta sobre a carta de Herói. Este Herói perde sua Habilidade Narutal.', img: 'assets/imgs/curses/base/4.png' },
      { id: 4, code: 'D-04', numberOfCard: 2, name: 'Amnésia', description: 'Coloque esta carta sobre a carta de Herói. Este Herói perde sua Habilidade Narutal.', img: 'assets/imgs/curses/base/4.png' },
      { id: 4, code: 'D-04', numberOfCard: 3, name: 'Amnésia', description: 'Coloque esta carta sobre a carta de Herói. Este Herói perde sua Habilidade Narutal.', img: 'assets/imgs/curses/base/4.png' },
      { id: 5, code: 'D-05', numberOfCard: 1, name: 'Nariz Sangrando Muito', description: 'Ocupa um espaço de carta. -1 Vida', img: 'assets/imgs/curses/base/5.png' },
      { id: 5, code: 'D-05', numberOfCard: 2, name: 'Nariz Sangrando Muito', description: 'Ocupa um espaço de carta. -1 Vida', img: 'assets/imgs/curses/base/5.png' },
      { id: 6, code: 'D-06', numberOfCard: 1, name: 'Propenso a Acidentes', description: 'Este Herói sofre 1 Ferimento se o seu ataque não causa Ferimento Algum.', img: 'assets/imgs/curses/base/6.png' },
      { id: 7, code: 'D-07', numberOfCard: 1, name: 'Atordoado e Confuso', description: 'Se este Herói sofre pelo menos 1 Ferimento, ele fica Atordoado.', img: 'assets/imgs/curses/base/7.png' }
    ];
  }

  public getInfernoCurseDeck(): void {
    this.aqCurses = [
      { id: 0, code: 'INFD-00', numberOfCard: 1, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 2, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 3, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 4, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 5, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 6, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 7, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 8, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 9, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 0, code: 'INFD-00', numberOfCard: 10, name: 'Sem Maldição', description: 'Nada acontece. Descarte esta carta.', img: 'assets/imgs/curses/base/0.png' },
      { id: 1, code: 'INFD-01', numberOfCard: 1, name: 'Condenado', description: '+1 Token de Condenação', img: 'assets/imgs/curses/inferno/1.png' },
      { id: 1, code: 'INFD-01', numberOfCard: 2, name: 'Condenado', description: '+1 Token de Condenação', img: 'assets/imgs/curses/inferno/1.png' },
      { id: 1, code: 'INFD-01', numberOfCard: 3, name: 'Condenado', description: '+1 Token de Condenação', img: 'assets/imgs/curses/inferno/1.png' },
      { id: 2, code: 'INFD-02', numberOfCard: 1, name: 'Estado de Choque', description: 'Ocupa um espaço de carta. Não tem outro efeito.', img: 'assets/imgs/curses/base/2.png' },
      { id: 2, code: 'INFD-02', numberOfCard: 2, name: 'Estado de Choque', description: 'Ocupa um espaço de carta. Não tem outro efeito.', img: 'assets/imgs/curses/base/2.png' },
      { id: 3, code: 'INFD-03', numberOfCard: 1, name: 'Pecador', description: 'Toda vez que este Herói recebe qualquer quantidade de Condenação, ele recebe 1 Condenação adicional', img: 'assets/imgs/curses/inferno/3.png' },
      { id: 3, code: 'INFD-03', numberOfCard: 2, name: 'Pecador', description: 'Toda vez que este Herói recebe qualquer quantidade de Condenação, ele recebe 1 Condenação adicional', img: 'assets/imgs/curses/inferno/3.png' },
      { id: 3, code: 'INFD-03', numberOfCard: 3, name: 'Pecador', description: 'Toda vez que este Herói recebe qualquer quantidade de Condenação, ele recebe 1 Condenação adicional', img: 'assets/imgs/curses/inferno/3.png' },
      { id: 4, code: 'INFD-04', numberOfCard: 1, name: 'Amnésia', description: 'Coloque esta carta sobre a carta de Herói. Este Herói perde sua Habilidade Narutal.', img: 'assets/imgs/curses/base/4.png' },
      { id: 4, code: 'INFD-04', numberOfCard: 2, name: 'Amnésia', description: 'Coloque esta carta sobre a carta de Herói. Este Herói perde sua Habilidade Narutal.', img: 'assets/imgs/curses/base/4.png' },
      { id: 5, code: 'INFD-05', numberOfCard: 1, name: 'Nariz Sangrando Muito', description: 'Ocupa um espaço de carta. -1 Vida', img: 'assets/imgs/curses/base/5.png' },
      { id: 5, code: 'INFD-05', numberOfCard: 2, name: 'Nariz Sangrando Muito', description: 'Ocupa um espaço de carta. -1 Vida', img: 'assets/imgs/curses/base/5.png' },
      { id: 6, code: 'INFD-06', numberOfCard: 1, name: 'Paranoia', description: '', img: 'assets/imgs/curses/inferno/6.png' },
      { id: 7, code: 'INFD-07', numberOfCard: 1, name: 'Condenado Eternamente', description: 'Ocupa um Espaço de carta. +3 Tokens de Condenação', img: 'assets/imgs/curses/inferno/7.png' },
    ];
  }
}
