import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Officers } from '../classes/officers';


@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  private baseURL = "http://localhost:8080/api/officers";
  private singleURL="http://localhost:8080/api/officers/singleOfficer";
  private editURL="http://localhost:8080/api/officers/update";
  private countURL="http://localhost:8080/api/officers/count";

  
  constructor(private httpClient:HttpClient) { }

  getOfficersList():Observable<Officers[]>{
    return this.httpClient.get<Officers[]>(`${this.baseURL}`);
  }
  
  newOfficer(officer:Officers):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, officer, {responseType: 'text'});
  }

  getByOfficerId(id:number):Observable<Officers>{
    return this.httpClient.get<Officers>(`${this.singleURL}/${id}`);
  }
  updateOfficer(id:number,officer:Officers):Observable<Object>{
    return this.httpClient.put(`${this.editURL}/${id}`, officer, {responseType: 'text'});
  }
  
  deleteOfficer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType: 'text'});
  }

  getOfficerCount():Observable<any>{
    return this.httpClient.get(`${this.countURL}`);
  }


}
