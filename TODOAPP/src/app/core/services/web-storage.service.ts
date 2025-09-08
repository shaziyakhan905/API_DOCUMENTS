import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  setToLS(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getFromLS(key: string) {
    const data = localStorage.getItem(key);
    if (data != null) {
      return data
    } else {
      return "";
    }
  }
   remove(key: string) {
    localStorage.removeItem(key)
  }

}
