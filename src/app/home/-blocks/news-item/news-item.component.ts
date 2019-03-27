import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pb-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news;

  constructor() { }

  ngOnInit() {
  }

}
