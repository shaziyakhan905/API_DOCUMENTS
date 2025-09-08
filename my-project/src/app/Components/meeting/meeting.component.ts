import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent {
  getMeetingDetails:any[] = [];
 constructor (){
    let meetingDetails:any = localStorage.getItem("meetingDetails");
    this.getMeetingDetails = JSON.parse(meetingDetails);
      console.log(this.getMeetingDetails)
  }
 
}
