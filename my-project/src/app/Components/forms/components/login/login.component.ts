import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

export interface User {
  emailId: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup
  isSubmitted: boolean = false

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private toster: ToastrService,
    private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmit() {
    this.isSubmitted = true
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value
      const payload: User = {
        emailId: formValue.email,
        password: formValue.password
      }
      this.httpClient.post(`${environment.baseUrl}login`, payload).subscribe((result: any) => {
        console.log(result);
        if (result.status == 'success') {
          localStorage.setItem('token', result.token);
          this.router.navigate(["/poc/dashboard"])
        }
      }, (error) => {
        console.log(error)
        this.toster.error(error.error.message, "Error");
      })
    }

  }

  get getloginForm() {
    return this.loginForm
  }
}

