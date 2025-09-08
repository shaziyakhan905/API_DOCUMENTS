import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebStorageService } from '../services/web-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private webStorage: WebStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.webStorage.getFromLS('token');
    // console.log(token)
    // console.log(request);

    if (token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
