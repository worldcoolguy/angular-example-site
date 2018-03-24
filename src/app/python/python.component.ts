import { Component, OnInit, Input,ViewChild, ElementRef  } from '@angular/core';
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
    myField:any;
    @ViewChild('dataContainer') dataContainer: ElementRef;

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

        this._packageDataService
            .get('https://ic8usr698c.execute-api.us-east-1.amazonaws.com/dev/')
            .then((data) => {   
                this.dataContainer.nativeElement.innerHTML=data._body;
                this.myField=data._body;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}