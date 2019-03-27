import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'pb-mid-footer',
  templateUrl: './mid-footer.component.html',
  styleUrls: ['./mid-footer.component.css']
})
export class MidFooterComponent implements OnInit {

  financialSuport;

  constructor(public sharedService: SharedService) { }

  getFinancialSuport(){
    this.financialSuport = this.sharedService.getFinancialSuport('ka');
  }

  ngOnInit() {
    this.getFinancialSuport();
  }

}
