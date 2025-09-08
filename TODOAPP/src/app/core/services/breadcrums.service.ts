import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumsService {
  breadcrumsList$ = new BehaviorSubject<any>([]);
  
  constructor() { }

  setBreadcrums(items:any):void{
    this.breadcrumsList$.next(items);
  }

  getBreadcrums():Observable<any>{
    return this.breadcrumsList$.asObservable();
  }

}
