import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class SharedService {

  constructor(public http: HttpClient) { }

  getHeaderMenu():Observable<any>{
    return this.http.get(``);
  }

  getMainMenu():Observable<any>{
    return this.http.get(``);
  }

  getSocial():Observable<any>{
    return this.http.get(``);
  }

  getInfo():Observable<any>{
    return this.http.get(``);
  }

}
