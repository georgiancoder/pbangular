import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {AppRoutingModule} from './app.routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ThemesAndModelsModule } from './themes-and-models/themes-and-models.module';
import { GeoNetModule } from './geo-net/geo-net.module';
import { MedInitiativeModule } from './med-initiative/med-initiative.module';
import { BestPracticeModule } from './best-practice/best-practice.module';
import { ResourcesModule } from './resources/resources.module';
import { SinglePagesModule } from './single-pages/single-pages.module';
import {RouterModule, Routes} from '@angular/router';

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
    AboutModule,
    ThemesAndModelsModule,
    GeoNetModule,
    MedInitiativeModule,
    BestPracticeModule,
    ResourcesModule,
    SinglePagesModule,
    BrowserAnimationsModule,
    RouterModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
