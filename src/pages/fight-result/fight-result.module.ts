import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FightResultPage } from './fight-result';

@NgModule({
  declarations: [
    FightResultPage,
  ],
  imports: [
    IonicPageModule.forChild(FightResultPage),
  ],
  exports: [
    FightResultPage
  ]
})
export class FightResultPageModule {}
