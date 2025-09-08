import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/interfaces/notice';
import {banners, notices, advertisements} from 'src/app/mocks/landing'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  bannersList:any = banners;
  noticesList:Notice[] = notices;
  advertisementsList:any = advertisements;
  ngOnInit(): void {
    // console.log(banners)
    // console.log(notices)
    // console.log(advertisements)
  }
}
