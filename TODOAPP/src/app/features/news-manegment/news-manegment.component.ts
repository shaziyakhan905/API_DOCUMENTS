import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { environments } from 'src/environments/enviroments';

@Component({
  selector: 'app-news-manegment',
  templateUrl: './news-manegment.component.html',
  styleUrls: ['./news-manegment.component.scss']
})
export class NewsManegmentComponent implements OnInit {
  newsList: any[] = [];

  page: number = 1;
  limit: number = 5;
  profileImgageUrl: string = "../../../../../assets/images/profile-image.jpg"

  constructor(private router: Router,
    private commonHttpService: CommonHttpService,
    private notifyService: NotifyService,
    private breadcrumsService: BreadcrumsService,
  ) {
  }
  ngOnInit(): void {
    this.breadcrumsService.setBreadcrums(BREADCRUMS.news.list)
    this.getAllNews()
  }

  navigateToCreateNews() {
    this.router.navigate(['/landing/news-manegment/create-news'],
      { queryParams: { actionType: 'add' } });
  }

  getAllNews() {
    this.commonHttpService.get(`${environments.baseUrl}news/getAllNews`).subscribe((result: any) => {
      this.newsList = result.data
    });

    
  }

  onDeleteNews(news: any) {
    const confirmation = confirm(" are you sure want to delete it");
    if (confirmation) {
      const newsId = news._id
      this.commonHttpService.delete(`${environments.baseUrl}news/deleteNewsById/${newsId}`)
        .subscribe((result: any) => {
          this.notifyService.showError("Delete Confirmation", "Detail removed succesfully")
          this.getAllNews();
        });
    };
  }

  navigateToViewNews(news: any) {
    const newsId = news._id
    this.router.navigate(['/landing/news-manegment/view-news',newsId]);
  }

  updateNews(news: any) {
    const newsId = news._id
    this.router.navigate([`/landing/news-manegment/edit-news/${newsId}`])
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([])
  }
}
