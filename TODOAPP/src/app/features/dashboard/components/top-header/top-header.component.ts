import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  profileImgageUrl: string = "../../../../../assets/images/profile-image.jpg";
  constructor(
    private router: Router,
    private authService: AuthService) {
  }
  ngOnInit(): void {
    this.getUserProfileData();
  }

  goToViewProfile() {
    this.router.navigate(['/landing/view-profile'])
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  getUserProfileData() {
    this.authService.getProfileData().subscribe((profile: any) => {
      this.profileImgageUrl = profile?.profileImage.dataUrl;
    })
  }

  logout() {
    this.authService.logout();
  }
}
