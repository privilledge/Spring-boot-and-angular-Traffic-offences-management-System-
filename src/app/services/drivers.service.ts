import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drivers } from '../classes/drivers';


@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private baseURL = "http://localhost:8080/api/drivers";
  private licenceURL = "http://localhost:8080/api/drivers/bylicence";
  private natidURL = "http://localhost:8080/api/drivers/bynatid";
  private editURL = "http://localhost:8080/api/drivers/update";
  private countURL="http://localhost:8080/api/drivers/count";
  
  constructor(private httpClient:HttpClient) { }

  
  getDriverList():Observable<Drivers[]>{
    return this.httpClient.get<Drivers[]>(`${this.baseURL}`);
  }
getDriverCount():Observable<any>{
  return this.httpClient.get(`${this.countURL}`);
}
  createDriver(driver:Drivers):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, driver, {responseType: 'text'});
  }

  getDriverByLicenseNo(licence:String):Observable<Drivers>{
    return this.httpClient.get<Drivers>(`${this.licenceURL}/${licence}`)
  }

  getDriverByNationalID(natid:String):Observable<Drivers>{
    return this.httpClient.get<Drivers>(`${this.natidURL}/${natid}`)
  }
  
  getDriverById(id:number):Observable<Drivers>{
    return this.httpClient.get<Drivers>(`${this.baseURL}/${id}`);
  }

  updateDriver(id:number, driver:Drivers):Observable<Object>{
    return this.httpClient.put(`${this.editURL}/${id}`, driver, {responseType: 'text'});
  }

  deleteDriver(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'})
  }


}

