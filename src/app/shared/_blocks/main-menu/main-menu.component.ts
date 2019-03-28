import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'pb-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  subscribtions: Subscription[] = [];
  mainMenu = [];

  constructor(public sharedService: SharedService) { }

  getMainMenu(){
    this.subscribtions.push(this.sharedService.getMainMenu('ka').subscribe(resp=>{
      resp.body.forEach(item=>{
          if(item.parentId == 0){
            this.mainMenu.push(item);
          }
        }
      );
      this.getChildMenu(resp.body);
    },err=>{
      console.log(err);
    }));
  }

  getChildMenu(arr){
    this.mainMenu.forEach(parentItem=>{
      parentItem["children"] = [];
      arr.forEach(item=>{
        if(parentItem.pageId == item.parentId){
            parentItem.children.push(item);
        }
      });
    })
  }

  ngOnInit() {
    this.getMainMenu();
  }

}
