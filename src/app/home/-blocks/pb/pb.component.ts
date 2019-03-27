import { Component, OnInit } from '@angular/core';
import {HomepageService} from '../../homepage.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'pb-pb',
  templateUrl: './pb.component.html',
  styleUrls: ['./pb.component.css']
})
export class PbComponent implements OnInit {

  items: Observable<any>;

  constructor(public homepageService: HomepageService) {
  }

  getBanners(){
    this.items = this.homepageService.getBanners('ka');
  }

  ngOnInit() {
    this.getBanners();
  }

}
