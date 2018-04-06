import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'detailedimage-card',
    templateUrl: './detailedimagecard.component.html'
})

export class DetailedImageCardComponent implements OnInit {
    packageData: any;
    methodNames:any[];
    showhideSourceLink:any;

    constructor(
        private _packageDataService: PackageDataService,
        private _route :  ActivatedRoute
    ) {}
    ngOnInit() {
        let id = this._route.snapshot.paramMap.get('id').toLowerCase();      
        let key = this._route.snapshot.paramMap.get('key').toLowerCase();  
        let baseUrl='./assets/thumbnailimages.json';

        this._packageDataService
            .getExtensionsData(baseUrl)
            .then((returnData) => {
                this.packageData=returnData                   
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });
    }
}