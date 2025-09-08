import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.scss']
})
export class AddsComponent implements OnChanges {
 
  @Input('adds') adds:any;
  addsList:any = [];
   ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['adds']['currentValue'])
    if(changes['adds']['currentValue']){
      this.addsList = changes['adds']['currentValue']
    }
  }

}
