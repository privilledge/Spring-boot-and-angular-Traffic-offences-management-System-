import { Component, OnInit } from '@angular/core';
import {FinesService} from 'src/app/services/fines.service';
import {Fines} from 'src/app/classes/fines';
import { ActivatedRoute,Router} from '@angular/router';
import { Drivers } from 'src/app/classes/drivers';
import { Offenses } from 'src/app/classes/offenses';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/classes/login';

@Component({
  selector: 'app-offence-history',
  templateUrl: './offence-history.component.html',
  styleUrls: ['./offence-history.component.css']
})
export class OffenceHistoryComponent implements OnInit {

  page:number=1; 
  totalLength = 1;
  selectedValue!: any;
  viewItems:number=5;

  userDetail:Login = new Login();
  fines!:Fines[];
  constructor(
    private finesService:FinesService,
    private router:Router,
    private cookie:CookieService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookie.check('userDetails');
    if(cookieExists == true){
      this.userDetail =JSON.parse(this.cookie.get('userDetails')); 
      if (this.userDetail != null) {
        this.finesService.getDriverFines(this.userDetail.email).subscribe( data =>{
          this.fines = data;
          console.log(this.fines);
        })
      }
    } 
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

  view(id:number){
    this.router.navigate(['view-fine', id]);
  }

}
