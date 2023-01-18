import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offenses } from 'src/app/classes/offenses';
import { OffensesService } from 'src/app/services/offenses.service';

@Component({
  selector: 'app-edit-offence',
  templateUrl: './edit-offence.component.html',
  styleUrls: ['./edit-offence.component.css']
})
export class EditOffenceComponent implements OnInit {

  
  offense:Offenses = new Offenses();
  id!:number;
  constructor(    private offenceService:OffensesService,
                  private router:Router,
                  private route:ActivatedRoute,
                  private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offenceService.getById(this.id).subscribe( data => {
      this.offense = data;
    })
  }

  save(){
    this.offenceService.updateOffense(this.id, this.offense).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Successfully edited offence "+this.offense.name});
      this.goback();
    }, 
    error => this.toast.error({detail:"Error", summary:"Error editing offence"}));

  }

  goback(){
    this.router.navigate(['/offences']);
  }



}
