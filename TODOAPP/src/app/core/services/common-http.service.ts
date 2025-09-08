import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private httpClient: HttpClient) { }


  get(url: string, params?: HttpParams): Observable<any> {
    const options = params ? { params } : {};
    return this.httpClient.get(url, options);
  }

  post(url: string, payload: any, headers?: any): Observable<any> {
    return this.httpClient.post(url, payload);
  }

  delete(url: string, headers?: any): Observable<any> {
    return this.httpClient.delete(url);
  }

  put(url: string, payload: any, headers?: any): Observable<any> {
    return this.httpClient.put(url, payload);
  }

  patch(url: string, payload: any, headers?: any): Observable<any> {
    return this.httpClient.patch(url, payload);
  }

  async jsGet(url: string) {
    const apiData = await fetch(url);
    const data = await apiData.json();
    return data
  }
}
