import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeKa from '@angular/common/locales/ka';

registerLocaleData(localeKa, 'ka');

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {AppRoutingModule} from './app.routing.module';
import { ResourcesModule } from './resources/resources.module';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsModule } from './news/news.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ResourcesModule,
    BrowserAnimationsModule,
    RouterModule,
    NewsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'ka'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
