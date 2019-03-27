import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../news/news.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'pb-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Observable<any>;

  constructor(public newsService: NewsService) { }

  getNews(){
    this.news = this.newsService.getNews({lang: 'ka', page: '1', limit: 3});
  }

  ngOnInit() {
    this.getNews();
  }

}
