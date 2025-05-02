import { Routes } from '@angular/router';
import { SplashScreenComponent } from '../pages/splash-screen/splash-screen.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { ErrorComponent } from '../pages/error/error.component';

export const routes: Routes = [
    { path: '', component: SplashScreenComponent, title: 'Splash Screen' },
    {
        path: 'auth',
        loadChildren: () => import('../pages/auth/auth.routes').then(m => m.Auth_routes),
    },
    { path: '**', component: ErrorComponent, title: '404' },
];
