import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-2',
  templateUrl: './form-2.component.html',
  styleUrls: ['./form-2.component.scss']
})
export class Form2Component {
  loginForm: FormGroup;
  issubmitted: boolean = false

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15)])
    });

  }
  isSubmitted() {
    this.issubmitted = true
    const mailLOginFOrm = this.loginForm.value;
    console.log(mailLOginFOrm);

  }
  get userLogin() {
    return this.loginForm
  }

}
