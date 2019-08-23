import { FightPageModule } from './../pages/fight/fight.module';
import { RespawnPageModule } from './../pages/respawn/respawn.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CursePageModule } from '../pages/curse/curse.module';
import { DraftPageModule } from '../pages/draft/draft.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { CurseResultPageModule } from '../pages/curse-result/curse-result.module';
import { RespawnResultPageModule } from '../pages/respawn-result/respawn-result.module';
import { FightResultPageModule } from '../pages/fight-result/fight-result.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    TabsPageModule,
    CursePageModule,
    DraftPageModule,
    RespawnPageModule,
    FightPageModule,
    /*CurseResultPageModule,
    RespawnResultPageModule,
    FightResultPageModule,*/
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
