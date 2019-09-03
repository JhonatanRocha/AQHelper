import { CurseResultPageModule } from './../curse-result/curse-result.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CursePage } from './curse';

@NgModule({
  declarations: [
    CursePage,
  ],
  imports: [
    IonicPageModule.forChild(CursePage),
    TranslateModule.forChild()
  ],
  exports: [
    CursePage
  ]
})
export class CursePageModule {}
