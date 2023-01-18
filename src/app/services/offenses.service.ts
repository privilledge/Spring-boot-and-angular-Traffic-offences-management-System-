import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offenses } from '../classes/offenses';

@Injectable({
  providedIn: 'root'
})
export class OffensesService {

  private baseURL = "http://localhost:8080/api/offences";
  private editUrl = "http://localhost:8080/api/offences/update";

  constructor(private httpClient:HttpClient) { }

  getOffenseList():Observable<Offenses[]>{
    return this.httpClient.get<Offenses[]>(`${this.baseURL}`);
  }

  createOffense(offense:Offenses):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, offense, {responseType: 'text'});
  }

  getById(id:number):Observable<Offenses>{
    return this.httpClient.get<Offenses>(`${this.baseURL}/${id}`);
  }

  // getOffensesByLincenseNo(LincenseNo:String):Observable<Offenses>{
  //   return this.httpClient.get<Offenses>(`${this.userUrl}/${LincenseNo}`)
  // }
  // getOffenseById(id:number):Observable<Offenses>{
  //   return this.httpClient.get<Offenses>(`${this.baseURL}/${id}`);
  // }

  updateOffense(id:number, offense:Offenses):Observable<Object>{
    return this.httpClient.put(`${this.editUrl}/${id}`, offense, {responseType: 'text'});
  }

  deleteOffense(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'})
  }
}
