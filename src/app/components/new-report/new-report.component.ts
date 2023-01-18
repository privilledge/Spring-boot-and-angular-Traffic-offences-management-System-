import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { Reports } from 'src/app/classes/reports';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {
report:Reports=new Reports();

  constructor(private reportService:ReportsService,
    private router:Router,
    private toast:NgToastService) { }

  ngOnInit(): void {
  }
  addNewReport(){
this.reportService.addNewReport(this.report).subscribe(data=>{
  this.toast.success({detail:"Success", summary:this.report.plateNumber+" has successully been added", duration:3000});
  },
  error => this.toast.error({detail:"Error",summary:"Error in adding new report", duration:3000}));
  }
 
}
