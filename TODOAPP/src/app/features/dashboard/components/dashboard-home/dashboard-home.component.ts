import { Component, NgZone, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { forkJoin } from 'rxjs';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NewsManegmentComponent } from 'src/app/features/news-manegment/news-manegment.component';
import { environments } from 'src/environments/enviroments';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  cards: any[] = [];

  constructor(private CommonHttpService: CommonHttpService,
    private ngZone: NgZone
  ) {

  }

  // Chart 1
  chart1Data!: ChartDataset[];
  chart1Labels!: string[];
  chart1Type!: ChartType;
  chart1Options!: ChartOptions;

  // Chart 2
  chart2Data!: ChartDataset[];
  chart2Labels!: string[];
  chart2Type!: ChartType;
  chart2Options!: ChartOptions;


  ngOnInit(): void {
    this.fetchReportsAndStats();
    this.loadAllCharts();
  }


  loadAllCharts() {
    this.ngZone.runOutsideAngular(() => {
      // This logic runs outside Angular's change detection
      this.initializeCharts1();
      this.initializeCharts2();
      console.log('Running outside Angular');
      
      // If you need to update the UI, re-enter Angular zone
      this.ngZone.run(() => {
        console.log('Back inside Angular');
        // Trigger UI update here
      });
    });
  }


  initializeCharts1(): void {
    this.chart1Data = [
      { data: [8, 16, 10, 14], label: 'Sales' }
    ];
    this.chart1Labels = ['Users', 'Products', 'Notice', 'NewsManegmen'];
    this.chart1Type = 'bar';
    this.chart1Options = {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    };
  }

  initializeCharts2(): void {
    this.chart2Data = [
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Revenue' }
    ];
    this.chart2Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    this.chart2Type = 'line';
    this.chart2Options = {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    };
  }

  fetchReportsAndStats() {
    const api1$ = this.CommonHttpService.get(`${environments.baseUrl}user/getAllUsers`);
    const api2$ = this.CommonHttpService.get(`${environments.baseUrl}product/allProduct`);
    const api3$ = this.CommonHttpService.get(`${environments.baseUrl}notice/allNotice`);
    const api4$ = this.CommonHttpService.get(`${environments.baseUrl}news/getAllNews`);
    const data = forkJoin([api1$, api2$, api3$, api4$]);
    data.subscribe((result: any) => {

      const users = result[0].users;
      const products = result[1].allProduct;
      const notices = result[2].notices
      const news = result[3].data


      this.cards = [
        { title: 'Users', count: users.length || 0, icon: '👥' },
        { title: 'Products', count: products?.length || 0, icon: '📦' },
        { title: 'Notices', count: notices?.length || 0, icon: '📢' },
        { title: 'News', count: news?.length || 0, icon: '📢' }
      ];
    });
  };
}
