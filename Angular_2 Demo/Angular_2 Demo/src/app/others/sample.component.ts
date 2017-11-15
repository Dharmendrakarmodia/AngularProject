import {Component, Input} from "@angular/core";

@Component ({
    selector: 'simple',
    template : `You Enetered : {{simpleInput}}`
})

export class simpleComponent {
    @Input() simpleInput : string;
}