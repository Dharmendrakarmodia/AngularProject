import {Component} from "@angular/core"

@Component({

    selector : 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls : ['app/employee/employee.component.css']
})

export class EmployeeComponent{
        colspan : number = 2;
        firstName : string = "Sanjay Singh";
        lastName : string = "Chouhan";
        gender : string = "Male";
        age : number = 26;
}