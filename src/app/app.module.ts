import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { JsonpModule }    from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import 'rxjs/Rx'; // get everything from Rx
import { AppComponent }  from './app.component';
import {PackageDataService} from './common/packageDataService';
import {NugetService} from './nugetstats/nugetService';
import {NpmStatsService} from './npmhome/npmStatsService';
import {MenuHelper} from './common/menuHelper';

import {ExtensionMethodSampleComponent} from './common/extensionMethodSample.component';

import {PrintClassInstanceComponent} from './printclassinstance/printclassinstance.component';
import {ExtensionMethodComponent} from './printclassinstance/extensionMethod.component';

import {SimpleSalesforceConnectComponent} from './simplesalesforceconnect/simplesalesforceconnect.component';
import {SimpleBlackboardConnectComponent} from './simpleblackboardconnect/simpleblackboardconnect.component';
import {ApiAuthenticateComponent} from './apiauthenticate/apiauthenticate.component';
import {AssemblyExtensionComponent} from './assemblyextension/assemblyextension.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {ExtensionsListComponent} from './common/extensionsList.component';
import {NugetStatsComponent} from './nugetstats/nugetstats.component';
import {NpmHomeComponent} from './npmhome/npmhome.component';

import { Routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
    HttpModule,
    JsonpModule,
    Routing,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [ AppComponent,
    PrintClassInstanceComponent,
    ExtensionMethodComponent,
    ExtensionMethodSampleComponent,
    SimpleSalesforceConnectComponent,
    SimpleBlackboardConnectComponent,
    ApiAuthenticateComponent,
    AssemblyExtensionComponent,
    HomeComponent,
    MenuComponent,
    ExtensionsListComponent,
    NugetStatsComponent,
    NpmHomeComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[PackageDataService,MenuHelper,NugetService,NpmStatsService]
})
export class AppModule { }
