import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { Reports } from 'src/app/classes/reports';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  ownerName:any; //search value
  page:number=1; 
  totalLength = 1;
  selectedValue!: any;
  viewItems:number=10;
  constructor(private reportsService:ReportsService,
    private router:Router) { }

  reports: Reports[] = [];
  ngOnInit(): void {
    this.getReports();
  }
  
  private getReports(){
    this.reportsService.getAllReports().subscribe(data => {
      this.reports=data;
      this.totalLength=data.length;
      console.log("hello");
    });
  }
  searchReport(){
    if(this.ownerName == ""){
      this.ngOnInit();
    }else{
      this.reports = this.reports.filter( res =>{
        return res.ownerName.toLocaleLowerCase().match(this.ownerName.toLocaleLowerCase() );
      })
    }
  }
  viewReport(id:number){
    this.router.navigate(['view-report', id]);
  }

  deleteReport(id:number){

    this.reportsService.deleteReport(id).subscribe(data => {
      alert("Report successfully deleted");
    }, error => alert('Error while deleting report'));
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
