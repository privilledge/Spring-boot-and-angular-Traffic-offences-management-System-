import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FinePayment } from 'src/app/classes/fine-payment';
import { Fines } from 'src/app/classes/fines';
import { FinesService } from 'src/app/services/fines.service';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from 'src/app/services/session.service';
import { Login } from 'src/app/classes/login';


@Component({
  selector: 'app-view-fine',
  templateUrl: './view-fine.component.html',
  styleUrls: ['./view-fine.component.css']
})
export class ViewFineComponent implements OnInit {

  fine:Fines = new Fines();
  finePayment:FinePayment = new FinePayment();
  id!:number;
  public Adminshow!:Boolean;
  public DriverShow!:Boolean;
  public PayShow!:Boolean;
  userDetail:Login = new Login();
  isShow!:Boolean;

  constructor(
    private sessionService:SessionService,
    private cookie:CookieService,
    private fineService:FinesService,
    private toast:NgToastService,
    private router:Router,
    private route:ActivatedRoute
) { }


  ngOnInit(): void {
   
    this.getFine();

    this.sessionService.checksession();
        

    const cookieExists: boolean = this.cookie.check('userDetails');
    if(cookieExists == true){
      this.userDetail =JSON.parse(this.cookie.get('userDetails')); 

      if(this.userDetail.role == "User"){
        this.DriverShow =true;
      }
      if(this.userDetail.role == "Admin"){
        this.Adminshow=true;
      }
    } 

  }

  private getFine(){

    this.id = this.route.snapshot.params['id'];
    this.fineService.getFineById(this.id).subscribe( data => {
      this.fine = data;
      if(this.fine.status == "Pending"){
        this.PayShow =true;
      }
      this.build();
    }, error => this.toast.error({detail:"Error"}))  
    
  }

  private build(){
    this.finePayment.fineId = this.fine.id;
    this.finePayment.ref = this.fine.ticketRef;
    this.finePayment.amount = this.fine.amountDue;    
    console.log(this.finePayment);
  }

  pay(){
    this.isShow=true;
    this.fineService.finePayment(this.finePayment).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Transcation initiated, check your mobile phone", duration:6000});
    })
    
  }

  check(){
    this.fineService.finePayment(this.finePayment).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Paid", duration:6000});
    },
    error => this.toast.error({detail:"Error", summary:"Transcation failed or is incomplete", duration:4000}));
    
  }

  // check(){
  //   this.fineService.checkFinePayment(this.finePayment).subscribe( data => {
  //     this.toast.success({detail:"Success", summary:"Transcation successful", duration:4000});
  //   }, 
  //   error => this.toast.error({detail:"Error", summary:"Transcation failed or is incomplete", duration:4000}));
  // }

  goback(){
   this.router.navigate(['fines']);
  }
  gobackUser(){
    this.router.navigate(['offence-history']);
  }

}
