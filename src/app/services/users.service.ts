import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "localhost:4100/login";

  email:any;
  password:any;

  constructor(    private httpClient:HttpClient   ) { }

  loginUser(email:any, password:any):Observable<any>{

    let params = new HttpParams()
      .set('email',email)
      .set('password', password);

    return this.httpClient.post(this.baseUrl, {params});
  }

  
}
