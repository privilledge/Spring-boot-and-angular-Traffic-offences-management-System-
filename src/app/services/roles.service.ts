import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from '../classes/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private baseUrl = "http://localhost:4100/api/v1/role";

  private saveUrl = "http://localhost:4100/api/v1/role/save";

  constructor(private httpClient:HttpClient) { }

  getRolesList():Observable<Roles[]>{
    return this.httpClient.get<Roles[]>(`${this.baseUrl}`);
  }

  createRoles(role:Roles):Observable<Object>{
    return this.httpClient.post(`${this.saveUrl}`, role,{responseType: 'text'} );
  }
}
