import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { NpmStatsService } from './npmStatsService';

@Component({
    selector: 'app-npmhome',
    templateUrl: './npmhome.component.html'
})

export class NpmHomeComponent implements OnInit {
    npmDownloads1:any;
    npmDownloads2:any;
    constructor(private _npmStatsService:NpmStatsService) {
        this.npmDownloads1={
            totalDownloads:0
        };
        this.npmDownloads2={
            totalDownloads:0
        };
    }
    ngOnInit() {
         this._npmStatsService
            .getNpmDownloadCount('nuget.getstats')
            .then( data=>{
                if (data){
                    this.npmDownloads1.totalDownloads=data.downloads;
                }                    
            });

         this._npmStatsService
            .getNpmDownloadCount('npm.getstats')
            .then( data=>{
                if (data){
                    this.npmDownloads2.totalDownloads=data;
                }                    
            });            
    }
}