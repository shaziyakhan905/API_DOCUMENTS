import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { stocks } from 'src/app/mocks/oprations';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnChanges{
  @Input('stocks') stocks:any
   stockList:any = []
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['stocks']['currentValue'])
    if(changes['stocks']['currentValue']){
      this.stockList = changes['stocks']['currentValue']
    }
    
  }

}
