import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pb-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.css']
})
export class PageSidebarComponent implements OnInit {

  @Input() menu;
  @Input() currentPageId;


  d = new Date();
  constructor() { }

  ngOnInit() {
  }

}
