import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, CanMatchFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import { state } from '@angular/animations';


export const authGuard: CanActivateFn = ( next : ActivatedRouteSnapshot,) => {
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
    if (userRole === 'user' && requiredRole === 'admin') {
      router.navigate(['/noauth']);
      return false;
    } else {
      router.navigate(['/noauth']);
      return false;
    }
  }

  return true;



}
 

  

