import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Officers } from 'src/app/classes/officers';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-new-officer',
  templateUrl: './new-officer.component.html',
  styleUrls: ['./new-officer.component.css']
})
export class NewOfficerComponent implements OnInit {

  officer:Officers = new Officers();
  constructor(
                private router: Router,
                private toast: NgToastService,
                private officerService:OfficerService
  
  ) { }


  ngOnInit(): void {
  }

  save(){
    this.officerService.newOfficer(this.officer).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Successfully added "+ this.officer.name});
      this.goback();
    }, error => this.toast.error({detail:"Error", summary:"Error while saving"}))
  }
  goback(){
    this.router.navigate(['/officers']);
  }



}
