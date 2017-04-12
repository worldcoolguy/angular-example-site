import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import 'rxjs/Rx'; // get everything from Rx
import { AppComponent }  from './app.component';
import {PackageDataService} from './common/packageDataService';

import {ExtensionMethodSampleComponent} from './common/extensionMethodSample.component';

import {PrintClassInstanceComponent} from './printclassinstance/printclassinstance.component';
import {ExtensionMethodComponent} from './printclassinstance/extensionMethod.component';

import {SimpleSalesforceConnectComponent} from './simplesalesforceconnect/simplesalesforceconnect.component';
import {SimpleBlackboardConnectComponent} from './simpleblackboardconnect/simpleblackboardconnect.component';
import {ApiAuthenticateComponent} from './apiauthenticate/apiauthenticate.component';
import {AssemblyExtensionComponent} from './assemblyextension/assemblyextension.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';

import { Routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,HttpModule,Routing],
  declarations: [ AppComponent,
    PrintClassInstanceComponent,
    ExtensionMethodComponent,
    ExtensionMethodSampleComponent,
    SimpleSalesforceConnectComponent,
    SimpleBlackboardConnectComponent,
    ApiAuthenticateComponent,
    AssemblyExtensionComponent,
    HomeComponent,
    MenuComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[PackageDataService]
})
export class AppModule { }
