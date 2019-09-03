import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurseResultPage } from './curse-result';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CurseResultPage,
  ],
  imports: [
    IonicPageModule.forChild(CurseResultPage),
    TranslateModule.forChild()
  ],
  exports: [
    CurseResultPage,
  ]
})
export class CurseResultPageModule {}
