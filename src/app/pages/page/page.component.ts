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
  pageMenu = [];

  constructor(public pagesService: PagesService, public activeRoute: ActivatedRoute) { }

  getSidebarMenu(){
    this.subscribtions.push(this.pagesService.getPageSidebarMenu('ka', this.pageId).subscribe(resp=>{
      if(resp.status == 200){
        this.pageMenu = resp.body[0].menu;
      }
    },err=>{
      console.log(err);
    }));
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
