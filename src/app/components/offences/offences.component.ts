import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offenses } from 'src/app/classes/offenses';
import { OffensesService } from 'src/app/services/offenses.service';

@Component({
  selector: 'app-offences',
  templateUrl: './offences.component.html',
  styleUrls: ['./offences.component.css']
})
export class OffencesComponent implements OnInit {

  offenses: Offenses[] = [];

  name:any; //search value
  page:number=1; 
  totalLength = 1;

  
  selectedValue!: any;
  viewItems:number=10;
  constructor(    private offenseService:OffensesService,
                  private router:Router
              ) { }

  ngOnInit(): void {
    this.offenseService.getOffenseList().subscribe( data => {
      this.offenses = data;
      this.totalLength = data.length;
    })
  }

  updateOffense(id:number){
    this.router.navigate(['edit-offence', id]);
  }

  deleteOffense(id:number){

    this.offenseService.deleteOffense(id).subscribe(data => {
      alert("Offense successfully deleted");
      this.ngOnInit();
    }, error => alert('Error while deleting offense'));
  }



  searchOffense(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.offenses = this.offenses.filter( res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase() );
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

}
