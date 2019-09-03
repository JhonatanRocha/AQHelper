import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FightPage } from './fight';

@NgModule({
  declarations: [
    FightPage,
  ],
  imports: [
    IonicPageModule.forChild(FightPage),
    TranslateModule.forChild()
  ],
  exports: [
    FightPage
  ]
})
export class FightPageModule {}
