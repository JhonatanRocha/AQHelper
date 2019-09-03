import { FightPageModule } from './../pages/fight/fight.module';
import { RespawnPageModule } from './../pages/respawn/respawn.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CursePageModule } from '../pages/curse/curse.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { CurseResultPageModule } from '../pages/curse-result/curse-result.module';
import { RespawnResultPageModule } from '../pages/respawn-result/respawn-result.module';
import { FightResultPageModule } from '../pages/fight-result/fight-result.module';
import { Globalization } from "@ionic-native/globalization";
import { TranslateModule, TranslateLoader,TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

//export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_LANGUAGE = 'en-Us';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TabsPageModule,
    CursePageModule,
    RespawnPageModule,
    FightPageModule,
    CurseResultPageModule,
    RespawnResultPageModule,
    FightResultPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
  constructor(platform: Platform, translate: TranslateService, private globalization: Globalization) {

    platform.ready().then(() => {

      translate.setDefaultLang(DEFAULT_LANGUAGE);

      if ((<any>window).cordova) {
        console.log('CAI NO IF', this.globalization.getPreferredLanguage());
        this.globalization.getPreferredLanguage().then(result => {
          // translate.use(result.value.toLowerCase());
          // translate.setDefaultLang(result.value.toLowerCase());
          console.log('linguagem', result.value);
          console.log('linguagem toLowerCase', result.value.toLowerCase());
          translate.use(result.value);
        });
      } else {
        console.log('CAI NO ELSE', this.globalization.getPreferredLanguage());
        let browserLanguage = translate.getBrowserLang() || DEFAULT_LANGUAGE;
        translate.use(browserLanguage.toLowerCase());
      }

    });
  }

}
