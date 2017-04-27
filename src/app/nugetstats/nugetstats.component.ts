import { Component, OnInit, Input,AfterViewChecked,AfterViewInit  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { NugetService } from './nugetService';
import { NugetPackageMeta } from '../models/nugetpackagemeta'

var nugetPack=require('nuget.getstats');

@Component({
    selector: 'app-nugetstats',
    templateUrl: './nugetstats.component.html'
})

export class NugetStatsComponent implements OnInit   {
    @Input() packageId: string;
    packageInfo:any;
 
    constructor(private _nugetService:NugetService) {
        this.packageInfo=new NugetPackageMeta();
    }

    ngOnInit() {      
        nugetPack.GetNugetPackageStats(this.packageId).then(            
            (data:any)=>{
            debugger;
            this.packageInfo={Version:1,TotalDownloads:10};  
        }).
        catch(function(err:any){
            console.log(err);
        });

        // this._nugetService
        //  .getPackageDetailsFromNuget(this.packageId)
        //  .then(data => { this.packageInfo= data; });
    }
}