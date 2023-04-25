import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url1='https://reqres.in/api/login';
  url2='https://reqres.in/api/register';
  url3='https://reqres.in/api/users?page=2';

  login:any;
  register:any;
  ListUser:any;


  constructor(private _http: HttpClient) { }

  getLogin():Observable<any>{
    return this._http.get(this.url1)
    .pipe((results: any) => this.login = results);

  }
  getRegister():Observable<any>{
    return this._http.get(this.url2)
    .pipe((results: any) => this.register = results);

  }
  getUserList():Observable<any>{
    return this._http.get(this.url3)
    .pipe((results: any) => this.ListUser = results);

  }
}
