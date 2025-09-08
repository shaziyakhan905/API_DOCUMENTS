import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { WebStorageService } from 'src/app/core/services/web-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidebarCollapsed = false;
  
  constructor(private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.activatedRoute.data.subscribe((resolverData: any) => {
      if (resolverData['profile'] != null) {
        const userProfileInfo = resolverData['profile']['user'];
        this.authService.setProfileData(userProfileInfo);
      }
    })
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}

