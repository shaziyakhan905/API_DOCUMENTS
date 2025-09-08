import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnChanges {
  @Input('advertisements') advertisements: any;
  advertisementCollection: any = [];
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['advertisements']['currentValue'])
    if (changes['advertisements']['currentValue']) {
      this.advertisementCollection = changes['advertisements']['currentValue'];
    }
  }

}
