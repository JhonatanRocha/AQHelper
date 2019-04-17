import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RespawnResultPage } from './respawn-result';

@NgModule({
  declarations: [
    RespawnResultPage,
  ],
  imports: [
    IonicPageModule.forChild(RespawnResultPage),
  ],
  exports: [
    RespawnResultPage
  ],
})
export class RespawnResultPageModule {}
