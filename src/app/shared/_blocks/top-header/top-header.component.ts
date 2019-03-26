import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';
import {HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'pb-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit, OnDestroy{
  subscribtions: Subscription[] = [];

  contactInfo;

  constructor(public sharedService: SharedService) {
    this.contactInfo = {}
  }

  getInfo(){
    this.subscribtions.push(this.sharedService.getInfo('ka').subscribe((resp: HttpResponse)=>{
      if(resp.status == 200){
        this.contactInfo = resp.body;
      }
    },err=>{
      console.log(err);
    }));
  }

  ngOnInit() {
    this.getInfo();
  }

  ngOnDestroy(){
    this.subscribtions.forEach(sbn=>{
      sbn.unsubscribe();
    })
  }

}
