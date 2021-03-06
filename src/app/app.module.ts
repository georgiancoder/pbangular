import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { registerLocaleData, CommonModule } from '@angular/common';
import localeKa from '@angular/common/locales/ka';

registerLocaleData(localeKa, 'ka');

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {AppRoutingModule} from './app.routing.module';
import { ResourcesModule } from './resources/resources.module';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsModule } from './news/news.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    AppRoutingModule,
    ResourcesModule,
    BrowserAnimationsModule,
    RouterModule,
    NewsModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'ka'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
