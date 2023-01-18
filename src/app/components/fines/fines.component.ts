import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fines } from 'src/app/classes/fines';
import { FinesService } from 'src/app/services/fines.service';

@Component({
  selector: 'app-fines',
  templateUrl: './fines.component.html',
  styleUrls: ['./fines.component.css']
})
export class FinesComponent implements OnInit {

  fines!:Fines[];

  name:any; //search value
  page:number=1; 
  totalLength = 1;

  
  selectedValue!: any;
  viewItems:number=10;
  constructor(    private fineService:FinesService,
                  private router:Router
              ) { }


  ngOnInit(): void {

    this.fineService.getFines().subscribe( data => {
      this.fines = data;
      this.totalLength = data.length;
    })
  }

  
  searchDriver(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.fines = this.fines.filter( res =>{
        return res.driver.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase() );
      })
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

  viewfine(id:number){
    this.router.navigate(['view-fine', id]);
  }

}
