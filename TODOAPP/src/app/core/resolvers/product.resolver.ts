import { ResolveFn } from '@angular/router';
import { CommonHttpService } from '../services/common-http.service';
import { inject } from '@angular/core';
import { environments } from 'src/environments/enviroments';
import { of } from 'rxjs';

export const productResolver: ResolveFn<boolean> = (route, state) => {
  const commonHttp = inject(CommonHttpService)
  const productId = route.queryParams['id'];
  if(productId){
    return commonHttp.get(`${environments.baseUrl}product/getProductById/${productId}`);
  }else{
    return of(null)
  }
};
