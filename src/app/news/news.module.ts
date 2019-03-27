import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsService} from './news.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
