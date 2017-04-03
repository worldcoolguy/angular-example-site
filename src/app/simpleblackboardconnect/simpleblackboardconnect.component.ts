import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import {PackageDataService} from '../common/packageDataService';

@Component({
    //moduleId: module.id,
    selector: 'app-simpleblackboardconnect',
    templateUrl: './simpleblackboardconnect.component.html'
})

@Injectable()
export class SimpleBlackboardConnectComponent implements OnInit {
    pData: any[];
    URL_SimpleBlackboardConnect = './assets/simpleblackboardconnect/simpleblackboardconnect.json';
    
    constructor(private _packageDataService: PackageDataService) { }

    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_SimpleBlackboardConnect)
            .then((data) => {
                this.pData = data;
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });
    }
}