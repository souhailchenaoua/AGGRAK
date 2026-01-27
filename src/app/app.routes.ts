import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page';
import { AboutAggrak } from './pages/about-aggrak/about-aggrak';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutAggrak
  }
];
