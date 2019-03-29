import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class PagesService {

  public url = environment.url;

  constructor(public http: HttpClient) { }

  getPageById(lang: string, id: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/pages/${id}`,{
      observe: "response"
    });
  }

  getPageSidebarMenu(lang: string, pageId: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/getMenuByPageId?pageId=${pageId}`,{
      observe: "response"
    });
  }

}
