import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {DriversService} from 'src/app/services/drivers.service';
import {Drivers} from 'src/app/classes/drivers';
import { Reports } from 'src/app/classes/reports';
import { Officers } from 'src/app/classes/officers';
import { Fines } from 'src/app/classes/fines';
import { OfficerService } from 'src/app/services/officer.service';
import { FinesService } from 'src/app/services/fines.service';
import {ReportsService} from 'src/app/services/reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
drivers:Drivers[]=[];
reports:Reports[]=[];
officers:Officers[]=[];
fines:Fines[]=[];
  z:any;
  driverCount!:number;
  reportCount!:number;
  officerCount!:number;
  fineCount!:number;
  
  constructor(    private sessionService:SessionService ,
    private driverService:DriversService,
    private reportService:ReportsService,
    private officerService:OfficerService,
    private fineService:FinesService
    ) { }

  ngOnInit(): void {
    this.sessionService.checksession();
    this.getDriverCount();
    this.getReportCount();
    this.getFineCount();
    this.getOfficerCount();
  }
  getDriverCount(){
this.driverService.getDriverCount().subscribe(data=>{
  this.driverCount=data;
  })
}
getReportCount(){
  this.reportService.getReportCount().subscribe(data=>{
    this.reportCount=data;
    })
  }

getFineCount(){
  this.fineService.getFineCount().subscribe(data=>{
    this.fineCount=data;
    })
  }

getOfficerCount(){
  this.officerService.getOfficerCount().subscribe(data=>{
    this.officerCount=data;
    })
  }
}
