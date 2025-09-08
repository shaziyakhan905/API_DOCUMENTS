import { Injectable } from '@angular/core';
import { WebStorageService } from './web-storage.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfile$ = new BehaviorSubject<any>(null);
  constructor(
    private webstorage: WebStorageService,
    private router: Router) { }

  setProfileData(data: any) {
    this.userProfile$.next(data);
  }

  getProfileData() {
    return this.userProfile$.asObservable();
  }

  logout() {
    this.webstorage.remove('token');
    this.router.navigate(['/']);
  }

}
