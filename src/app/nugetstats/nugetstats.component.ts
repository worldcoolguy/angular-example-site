import { Component, OnInit, Input,Injectable,NgZone   } from '@angular/core';
import { NugetPackageMeta } from '../models/nugetpackagemeta'
import { NugetService } from './nugetService';

@Component({
    selector: 'app-nugetstats',
    templateUrl: './nugetstats.component.html'
})

@Injectable()
export class NugetStatsComponent implements OnInit   {
    @Input() packageId: string;
    packageInfo:any;
    constructor(private _nugetService:NugetService) {
        this.packageInfo=new NugetPackageMeta();
    }
    ngOnInit() {      
        this._nugetService
         .getPackageDetailsFromNuget(this.packageId)
         .then(data => { this.packageInfo= data; });
    }
}