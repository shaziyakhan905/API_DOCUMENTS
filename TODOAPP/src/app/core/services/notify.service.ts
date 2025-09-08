import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toster: ToastrService) { }

  showSuccess(title: string, message: string) {
    this.toster.success(message, title);
  }
  
  showError(title: string, message: string) {
    this.toster.error(message, title);
  }
}
