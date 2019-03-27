import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'pb-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  mainMenu;

  constructor(public sharedService: SharedService) { }

  getMainMenu(){
    this.mainMenu = this.sharedService.getMainMenu('ka');
  }

  ngOnInit() {
    this.getMainMenu();
  }

}
