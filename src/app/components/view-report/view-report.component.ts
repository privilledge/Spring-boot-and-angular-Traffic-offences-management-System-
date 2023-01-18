import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup/lib/ng-toast.service';
import { Reports } from 'src/app/classes/reports';

import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
id!:number;
report:Reports=new Reports();
  constructor(
    private route:ActivatedRoute,
    private reportService:ReportsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getReport();
  }
  private getReport(){
    this.id = this.route.snapshot.params['id'];
    this.reportService.getReportById(this.id).subscribe( data => {
      this.report = data;
    })  
  }
  goback(){
    this.router.navigate(['/reports']);
  }
}
