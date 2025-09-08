import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CommonHttpService } from '../services/common-http.service';
import { environments } from 'src/environments/enviroments';
import { of } from 'rxjs';

export const newsResolver: ResolveFn<any> = (route, state) => {
  const commonHttp = inject(CommonHttpService)
  const newsId = route.params['id'];
  if (newsId) {
    return commonHttp.get(`${environments.baseUrl}news/getNewsById/${newsId}`)
  } else {
    return of(null)
  };
}
