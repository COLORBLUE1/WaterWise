import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Aquí puedes usar localStorage, un servicio, etc.
    const loggedIn = !!localStorage.getItem('usuario');
    if (!loggedIn) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}