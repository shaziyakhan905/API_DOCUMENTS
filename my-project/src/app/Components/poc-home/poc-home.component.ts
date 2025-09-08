import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poc-home',
  templateUrl: './poc-home.component.html',
  styleUrls: ['./poc-home.component.scss']
})
export class PocHomeComponent {
  formsMenu:any[] = [
    {
      id:1,
      title:"Dashboard",
      path:"/poc/dashboard",
      active:true
    },
    {
      id:1,
      title:"Landing",
      path:"/poc/landing",
      active:true
    },
    {
      id:1,
      title:"Employees",
      path:"/poc/employees",
      active:true
    },
    {
      id:2,
      title:"Interview",
      path:"/poc/interview-details",
      active:true
    },
    {
      id:3,
      title:"Feedback",
      path:"/poc/feedback",
      active:true
    },
    {
      id:4,
      title:"Calendar",
      path:"/poc/calendar",
      active:true
    },
    {
      id:5,
      title:"Student",
      path:"/poc/student",
      active:true
    },
    {
      id:6,
      title:"Test-Department",
      path:"/poc/test-department",
      active:true
    },
    {
      id:7,
      title:"Test-2",
      path:"/poc/test-2",
      active:true
    },
      {
      id:8,
      title:"product",
      path:"/poc/product",
      active:true
    },

     {
      id: 9,
      title: "usersrecord",
      path: "/poc/usersresord",
      active: true
    },
     {
      id: 10,
      title: "oprations",
      path: "/poc/oprationshome",
      active: true
     },

      {
      id: 11,
      title: "apihome",
      path: "/poc/apihome",
      active: true
     }
  
  ];

  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
