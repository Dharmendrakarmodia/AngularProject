"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployee = function () {
        return this._http.get("http://localhost:49695/api/employees")
            .map(function (response) { return response.json(); });
        /*return [
            { code: 'emp101', Name: 'Tom', gender: 'Male', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp102', Name: 'John', gender: 'Male', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp103', Name: 'sanjay', gender: 'Male', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp104', Name: 'neha', gender: 'Female', salary: 5500,  dob: '6/25/2017' },
            { code: 'emp105', Name: 'neha', gender: 'Female', salary: 5500,  dob: '6/25/2017' }

        ]*/
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map