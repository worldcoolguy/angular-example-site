import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SimpleSalesforceConnectComponent} from './simplesalesforceconnect/simplesalesforceconnect.component';
import {SimpleBlackboardConnectComponent} from './simpleblackboardconnect/simpleblackboardconnect.component';
import {ApiAuthenticateComponent} from './apiauthenticate/apiauthenticate.component';
import {AssemblyExtensionComponent} from './assemblyextension/assemblyextension.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {NpmHomeComponent} from './npmhome/npmhome.component';
import {AboutComponent} from './about/about.component';
import {RecipesComponent} from './recipes/recipes.component';
import {PythonComponent} from './python/python.component';
import {ThumbNailCardsComponent} from './thumbnailcards/thumbnailcards.component';
import {DetailedCardComponent} from './detailedcard/detailedcard.component';

export const routes: Routes = [
  { path: 'simplesalesforceconnect', component: SimpleSalesforceConnectComponent },
  { path: 'simpleblackboardconnect', component: SimpleBlackboardConnectComponent },
  { path: 'apiauthenticate', component: ApiAuthenticateComponent },
  { path: 'assemblyextension', component: AssemblyExtensionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'npmhome', component: NpmHomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'python', component: PythonComponent },
  { path: 'detailedcard/:id', component: DetailedCardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);