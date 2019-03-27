import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from './page/page.component';

export const routes: Routes = [
  {path: '', component: PageComponent},
  {path: ':id', component: PageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule {

}
