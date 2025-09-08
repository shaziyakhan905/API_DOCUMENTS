import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnChanges {

  @Input('services') services:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['services']['currentValue'])
    
  }


}
