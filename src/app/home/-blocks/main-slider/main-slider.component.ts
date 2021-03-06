import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HomepageService} from '../../homepage.service';


@Component({
  selector: 'pb-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainSliderComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
    navContainer: false
  };

  slides: Observable<string[]>;

  constructor(public homepageService: HomepageService) { }

  getSlides(){
    this.slides = this.homepageService.getMainSlider('ka');
  }

  ngOnInit() {
    this.getSlides();
  }

}
