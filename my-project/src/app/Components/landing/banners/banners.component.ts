import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnChanges {
  @Input('banners') banners:any;
  bannerCollection:any[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['banners']['currentValue'])
    if(changes['banners']['currentValue']){
      this.bannerCollection = changes['banners']['currentValue'];
    }
  }

}
