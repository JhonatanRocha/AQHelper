import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RespawnPage } from './respawn';

@NgModule({
  declarations: [
    RespawnPage,
  ],
  imports: [
    IonicPageModule.forChild(RespawnPage),
  ],
  exports: [
    RespawnPage
  ]
})
export class RespawnPageModule {}
