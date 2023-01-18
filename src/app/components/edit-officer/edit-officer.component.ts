import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Officers } from 'src/app/classes/officers';
import { OfficerService } from 'src/app/services/officer.service';
import {  NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-officer',
  templateUrl: './edit-officer.component.html',
  styleUrls: ['./edit-officer.component.css']
})
export class EditOfficerComponent implements OnInit {
officer:Officers=new Officers();
id!:number;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private officersService:OfficerService,
    private toast:NgToastService

    ) { }

  ngOnInit(): void {
    this.getOfficer();
  }
  private getOfficer(){
    this.id = this.route.snapshot.params['id'];
    this.officersService.getByOfficerId(this.id).subscribe( data => {
      this.officer = data;
    })  
  }

  edit(){
    this.officersService.updateOfficer(this.id, this.officer).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Succefully edit "+ this.officer.name})
      this.goback();
    })
  }

  goback(){
    this.router.navigate(['/officers'])
  }
}
