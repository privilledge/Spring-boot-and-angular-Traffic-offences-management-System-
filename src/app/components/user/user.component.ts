import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedValue!:any;
  viewItems:number=5;
  
  constructor() { }

  ngOnInit(): void {
  }
  selectChangeHandler(event:any){
    this.selectedValue = event.target.value;
    this.viewItems = this.selectedValue;
    console.log(this.viewItems);
  }
}
