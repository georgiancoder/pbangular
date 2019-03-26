import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'pb-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.css']
})
export class TopFooterComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  getInfo(){
    this.sharedService.getInfo('ka').subscribe(resp=>{
      console.log(resp);
    },err=>{
      console.log(err);
    })
  }

  ngOnInit() {
    this.getInfo();
  }

}
