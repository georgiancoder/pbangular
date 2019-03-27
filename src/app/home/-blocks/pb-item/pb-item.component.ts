import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pb-pb-item',
  templateUrl: './pb-item.component.html',
  styleUrls: ['./pb-item.component.css']
})
export class PbItemComponent implements OnInit {
  @Input() item;

  @Input() index;

  clasList: string[] = ["miige","mieci","how"];
  constructor() {

  }

  ngOnInit() {
  }

}
