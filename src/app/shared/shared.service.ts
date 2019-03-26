import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class SharedService {

  public url = environment.url;

  constructor(public http: HttpClient) { }

  getHeaderMenu(lang: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/headerMenu`);
  }

  getMainMenu(lang: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/mainMenu`);
  }

  getSocial(lang: string):Observable<any>{
    return this.http.get(``);
  }

  getInfo(lang: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/contactInfo`);
  }

}
