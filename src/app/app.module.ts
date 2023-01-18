import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';


import { UserComponent } from './components/user/user.component';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { RolesComponent } from './components/roles/roles.component';

import { ViewRoleComponent } from './components/view-role/view-role.component';
import { LoginComponent } from './components/login/login.component';
import { NgToastModule } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';

import { YesNoPipe } from './pipes/yes-no.pipe';

import { WalletComponent } from './components/wallet/wallet.component';

import { DriversComponent } from './components/drivers/drivers.component';
import { NewDriverComponent } from './components/new-driver/new-driver.component';

import { NewUserComponent } from './components/new-user/new-user.component';

import { ViewDriverComponent } from './components/view-driver/view-driver.component';
import { EditDriverComponent } from './components/edit-driver/edit-driver.component';
import { OffencesComponent } from './components/offences/offences.component';
import { ViewOffenceComponent } from './components/view-offence/view-offence.component';
import { EditOffenceComponent } from './components/edit-offence/edit-offence.component';
import { NewOffenceComponent } from './components/new-offence/new-offence.component';
import { OfficersComponent } from './components/officers/officers.component';
import { NewOfficerComponent } from './components/new-officer/new-officer.component';
import { ViewOfficerComponent } from './components/view-officer/view-officer.component';
import { EditOfficerComponent } from './components/edit-officer/edit-officer.component';
import { FinesComponent } from './components/fines/fines.component';
import { NewFineComponent } from './components/new-fine/new-fine.component';
import { ViewFineComponent } from './components/view-fine/view-fine.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewReportComponent } from './components/new-report/new-report.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import { OffenceHistoryComponent } from './components/offence-history/offence-history.component';
import { UserHomeComponent } from './components/user-home/user-home.component';





@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    HeaderComponent,
    
  
  
    EditUserComponent,
    ViewUserComponent,
   
    RolesComponent,
 
    ViewRoleComponent,
    LoginComponent,
  
    YesNoPipe,
  
    WalletComponent,
   
    DriversComponent,
    NewDriverComponent,

    NewUserComponent,

    ViewDriverComponent,
    EditDriverComponent,
    OffencesComponent,
    ViewOffenceComponent,
    EditOffenceComponent,
    NewOffenceComponent,
    OfficersComponent,
    NewOfficerComponent,
    ViewOfficerComponent,
    EditOfficerComponent,
    FinesComponent,
    NewFineComponent,
    ViewFineComponent,
    LandingPageComponent,
    NewReportComponent,
    ReportsComponent,
    ViewReportComponent,
    OffenceHistoryComponent,
    UserHomeComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgToastModule
  ],
  providers: [CookieService,SidenavComponent,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
