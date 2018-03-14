import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

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
            theme:'mdn-like'
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