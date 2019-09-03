import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FightResultPage } from './fight-result';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FightResultPage,
  ],
  imports: [
    IonicPageModule.forChild(FightResultPage),
    TranslateModule.forChild(),
  ],
  exports: [
    FightResultPage
  ]
})
export class FightResultPageModule {}
