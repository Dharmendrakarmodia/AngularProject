import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {IEmployee} from './employee';

@Component({
    selector: 'employee-list',
    templateUrl : 'app/employee/employeeList.component.html',
    styleUrls : ['app/employee/employeeList.component.css'],
    providers : [EmployeeService]
})



export class EmployeeListComponent implements OnInit {
     selectedRadioButtonValue : string = "All";
      employeeList : IEmployee[];


    constructor(private _employeeService : EmployeeService){
    }

    ngOnInit() {
        this._employeeService.getEmployee()
            .subscribe((employeesData) => this.employeeList = employeesData);
    }

    onradiobuttonchange(selectedRadioButtonValue:string) : void {
        this.selectedRadioButtonValue = selectedRadioButtonValue;

    }
    getTotalEmployee() : number{
        return this.employeeList.length;
    }
    getTotalMaleEmployee() : number{
        return this.employeeList.filter(e => e.gender ==="Male").length;
    }
    getTotalFemaleEmployee() : number{
        return this.employeeList.filter(e => e.gender === "Female").length;
    }
}