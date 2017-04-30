import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { NpmStatsService } from './npmStatsService';

@Component({
    selector: 'app-npmhome',
    templateUrl: './npmhome.component.html'
})

export class NpmHomeComponent implements OnInit {
    npmDownloads:any;
    constructor(private _npmStatsService:NpmStatsService) {
        this.npmDownloads={
            totalDownloads:0
        };
    }
    ngOnInit() {
         this._npmStatsService
            .getNpmDownloadCount('nuget.getstats')
            .then( data=>{
                if (data){
                    this.npmDownloads.totalDownloads=data.downloads;
                }                    
            });
    }
}