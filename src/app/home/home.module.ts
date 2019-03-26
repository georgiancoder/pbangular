import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home.routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import { MainSliderComponent } from './-blocks/main-slider/main-slider.component';
import { NewsComponent } from './-blocks/news/news.component';
import { SidebarComponent } from './-blocks/sidebar/sidebar.component';
import { PbComponent } from './-blocks/pb/pb.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomepageComponent,
    MainSliderComponent,
    NewsComponent,
    SidebarComponent,
    PbComponent
  ]
})
export class HomeModule { }
