import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  ];
  


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent,LoginComponent,EmployeeComponent],
    bootstrap:    [ AppComponent ],
    exports: [RouterModule]
})
export class AppModule { }
