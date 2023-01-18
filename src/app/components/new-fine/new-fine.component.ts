import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Drivers } from 'src/app/classes/drivers';
import { Fines } from 'src/app/classes/fines';
import { Offenses } from 'src/app/classes/offenses';
import { Officers } from 'src/app/classes/officers';
import { DriversService } from 'src/app/services/drivers.service';
import { FinesService } from 'src/app/services/fines.service';
import { OffensesService } from 'src/app/services/offenses.service';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-new-fine',
  templateUrl: './new-fine.component.html',
  styleUrls: ['./new-fine.component.css']
})
export class NewFineComponent implements OnInit {

  fine:Fines = new Fines();
  officers!:Officers[];
  office_name:any; //search value

  drivers!:Drivers[];
  driver_name:any; //search value

  offences!:Offenses[];
  offence_name:any; //search value
  constructor(
                  private fineService:FinesService,
                  private officerService:OfficerService,
                  private driverService:DriversService,
                  private offenceService:OffensesService,
                  private toast:NgToastService,
                  private router:Router
  ) { }

  ngOnInit(): void {
    this.getOfficers();
    this.getDrivers();
    this.getOffences();
  }

  private getOfficers(){
    this.officerService.getOfficersList().subscribe( data => {
      this.officers = data;
    })
  }

  private getOffences(){
      this.offenceService.getOffenseList().subscribe( data => {
        this.offences = data;
      })
  }

  private getDrivers(){
    this.driverService.getDriverList().subscribe( data => {
      this.drivers = data;
    })
  }
  
  save(){
    
    var val = Math.floor(10000 + Math.random() * 90000);
    var ref = "ZRP"+val;
    this.fine.ticketRef = ref;
    
    this.fineService.bookFine(this.fine).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Succeffuly booked offense"});
      this.goback();
    },
    error => this.toast.error({detail:"Error", summary:"Error while booking offense"}))

  }

  goback(){
    this.router.navigate(['fines']);
  }

  searchOffense(){
    if(this.offence_name == ""){
      this.ngOnInit();
    }else{
      this.offences = this.offences.filter( res =>{
        return res.name.toLocaleLowerCase().match(this.offence_name.toLocaleLowerCase() );
      })
    }
  }
}
