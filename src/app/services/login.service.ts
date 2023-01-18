import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../classes/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginurl = "http://localhost:8080/api/login";
  

  constructor(private httpClient:HttpClient) { }
  
  loginUser(user:Login):Observable<any>{
    return this.httpClient.post(`${this.loginurl}`, user);
  }
      
}

