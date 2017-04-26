import { Component, OnInit, Input,AfterViewChecked,AfterViewInit  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { NugetService } from './nugetService';
import { NugetPackageMeta } from '../models/nugetpackagemeta'

@Component({
    selector: 'app-nugetstats',
    templateUrl: './nugetstats.component.html'
})

export class NugetStatsComponent implements OnInit   {
    @Input() packageId: string;
    packageInfo:NugetPackageMeta;
 
    constructor(private _nugetService:NugetService) {
        this.packageInfo=new NugetPackageMeta();
    }

    ngOnInit() {      
        this._nugetService
         .getPackageDetailsFromNuget(this.packageId)
         .then(data => { this.packageInfo= data; });
    }
}