import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-head-profiles',
  templateUrl: './head-profiles.component.html',
  styleUrls: ['./head-profiles.component.scss']
})
export class HeadProfilesComponent implements OnChanges {

  @Input('profile') profile:any;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['profile']['currentValue'])
  }

}
