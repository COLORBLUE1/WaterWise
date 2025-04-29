import { Routes } from '@angular/router';
import { SplashScreenComponent } from '../pages/splash-screen/splash-screen.component';

export const routes: Routes = [
  { path: '/', component: SplashScreenComponent },
  // { path: 'second-component', component: SecondComponent },
  // { path: '**', component: PageNotFoundComponent },
];
