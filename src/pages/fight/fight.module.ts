import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FightPage } from './fight';

@NgModule({
  declarations: [
    FightPage,
  ],
  imports: [
    IonicPageModule.forChild(FightPage),
  ],
  exports: [
    FightPage
  ]
})
export class FightPageModule {}
