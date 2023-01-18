import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/services/login.service';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Login = new Login();
  public userDetails: Login[] = [];

  x: any;
  y: any;
  z:any;

  constructor(  private loginService: LoginService,
                private toast: NgToastService,
                private router: Router,
                private cookie:CookieService
  ) { }

  ngOnInit(): void {
    this.x = <HTMLInputElement>document.getElementById('leftSidebar');
    this.x.style.display = "none";

    this.y = <HTMLInputElement>document.getElementById('nav-header');
    this.y.style.visibility = "hidden";   
  }


  login() {
    this.loginService.loginUser(this.user).subscribe( data =>{
      this.user = data;
      this.toast.success({ detail: "Success Message", summary: "Login Successful", duration: 3000 });
      if(this.user != null){
        this.cookie.set("userDetails", JSON.stringify(this.user), {expires:14});
        if(this.user.role=="Admin"){
           window.location.href= '/home';
          }
          if(this.user.role=="User"){
            window.location.href='/user-home';
          }
      }
      console.log(this.user);

    }, error => alert('error'))
    
    // this.loginService.loginUser(this.user).subscribe(data => {
    //   this.loginService.getUser(this.user.email).subscribe(data => {
    //     this.toast.success({ detail: "Success Message", summary: "Login Successful", duration: 3000 });

    //     this.x.style.display = "block";
    //     this.y.style.visibility = "visible";
    //     this.userDetails = data;


    //     this.vendorService.getVendorByEmail(this.user.email).subscribe ( data =>{
    //       this.vendor = data;
    //       //Setting vendorDetails 
    //       if(this.vendor != null){
    //         this.cookie.set("vendorDetails", JSON.stringify(this.vendor), {expires:14});
    //         window.location.href= '';
    //       }
    //       else{
    //         window.location.href= '';
    //       }
    //     }, error => alert('heooo'));
    //     this.cookie.set("userDetails",JSON.stringify(this.userDetails), {expires:14});
        
    //   },
    //     error => {
    //       console.log(error);
    //       this.toast.error({ detail: "Error Message", summary: "Failed to assign session", duration: 2000 })
    //     })
  
    // },
    //   error => {
    //     this.toast.error({ detail: "Error Message", summary: "Invalid Login", duration: 2000 })
    //   })
  }

}

