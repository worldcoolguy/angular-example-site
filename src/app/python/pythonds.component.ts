import { Component, OnInit, Input,ViewChild, ElementRef  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'app-python-ds',
    templateUrl:'./pythonds.component.html'
})

export class PythonDsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}