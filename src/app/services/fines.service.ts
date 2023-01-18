import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinePayment } from '../classes/fine-payment';
import { Fines } from '../classes/fines';
import { Drivers } from '../classes/drivers';

@Injectable({
  providedIn: 'root'
})
export class FinesService {

  private baseURL = "http://localhost:8080/api/fines";
  private payFine ="http://localhost:8080/api/fines/pay";
  private checkfunds = "http://localhost:8080/api/fines/checkFunds";
  private byDriverURL="http://localhost:8080/api/fines/drivers";
  private driverFinesURL = "http://localhost:8080/api/fines/drivermail";
private countURL="http://localhost:8080/api/fines/count";

  constructor(private httpClient:HttpClient) { }

  getFines():Observable<Fines[]>{
    return this.httpClient.get<Fines[]>(`${this.baseURL}`);
  }

  getDriverFines(email:String):Observable<Fines[]>{
    return this.httpClient.get<Fines[]>(`${this.driverFinesURL}/${email}`)
  }

  bookFine(fine:Fines):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fine, {responseType: 'text'})
  }

  getFineById(id:number):Observable<Fines>{
    return this.httpClient.get<Fines>(`${this.baseURL}/${id}`);
  }

  finePayment(fine:FinePayment):Observable<Object>{
    return this.httpClient.post(`${this.payFine}`, fine, {responseType: 'text'})
  }

  checkFinePayment(fine:FinePayment):Observable<Object>{
    return this.httpClient.post(`${this.checkfunds}`, fine, {responseType: 'text'})
  }

  getOffenceByDriverId(id:number):Observable<Fines>{
    return this.httpClient.get<Fines>(`${this.byDriverURL}/${id}`);
  }
  getFineCount():Observable<any>{
    return this.httpClient.get(`${this.countURL}`);
  }
  




}
