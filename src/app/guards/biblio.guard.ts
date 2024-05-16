import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const biblioGuard: CanActivateFn = (next : ActivatedRouteSnapshot) => {
  const servicio = inject(LoginService)
  const router = inject(Router)
  const state = RouterStateSnapshot
  const isLoggedIn = servicio.isLoggedIn();
    if (!isLoggedIn) {
      router.navigate(['/login']);
      return false;

};
const userRole = servicio.getCurrentUserRole();
  const requiredRole = next.data['role'];

  if (requiredRole && userRole !== requiredRole) {
    if (userRole === 'user' && requiredRole === 'biblio') {
      router.navigate(['/noauth']);
      return false;
    } else {
      router.navigate(['/noauth']);
      return false;
    }
  }

  return true;

};
