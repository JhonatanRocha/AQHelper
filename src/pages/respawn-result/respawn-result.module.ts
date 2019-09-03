import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RespawnResultPage } from './respawn-result';

@NgModule({
  declarations: [
    RespawnResultPage,
  ],
  imports: [
    IonicPageModule.forChild(RespawnResultPage),
    TranslateModule.forChild()
  ],
  exports: [
    RespawnResultPage
  ],
})
export class RespawnResultPageModule {}
