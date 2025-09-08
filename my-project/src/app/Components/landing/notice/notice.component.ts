import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Notice } from '../../../interfaces/notice';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnChanges {
  @Input('notices') notices: Notice[] = [];
  noticCollection: Notice[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['notices']['currentValue']);
    if (changes['notices']['currentValue']) {
      this.noticCollection = changes['notices']['currentValue'];
    }
  }


}
