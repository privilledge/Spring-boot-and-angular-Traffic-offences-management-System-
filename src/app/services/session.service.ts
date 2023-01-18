import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../classes/login';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userDetail:Login = new Login();

  public vendor_id!:number;
  
  constructor(    private router:Router,
                  private cookie:CookieService,
                  
 ) { }

  checksession(){
    const cookieExists: boolean = this.cookie.check('userDetails');
    if(cookieExists == false){
      this.router.navigate(["/"]);
    }
  }
}
