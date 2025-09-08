import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if(token != null){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};


export const checkAlreadyLoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if(token != null){
     router.navigate(["/poc/product"]);
    return false;
  }else{
    return true;
  }
};
