import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home.routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import { MainSliderComponent } from './-blocks/main-slider/main-slider.component';
import { NewsComponent } from './-blocks/news/news.component';
import { SidebarComponent } from './-blocks/sidebar/sidebar.component';
import { PbComponent } from './-blocks/pb/pb.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { NewsItemComponent } from './-blocks/news-item/news-item.component';
import { PbItemComponent } from './-blocks/pb-item/pb-item.component';
import {HomepageService} from './homepage.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ],
  declarations: [
    HomepageComponent,
    MainSliderComponent,
    NewsComponent,
    SidebarComponent,
    PbComponent,
    NewsItemComponent,
    PbItemComponent
  ],
  providers: [
    HomepageService
  ]
})
export class HomeModule { }
