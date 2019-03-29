import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PagesService} from './pages.service';
import {PagesRoutingModule} from './pages.routing.module';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';
import { PageCoverComponent } from './page-cover/page-cover.component';
import { PageSidebarComponent } from './page-sidebar/page-sidebar.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [PageComponent, ContactComponent, PageCoverComponent, PageSidebarComponent, PageContentComponent],
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
