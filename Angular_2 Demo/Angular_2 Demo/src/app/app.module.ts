import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { employeeTitle } from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './employee/employeeCount.component';
import { simpleComponent } from './others/sample.component';
import { HomeComponent } from './home/home.component';
import { PagenotFoundComponent } from './others/PageNotFound.component';

const appRoutes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PagenotFoundComponent }


];
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, employeeTitle, employeeCountComponent, simpleComponent, HomeComponent, PagenotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
