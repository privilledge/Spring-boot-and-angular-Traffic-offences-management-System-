import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/classes/login';
import { SessionService } from 'src/app/services/session.service';
import { Drivers } from 'src/app/classes/drivers';
import { Officers } from 'src/app/classes/officers';
import {DriversService} from 'src/app/services/drivers.service';
import { Offenses } from 'src/app/classes/offenses';
import {LoginService} from 'src/app/services/login.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  drivers!: Drivers;

  userDetail:Login = new Login();
  public Adminshow!:Boolean;
  public DriverShow!:Boolean;
  driverId!:number;
  constructor(      private sessionService:SessionService,
                    private cookie:CookieService,
                private driversService:DriversService,
                    private router:Router,
                    private loginService:LoginService,
                    private toast:NgToastService

) { }

  ngOnInit(): void {
    this.sessionService.checksession();
        

    const cookieExists: boolean = this.cookie.check('userDetails');
    if(cookieExists == true){
      this.userDetail =JSON.parse(this.cookie.get('userDetails')); 

      if(this.userDetail.role == "User"){
        this.DriverShow =true;
      
      }
      if(this.userDetail.role == "Admin"){
        this.Adminshow=true;
      }
    } 
    // this.sessionService.checksession();
    // const cookieExists: boolean = this.cookie.check('userDetails');
    // if(cookieExists == true){
    //   this.userDetail =JSON.parse(this.cookie.get('userDetails')); 
      
    // }    
  }

  reloadComponent(){
    this.ngOnInit();
    
  }
  

  logout(){
    this.cookie.deleteAll();
    window.location.reload();
  }

  goToProfile(){
    // var vendorId;
    // this.vendorService.getVendorByEmail(this.userDetail.email).subscribe( data => {
    //   vendorId = data.id;
    //   this.router.navigate(['profile', vendorId]);
    // })
    
  }
  offenceHistory(id:number){
    this.router.navigate(['offence-history',id]);
  }
}
