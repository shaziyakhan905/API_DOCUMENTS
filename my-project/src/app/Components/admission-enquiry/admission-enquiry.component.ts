import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admission-enquiry',
  templateUrl: './admission-enquiry.component.html',
  styleUrls: ['./admission-enquiry.component.scss']
})
export class AdmissionEnquiryComponent {
  admissionForm:FormGroup;

  constructor(){
    this.admissionForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      course: new FormControl()
    })

    console.log(this.admissionForm);
  }

  onEnquirySubmit(){
    const enquiryFormValue = this.admissionForm.value;
    console.log(enquiryFormValue);
    this.admissionForm.reset();
  }
}
