import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss']
})
export class MeetingFormComponent {
  meetingForm: FormGroup;

  constructor(private rout:Router) {
    this.meetingForm = new FormGroup({
      title: new FormControl(),
      startDateTime: new FormControl(),
      endDateTime: new FormControl(),
      agenda: new FormControl(),
      description: new FormControl(),
    })

  }

  onMeetingCreation() {
    const meetingValue = this.meetingForm.value
    let  finalResult = JSON.stringify([meetingValue])
    localStorage.setItem("meetingDetails",finalResult)
   this.rout.navigate(["/meeting"])
  }
}
