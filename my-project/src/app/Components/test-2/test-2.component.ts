import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-test-2',
  templateUrl: './test-2.component.html',
  styleUrls: ['./test-2.component.scss']
})
export class Test2Component {
  imagepath="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"

menuList:any[] =[
  {
    title:"home",
    isActive:true,
  },
  {
    title:"home",
    isActive:true,
  }
];

serviceList:any[]=[
  {
    name:"hosting",
    type:"publicService",
    status:true,
    image:"https://leboncall.com/wp-content/uploads/2016/08/callcenter3.gif"
  },
  {
    name:"hosting 002",
    type:"publicService",
    status:true,
    image:"https://thumbs.dreamstime.com/z/best-service-19784148.jpg?ct=jpeg"
  },
  {
    name:"hosting",
    type:"publicService",
    status:true,
    image:"https://www.shutterstock.com/shutterstock/photos/1470612767/display_1500/stock-vector-red-vector-illustration-banner-recommended-with-thumbs-up-1470612767.jpg"
  },
  {
    name:"hosting 002",
    type:"publicService",
    status:true,
    image:"https://www.shutterstock.com/shutterstock/photos/205018012/display_1500/stock-photo-thumbs-up-to-good-service-205018012.jpg"
  }
]


}
