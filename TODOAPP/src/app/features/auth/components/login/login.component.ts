import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { WebStorageService } from 'src/app/core/services/web-storage.service';
import { emailValidator } from 'src/app/core/validators/emailValidator';
import { environments } from 'src/environments/enviroments';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  isloginSuccess = false;
  notifyService: any;

  constructor(
    private router: Router,
    private commonHttp: CommonHttpService,
    private webStorage: WebStorageService
  ) {
    this.loginForm = new FormGroup({
      emailId: new FormControl("sajjadrazi94@gmail.com", [Validators.required, Validators.email, emailValidator()]),
      password: new FormControl("admin", Validators.required),
    });
  };

  navigateToSignUp() {
    this.router.navigate(['/createUser'])
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      this.commonHttp.post(`${environments.baseUrl}login`, payload).subscribe((result: any) => {
        console.log(result);
        if (result.status == 'success') {
          this.webStorage.setToLS("token", result.token);
          this.router.navigate(['/landing/dashboard']);
        };
      })
    }

  };
  get getLoginValue() {
    return this.loginForm
  }

}
