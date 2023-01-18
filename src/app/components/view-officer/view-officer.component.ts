import { Component, OnInit } from '@angular/core';
import {Officers} from 'src/app/classes/officers';
import { ActivatedRoute, Router } from '@angular/router';
import {OfficerService} from 'src/app/services/officer.service';


@Component({
  selector: 'app-view-officer',
  templateUrl: './view-officer.component.html',
  styleUrls: ['./view-officer.component.css']
})
export class ViewOfficerComponent implements OnInit {
  officer:Officers=new Officers();
  id!:number;
  constructor(
    private route:Router,
    private officerService:OfficerService,
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getByOfficerId();
  }
  private getByOfficerId(){
    this.id = this.router.snapshot.params['id'];
    this.officerService.getByOfficerId(this.id).subscribe( data => {
      this.officer = data;
    })  
  }

  goback(){
    this.route.navigate(['/officers'])
  }

}
