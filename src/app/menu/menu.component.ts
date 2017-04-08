import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
    name :any;
    
    constructor() { }

    ngOnInit() {
        this.name='test';
    }
}
