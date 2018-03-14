import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';
import {CodemirrorModule} from 'ng2-codemirror-typescript/Codemirror';

@Component({
    selector: 'app-python',
    templateUrl:'./python.component.html'
})

export class PythonComponent implements OnInit {
    URL_Python = './assets/python.json';
    pythonData:any[];
    @Input() content:string;
    config:{};

    constructor(private _packageDataService: PackageDataService) {
        this.config={ 
            lineNumbers: true, 
            mode: 'python',
            theme:'duotone-light'
        };
    }
    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_Python)
            .then((data) => {   
                this.pythonData=data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}