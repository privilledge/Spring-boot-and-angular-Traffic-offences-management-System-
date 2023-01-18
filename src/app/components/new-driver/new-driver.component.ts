import { Component, OnInit } from '@angular/core';
import { Drivers } from 'src/app/classes/drivers';
import { Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/services/login.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  driver:Drivers = new Drivers();
    selectedFile:any = null;
  uploadUrl = "http://localhost:8080/api/uploads/profile";

  constructor(
    private driverService: DriversService,
    private router: Router,
    private httpClient: HttpClient,
    private toast: NgToastService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }
  
  onFileSelected(event:any){
 
    this.selectedFile= <File>event.target.files[0];


  }


  

  saveDriver() {

    this.driverService.createDriver(this.driver).subscribe( data => {
      this.toast.success({detail:"Success", summary:this.driver.name+" has successully been added", duration:3000});
      this.goToDriversList();
    },
    error => this.toast.error({detail:"Error",summary:"Error in adding new driver", duration:3000}));

  }
  goToDriversList() {
    this.router.navigate(['/drivers'])
  }


}
