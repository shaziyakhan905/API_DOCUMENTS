import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CommonHttpService } from '../services/common-http.service';
import { environments } from 'src/environments/enviroments';
import { of } from 'rxjs';

export const noticeResolver: ResolveFn<any> = (route, state) => {
  const commonHttp = inject(CommonHttpService);
  const noticeId = route.params['id'];
  if (noticeId) {
    return commonHttp.get(`${environments.baseUrl}notice/singleNotice/${noticeId}`);
  } else {
    return of(null)
  }
};
