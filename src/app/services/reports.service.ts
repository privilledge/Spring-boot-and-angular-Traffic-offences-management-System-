import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reports } from '../classes/reports';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
private baseURL="http://localhost:8080/api/reports";
private singleURL="http://localhost:8080/api/reports/singleReport"
private countURL="http://localhost:8080/api/reports/count";
  constructor(private httpClient:HttpClient) { }

  getAllReports():Observable<Reports[]>{
    return this.httpClient.get<Reports[]>(`${this.baseURL}`);
  }
  addNewReport(report:Reports):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,report, {responseType: 'text'});
  }
  deleteReport(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType: 'text'});
  }
  getReportById(id:number):Observable<Reports>{
    return this.httpClient.get<Reports>(`${this.singleURL}/${id}`);
  }
  getReportCount():Observable<any>{
    return this.httpClient.get(`${this.countURL}`);
  }
}
