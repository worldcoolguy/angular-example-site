import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'detailed-card',
    templateUrl: './detailedcard.component.html'
})

export class DetailedCardComponent implements OnInit {
    URL_NugetPackages = './assets/packages.json';
    @Input() sectionKey:string;
    @Input() sectionTitle:string;
    sectionData:any[];

   constructor(private _packageDataService: PackageDataService) {
    }
    ngOnInit() {
    }
}