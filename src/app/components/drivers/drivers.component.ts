import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Drivers} from 'src/app/classes/drivers';
import {DriversService} from 'src/app/services/drivers.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  name:any; //search value
  page:number=1; 
  totalLength = 1;
  selectedValue!: any;
  viewItems:number=10;
  constructor(private driverService:DriversService,
    private router:Router) { }

  drivers: Drivers[] = [];
  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers(){
    this.driverService.getDriverList().subscribe(data => {
      this.drivers=data;
      this.totalLength=data.length;
    });
  }

  updateDriver(id:number){
    this.router.navigate(['edit-driver', id]);
  }

  viewDriver(id:number){
    this.router.navigate(['view-driver', id]);
  }

  deleteDriver(id:number){

    this.driverService.deleteDriver(id).subscribe(data => {
      alert("Driver successfully deleted");
      this.ngOnInit();
    }, error => alert('Error while deleting driver'));
  }

  searchDriver(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.drivers = this.drivers.filter( res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase() );
      })
    }
  }
 
  key: string ='id';
  reverse:boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedValue = event.target.value;
    this.viewItems = this.selectedValue;
    console.log(this.viewItems);
  }
}

