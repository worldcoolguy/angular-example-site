import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {RecipesComponent} from './recipes/recipes.component';
import {PythonComponent} from './python/python.component';
import {DetailedCardComponent} from './detailedcard/detailedcard.component';
import {DetailedImageCardComponent} from './detailedimagecard/detailedimagecard.component';

export const routes: Routes = [
  { path: 'home/:sectionKey', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'python', component: PythonComponent },
  { path: 'detailedcard/:id', component: DetailedCardComponent },
  { path: 'detailedimagecard/:id/:key', component: DetailedImageCardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);