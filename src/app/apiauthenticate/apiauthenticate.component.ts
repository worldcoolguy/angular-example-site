import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import {PackageDataService} from '../common/packageDataService';

@Component({
    //moduleId: module.id,
    selector: 'app-apiauthenticate',
    templateUrl: './apiauthenticate.component.html'
})

@Injectable()
export class ApiAuthenticateComponent implements OnInit {
    pData: any[];
    URL_ApiAuthenticate = './assets/apiauthenticate/apiauthenticate.json';
    
    constructor(private _packageDataService: PackageDataService) { }

    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_ApiAuthenticate)
            .then((data) => {
                this.pData = data;
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });
    }
}