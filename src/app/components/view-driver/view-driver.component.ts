import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup/lib/ng-toast.service';
import { Drivers } from 'src/app/classes/drivers';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent implements OnInit {

  driver:Drivers = new Drivers();
  id!:number;
  constructor(    private driverService:DriversService,
                  private route:ActivatedRoute,
                  private router: Router
  ) { }

  ngOnInit(): void {
    this.getDriver();
  }

  private getDriver(){
    this.id = this.route.snapshot.params['id'];
    this.driverService.getDriverById(this.id).subscribe( data => {
      this.driver = data;
    })  
  }

  goback(){
    this.router.navigate(['/drivers'])
  }

}
