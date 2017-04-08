import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
    clickClass:any;
    testBind:any;
    constructor() { }
    ngOnInit() {
        this.clickClass='menu-link';
    }

    menuLinkClick(){
        this.clickClass='menu-link active';
    }
}
