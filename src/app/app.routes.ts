import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PrintClassInstanceComponent} from './printclassinstance/printclassinstance.component';
import {SimpleSalesforceConnectComponent} from './simplesalesforceconnect/simplesalesforceconnect.component';
import {SimpleBlackboardConnectComponent} from './simpleblackboardconnect/simpleblackboardconnect.component';
import {ApiAuthenticateComponent} from './apiauthenticate/apiauthenticate.component';
import {AssemblyExtensionComponent} from './assemblyextension/assemblyextension.component';
import {MenuComponent} from './menu/menu.component';

export const routes: Routes = [
  { path: 'printclassinstance', component: PrintClassInstanceComponent },
  { path: 'simplesalesforceconnect', component: SimpleSalesforceConnectComponent },
  { path: 'simpleblackboardconnect', component: SimpleBlackboardConnectComponent },
  { path: 'apiauthenticate', component: ApiAuthenticateComponent },
  { path: 'assemblyextension', component: AssemblyExtensionComponent },
  { path: 'menu', component: MenuComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);