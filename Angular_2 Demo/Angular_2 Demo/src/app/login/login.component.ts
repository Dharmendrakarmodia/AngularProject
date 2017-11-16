import { Component } from '@angular/core'
import { Router } from '@angular/router';
@Component({
    selector:'login-component',
    templateUrl:'app/login/login.component.html',
    //styleUrls:['app/login/login-style.component.css']
    styles: ['.login-container{font-family:Lucida Sans Unicode;}','.login-form-pos { margin-top: 190px;border-radius:0px}' ,
    '.control-style{ border-radius:0px;border-left: 5px solid #33DAFF;height:42px;background:#f5f5f5}',
    '.display-div{display:inline}',
    '.btn-pos{float:right; border-radius: 0px;border-bottom: 3px solid #33DAFF;background:#f5f5f5}'  
]
})

export class LoginComponent{
    constructor( private router: Router){}
    email:string='';
    password:string='';
    gotoHeroes() {
        if(this.email=='sanjay@gmail.com' && this.password=='sanjay@123'){
            this.router.navigate(['/employee']);
        }   
        else{
            alert('wrong credentials')
        }
        this.email='';
        this.password='';              
      }
     
}