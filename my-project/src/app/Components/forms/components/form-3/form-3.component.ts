import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-3',
  templateUrl: './form-3.component.html',
  styleUrls: ['./form-3.component.scss']
})
export class Form3Component {
  signupForm: FormGroup;
  isSubmitted: boolean = false

  constructor() {
    this.signupForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(),
    });
  }
  onSubmitted() {
    this.isSubmitted = true
    const signupFormData = this.signupForm.value;
    console.log(signupFormData)
  }

  get signupFormData() {
    return this.signupForm
  }

}
