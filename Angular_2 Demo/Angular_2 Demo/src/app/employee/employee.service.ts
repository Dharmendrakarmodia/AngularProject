import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {

    constructor(private _http: Http) {

    }
    getEmployee(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:49695/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            
        /*return [
            { code: 'emp101', Name: 'Tom', gender: 'Male', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp102', Name: 'John', gender: 'Male', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp103', Name: 'sanjay', gender: 'Male', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp104', Name: 'neha', gender: 'Female', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp105', Name: 'neha', gender: 'Female', salary: 5500,  dob: '6/25/2017' }

        ]*/
    }
}