import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursePage } from './curse';

@NgModule({
  declarations: [
    CursePage,
  ],
  imports: [
    IonicPageModule.forChild(CursePage),
  ],
  exports: [
    CursePage
  ]
})
export class CursePageModule {}
