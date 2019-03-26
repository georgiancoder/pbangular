import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeaderComponent } from './_blocks/top-header/top-header.component';
import { MidHeaderComponent } from './_blocks/mid-header/mid-header.component';
import { MainMenuComponent } from './_blocks/main-menu/main-menu.component';
import { HeaderMenuComponent } from './_blocks/header-menu/header-menu.component';
import { TopFooterComponent } from './_blocks/top-footer/top-footer.component';
import { MidFooterComponent } from './_blocks/mid-footer/mid-footer.component';
import { CopyComponent } from './_blocks/copy/copy.component';
import {ResponsiveMenuComponent} from './_blocks/responsive-menu/responsive-menu.component';
import {SharedService} from './shared.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    MidHeaderComponent,
    MainMenuComponent,
    HeaderMenuComponent,
    TopFooterComponent,
    MidFooterComponent,
    CopyComponent,
    ResponsiveMenuComponent
  ],
  providers: [
    SharedService
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
