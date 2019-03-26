import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'pb-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  headerMenu: Observable<any>;

  constructor(public sharedService: SharedService) {
  }

  getHeaderMenu(){
    this.headerMenu = this.sharedService.getHeaderMenu('ka');
  }

  ngOnInit() {
    this.getHeaderMenu();
  }

}
