import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RespawnPage } from './respawn';

@NgModule({
  declarations: [
    RespawnPage,
  ],
  imports: [
    IonicPageModule.forChild(RespawnPage),
    TranslateModule.forChild()
  ],
  exports: [
    RespawnPage
  ]
})
export class RespawnPageModule {}
