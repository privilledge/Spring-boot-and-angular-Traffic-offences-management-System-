import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/classes/roles';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles!:Roles[];
  role:Roles = new Roles();

  constructor(  private roleService:RolesService

  ) { }

  ngOnInit(): void {

    this.getAllRoles();
  }

  private getAllRoles(){
    this.roleService.getRolesList().subscribe(data =>{
      this.roles = data;
    })
  }

  saveRole(){
    console.log(this.role);
    this.roleService.createRoles(this.role).subscribe( data => {
      alert('Role '+this.role.name+" successfully added");
      this.ngOnInit();
    })

  }

}
