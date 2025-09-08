import { ResolveFn } from '@angular/router';
import { CommonHttpService } from '../services/common-http.service';
import { inject } from '@angular/core';
import { environments } from 'src/environments/enviroments';

export const userProfileResolver: ResolveFn<any> = (route, state) => {
  const commonHttp = inject(CommonHttpService);
  return commonHttp.get(`${environments.baseUrl}user/profile`);
};
