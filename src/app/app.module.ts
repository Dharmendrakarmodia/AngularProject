import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { employeeCountComponent } from './employee/employeeCount.component';
import { HeaderComponent }  from './header/app-header.component'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  ];
  


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, LoginComponent, EmployeeListComponent, employeeCountComponent, HeaderComponent],
    bootstrap:    [ AppComponent ],
    exports: [RouterModule]
})
export class AppModule { }
