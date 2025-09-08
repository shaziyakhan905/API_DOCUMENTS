import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonHttpService } from 'src/app/core/services/common-http.service';


@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {
  newsData:any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private common: CommonHttpService) {
  }
  ngOnInit(): void {
    this.setViewNewsByIdFromResolver();
  }

  setViewNewsByIdFromResolver() {
    this.activatedRoute.data.subscribe((result: any) => {
      this.newsData = result.newsData.data
    });
  }
}
