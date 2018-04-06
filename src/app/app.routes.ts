import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {RecipesComponent} from './recipes/recipes.component';
import {PythonComponent} from './python/python.component';
import {ThumbNailCardsComponent} from './thumbnailcards/thumbnailcards.component';
import {DetailedCardComponent} from './detailedcard/detailedcard.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'python', component: PythonComponent },
  { path: 'detailedcard/:id', component: DetailedCardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);