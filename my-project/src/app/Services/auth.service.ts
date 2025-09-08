import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getRequestHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('token', 'servicejhjhgjgsjdgh7657@6654!1');
    return headers
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    if (token != null) {
      return token
    } else {
      return "";
    }
  }
}
