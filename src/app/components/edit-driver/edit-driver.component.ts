import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drivers } from 'src/app/classes/drivers';
import { DriversService } from 'src/app/services/drivers.service';
import {  NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  driver:Drivers = new Drivers();
  id!:number;
  
constructor(    private driverService:DriversService,
                private route:ActivatedRoute,
                private toast:NgToastService,
                private router: Router
) { }

  ngOnInit(): void {
    this.getDriver();
  }

  private getDriver(){
    this.id = this.route.snapshot.params['id'];
    this.driverService.getDriverById(this.id).subscribe( data => {
      this.driver = data;
    })  
  }

  edit(){
    this.driverService.updateDriver(this.id, this.driver).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Succefully edit "+ this.driver.name})
      this.goback();
    })
  }

  goback(){
    this.router.navigate(['/drivers'])
  }
  onUpload(){
    console.log("Upload");
  }

}
