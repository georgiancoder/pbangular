import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PagesService} from './pages.service';
import {PagesRoutingModule} from './pages.routing.module';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [PageComponent, ContactComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule
  ],
  providers: [
    PagesService
  ]
})
export class PagesModule { }