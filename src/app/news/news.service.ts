import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewsService {

  public url = environment.url;

  constructor(public http: HttpClient) { }

  getNews(options):Observable<any>{
    return this.http.get(`${this.url}/${options.lang}/news?_page=${options.page}&_limit=${options.limit}`);
  }
}
