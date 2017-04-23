import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {PackageDataService} from '../common/packageDataService';
import {ExtensionMethodComponent} from './extensionMethod.component'

@Component({
    //moduleId: module.id,
    selector: 'app-printclassinstance',
    templateUrl: './printclassinstance.component.html'
})

export class PrintClassInstanceComponent implements OnInit {
    packageData: any[];
    methodNames:any[];
    URL_PrintClassInstanceData = './assets/printclassinstance.json';
    
    constructor(private _packageDataService: PackageDataService) { }

    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_PrintClassInstanceData)
            .then((data) => {
                this.packageData = data
                this.methodNames=data.map((d:any)=> d.methodName);
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });
    }
}