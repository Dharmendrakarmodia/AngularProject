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
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.gotoHeroes = function () {
        if (this.email == 'sanjay@gmail.com' && this.password == 'sanjay@123') {
            this.router.navigate(['/employee']);
        }
        else {
            alert('wrong credentials');
        }
        this.email = '';
        this.password = '';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-component',
        templateUrl: 'app/login/login.component.html',
        //styleUrls:['app/login/login-style.component.css']
        styles: ['.login-container{font-family:Lucida Sans Unicode;}', '.login-form-pos { margin-top: 190px;border-radius:0px}',
            '.control-style{ border-radius:0px;border-left: 5px solid #33DAFF;height:42px;background:#f5f5f5}',
            '.display-div{display:inline}',
            '.btn-pos{float:right; border-radius: 0px;border-bottom: 3px solid #33DAFF;background:#f5f5f5}',
            '.ng-invalid[required]{ border-left:5px solid red}',
            '.err-msg{font-size: 12px ;margin-left: 7px;}',
            '.header-style{margin-top: -3px;color: grey;}'
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map