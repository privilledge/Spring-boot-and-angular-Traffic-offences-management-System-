import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUserComponent } from './components/edit-user/edit-user.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import {SidenavComponent} from './components/sidenav/sidenav.component';
import { RolesComponent } from './components/roles/roles.component';
import { UserComponent } from './components/user/user.component';


import { ViewRoleComponent } from './components/view-role/view-role.component';

import { ViewUserComponent } from './components/view-user/view-user.component';

import { WalletComponent } from './components/wallet/wallet.component';

import {DriversComponent} from './components/drivers/drivers.component';
import {NewDriverComponent} from './components/new-driver/new-driver.component';
import { ViewDriverComponent } from './components/view-driver/view-driver.component';
import { EditDriverComponent } from './components/edit-driver/edit-driver.component';
import { OffencesComponent } from './components/offences/offences.component';
import { ViewOffenceComponent } from './components/view-offence/view-offence.component';
import { EditOffenceComponent } from './components/edit-offence/edit-offence.component';
import { NewOffenceComponent } from './components/new-offence/new-offence.component';
import { Officers } from './classes/officers';
import { OfficersComponent } from './components/officers/officers.component';
import { NewOfficerComponent } from './components/new-officer/new-officer.component';
import { EditOfficerComponent } from './components/edit-officer/edit-officer.component';
import { ViewOfficerComponent } from './components/view-officer/view-officer.component';
import { FinesComponent } from './components/fines/fines.component';
import { NewFineComponent } from './components/new-fine/new-fine.component';
import { ViewFineComponent } from './components/view-fine/view-fine.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {NewReportComponent} from './components/new-report/new-report.component';
import {ReportsComponent} from './components/reports/reports.component';
import{ViewReportComponent} from './components/view-report/view-report.component';
import {OffenceHistoryComponent} from './components/offence-history/offence-history.component';
import {UserHomeComponent} from './components/user-home/user-home.component';
const routes: Routes = [
  { path: 'home',  component:HomeComponent},
  { path:'header', component:HeaderComponent},
  { path: '', component:LoginComponent},



  { path: 'wallet/:id', component:WalletComponent },

  { path: 'users', component:UserComponent },

  { path: 'view-user', component:ViewUserComponent },
  { path: 'edit-user',component:EditUserComponent },

  { path:'roles', component:RolesComponent },
  
  {path:'view-role', component:ViewRoleComponent },
  {path:'drivers',component:DriversComponent},
  {path:'new-driver',component:NewDriverComponent},
  {path:'view-driver/:id', component:ViewDriverComponent},
  {path:'edit-driver/:id', component:EditDriverComponent},

  {path:'offences', component:OffencesComponent},
  {path:'new-offence', component:NewOffenceComponent},
  {path:'edit-offence/:id', component:EditOffenceComponent},

  {path:'officers', component:OfficersComponent},
  {path:'new-officer', component:NewOfficerComponent},
  {path:'edit-officer/:id', component:EditOfficerComponent},
  {path:'view-officer/:id', component:ViewOfficerComponent},

  {path:'fines', component:FinesComponent},
  {path:'new-fine', component:NewFineComponent},
  {path:'view-fine/:id', component:ViewFineComponent},

  {path:'landing-page',component:LandingPageComponent},
  {path:'new-report',component:NewReportComponent},
  {path:'reports', component:ReportsComponent},
  {path:'view-report/:id',component:ViewReportComponent},
  {path:'offence-history',component:OffenceHistoryComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'user-home',component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
