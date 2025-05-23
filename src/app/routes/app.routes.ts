import { Routes } from '@angular/router';
import { SplashScreenComponent } from '../pages/splash-screen/splash-screen.component';
import { ErrorComponent } from '../pages/error/error.component';
import { AuthGuard } from '../services/auth/authGuard/authGuard.service';

export const routes: Routes = [

  //Ruta spashscreen / raiz
  { path: '', component: SplashScreenComponent, title: 'Splash Screen' },
  
  //Ruta ogin/register
  {
    path: 'auth',
    loadChildren: () =>
      import('../pages/auth/auth.routes').then((m) => m.Auth_routes),
  },

  //Ruta Pre Home
  {
    path: 'preHome',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../pages/preHome/preHome.routes').then((m) => m.preHome_routes),
  },
  
  //Ruta Home
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../pages/home/home.routes').then((m) => m.Home_routes),
  },
  { path: '**', component: ErrorComponent, title: '404' },
];
