import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    URL_NugetPackages = './assets/nugetpackages.json';
    nugetData:any[]

   constructor(private _packageDataService: PackageDataService) { }
    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_NugetPackages)
            .then((data) => {   
                this.nugetData=data;
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });
        }
}