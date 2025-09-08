import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input('name') name:string = "";

  ngOnInit(): void {
    // setTimeout(()=>{
    //   console.log("Some is changed...");
    // },5000)
  }
}
