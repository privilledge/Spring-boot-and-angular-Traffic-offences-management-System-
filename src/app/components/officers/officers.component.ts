import { Component, OnInit } from '@angular/core';
import { Officers } from 'src/app/classes/officers';
import { OfficerService } from 'src/app/services/officer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit {

  
  name:any; //search value
  page:number=1; 
  totalLength = 1;

  selectedValue!: any;
  viewItems:number=10;
  officers!:Officers[];
  constructor(
                private officerService:OfficerService,
                private router:Router

  ) { }

  ngOnInit(): void {

    this.officerService.getOfficersList().subscribe ( data=> {
      this.officers = data;
    })
  }


  searchOfficer(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.officers = this.officers.filter( res =>{
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
  
  deleteOfficer(id:number){
    this.officerService.deleteOfficer(id).subscribe(data => {
      alert("Officer successfully deleted");
      this.ngOnInit();
      console.log("hello");
    }, error => alert('Error while deleting officer'));
  }
  updateOfficer(id:number){
    this.router.navigate(['edit-officer', id]);
  }
  viewOfficer(id:number){
    this.router.navigate(['/view-officer',id]);
  }

}
