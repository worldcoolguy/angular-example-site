import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import {PackageDataService} from '../common/packageDataService';

@Component({
    //moduleId: module.id,
    selector: 'app-assemblyextension',
    templateUrl: './assemblyextension.component.html'
})

@Injectable()
export class AssemblyExtensionComponent implements OnInit {
    pData: any[];
    URL_AssemblyExtension = './assets/assemblyextension.json';
    
    constructor(private _packageDataService: PackageDataService) { }

    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_AssemblyExtension)
            .then((data) => {
                this.pData = data;
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });
    }
}