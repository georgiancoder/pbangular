import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class HomepageService {

  public url = environment.url;

  constructor(public http: HttpClient){}

  getMainSlider(lang: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/mainSlider`);
  }

  getBanners(lang: string):Observable<any>{
    return this.http.get(`${this.url}/${lang}/banners`);
  }

}
