"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var app_header_component_1 = require("./header/app-header.component");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'employee', component: employeeList_component_1.EmployeeListComponent },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, employeeList_component_1.EmployeeListComponent, employeeCount_component_1.employeeCountComponent, app_header_component_1.HeaderComponent],
        bootstrap: [app_component_1.AppComponent],
        exports: [router_1.RouterModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map