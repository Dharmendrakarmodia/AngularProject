import {Component, Input, Output , EventEmitter } from '@angular/core';

@Component ({
    selector  : 'employee-count',
    templateUrl : 'app/employee/employeeCount.component.html',
    styleUrls : ['app/employee/employeeCount.component.css']
})


export class employeeCountComponent {

    selectedRadioButtonValue : string = "All";

    @Output()
    countradiobuttonselected : EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all : number;

    @Input()
    Male:number;

    @Input()
    Female : number;

    
    onRadioButton() {
        this.countradiobuttonselected.emit(this.selectedRadioButtonValue);
    }
  
}