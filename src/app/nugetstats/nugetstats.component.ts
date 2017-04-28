import { Component, OnInit, Input,Injectable,NgZone   } from '@angular/core';
import { NugetPackageMeta } from '../models/nugetpackagemeta'

var nugetPack=require('nuget.getstats');

@Component({
    selector: 'app-nugetstats',
    templateUrl: './nugetstats.component.html'
})

@Injectable()
export class NugetStatsComponent implements OnInit   {
    @Input() packageId: string;
    packageInfo:any;
    constructor(private _ngZone: NgZone) {
        this.packageInfo=new NugetPackageMeta();
    }
    ngOnInit() {      
        nugetPack
         .GetNugetPackageStats(this.packageId)
         .then( (data:any)=>{
            this._ngZone.run(()=> {
                this.packageInfo=data;
            });
         })
    }
}