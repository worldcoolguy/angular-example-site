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
    @Input() layoutClass:any;
    constructor() { }
    ngOnInit() {
        this.clickClass='menu-link';
    }

    menuLinkClick(){
        this.clickClass='menu-link active';

        let active = 'active';
        let modClassName=this.toggleClass(this.layoutClass.cssClass,active);

        this.layoutClass.cssClass=modClassName;
    }

    toggleClass(className:any,activeClassName:any) {
        let classes = className.split(/\s+/),
            length = classes.length,
            i = 0;
        for(; i < length; i++) {
          if (classes[i] === activeClassName) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(activeClassName);
        }
        return classes.join(' ');
    }    
}
