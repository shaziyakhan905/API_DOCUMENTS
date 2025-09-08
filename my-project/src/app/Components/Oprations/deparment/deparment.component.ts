import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-deparment',
  templateUrl: './deparment.component.html',
  styleUrls: ['./deparment.component.scss']
})
export class DeparmentComponent implements OnChanges {

  @Input('departments') departments:any
    departmentList:any = [];

    ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['departments']['currentValue'])
    if(changes['departments']['currentValue']){
      this.departmentList = changes['departments']['currentValue']
    }


  }


}
