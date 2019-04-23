import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurseResultPage } from './curse-result';

@NgModule({
  declarations: [
    CurseResultPage,
  ],
  imports: [
    IonicPageModule.forChild(CurseResultPage),
  ],
  exports: [
    CurseResultPage,
  ]
})
export class CurseResultPageModule {}
