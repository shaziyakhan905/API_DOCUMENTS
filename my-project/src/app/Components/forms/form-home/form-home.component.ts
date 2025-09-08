import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.scss']
})
export class FormHomeComponent {
  formsMenu:any[] = [
    {
      id:1,
      title:"form-1",
      path:"/poc/forms/form-1",
      active:true
    },
    {
      id:2,
      title:"form-2",
      path:"/poc/forms/form-2",
      active:true
    },
    {
      id:3,
      title:"form-3",
      path:"/poc/forms/form-3",
      active:true
    },
    {
      id:3,
      title:"form-4",
      path:"/poc/forms/form-4",
      active:true
    },
    {
      id:4,
      title:"Login",
      path:"/poc/forms/login",
      active:true
    }
      
  ];
  menuActiveId:number = 0;
  constructor(private router:Router){
    // setTimeout(()=>{
    //   this.formsMenu.push({
    //     id:4,
    //     title:"form-4",
    //     path:"/forms/form-4",
    //     active:true
    //   })
    // },5000);

    this.menuActiveId = parseInt(localStorage.getItem('menuActiveId') || '');
  }

  navigateToPage(menu:any){
    console.log(menu)
    localStorage.setItem('menuActiveId', `${menu.id}`);
    this.menuActiveId = parseInt(localStorage.getItem('menuActiveId') || '');
    this.router.navigate([menu.path])
  }
}
