import { Component, Input, OnInit } from '@angular/core';
import { adds, departments, headprofile, services,roles } from 'src/app/mocks/oprations';

@Component({
  selector: 'app-oprations-home',
  templateUrl: './oprations-home.component.html',
  styleUrls: ['./oprations-home.component.scss']
})
export class OprationsHomeComponent implements OnInit {
 
  headprofileList:any = headprofile;
  departmentList:any = departments;
  addList:any = adds;
  serviceList:any = services;
  roleType:any = roles;
  profile: any;
  dummayImage:string = "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg";
   ngOnInit(): void {
    console.log(headprofile)
    
  }
  // @Input() media :any

}
