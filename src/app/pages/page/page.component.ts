import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {PagesService} from '../pages.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'pb-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
  subscribtions: Subscription[] = [];
  pageId;
  pageMenu: Observable<any>;

  constructor(public pagesService: PagesService, public activeRoute: ActivatedRoute) { }

  getSidebarMenu(){
    this.pageMenu = this.pagesService.getPageSidebarMenu('ka', this.pageId);
  }

  ngOnInit() {
    this.subscribtions.push(this.activeRoute.params.subscribe(param=>{
      this.pageId = param.id;
      this.getSidebarMenu();
    }));
  }

  ngOnDestroy(){
    this.subscribtions.forEach(sbn=>{
      sbn.unsubscribe();
    })
  }

}
