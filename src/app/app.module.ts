import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTokenComponent } from './Auth/create-token/create-token.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CreateTokenComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
