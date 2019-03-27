import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'pb-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.css']
})
export class TopFooterComponent implements OnInit, OnDestroy{
  subscribtions: Subscription[] = [];
  info;
  constructor(public sharedService: SharedService) { }

  getInfo(){
    this.subscribtions.push(this.sharedService.getInfo('ka').subscribe(resp=>{
      if(resp.status == 200){
        this.info = resp.body;
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
