import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `
                    <div style="padding:5px">
                        <ul class= "nav nav tabs">
                            <li><a routerLink="home">Home</a></li>
                             <li><a routerLink="employees">Employee</a></li>
                         </ul>
                        <router-outlet></router-outlet>
                       </div>`

})
export class AppComponent {
    usertext: string = "priyank";
}