import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  userProfile: any = {};
  componentMenu: any[] = [
    {
      id: 1,
      title: 'dashboard',
      path: '/landing/dashboard',
      icon: 'house-door-fill'
    },
    {
      id: 2,
      title: 'user',
      path: '/landing/users',
      icon: 'person-workspace'
    },
    {
      id: 3,
      title: 'Product',
      path: '/landing/products',
      icon: 'box-seam product-icon'
    },
    {
      id: 4,
      title: 'notice',
      path: '/landing/notice',
      icon: 'exclamation-circle-fill notice-icon'
    },
    {
      id: 4,
      title: 'News Manegment',
      path: '/landing/news-manegment',
      icon: 'newspaper'
    }

  ]

  @Output() collapseSidebar = new EventEmitter<void>();
  constructor(private authService: AuthService) {
    this.authService.getProfileData().subscribe((data: any) => {
      if (data != null) {
        this.userProfile = data;
      }
    })
  }
  onCollapseSidebar() {
    this.collapseSidebar.emit();
  }

}
