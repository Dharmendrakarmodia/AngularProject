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
        return this._http.get("http://5a0d9ee6e4200e0012552553.mockapi.io/api/angV2/customers")
            .map((response: Response) => <IEmployee[]>response.json())
    }
}