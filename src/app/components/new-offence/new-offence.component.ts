import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offenses } from 'src/app/classes/offenses';
import { OffensesService } from 'src/app/services/offenses.service';

@Component({
  selector: 'app-new-offence',
  templateUrl: './new-offence.component.html',
  styleUrls: ['./new-offence.component.css']
})
export class NewOffenceComponent implements OnInit {

  offense:Offenses = new Offenses();
  
  constructor(    private offenceService:OffensesService,
                  private router:Router,
                  private toast:NgToastService
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.offenceService.createOffense(this.offense).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Successfully added offence"});
      this.goback();
    }, 
    error => this.toast.error({detail:"Error", summary:"Error adding offence"}));

  }

  goback(){
    this.router.navigate(['offences']);
  }

}
