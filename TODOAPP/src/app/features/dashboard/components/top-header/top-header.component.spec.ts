import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopHeaderComponent } from './top-header.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { of } from 'rxjs';

describe('TopHeaderComponent', () => {
  let component: TopHeaderComponent;
  let fixture: ComponentFixture<TopHeaderComponent>;
  let mockRouter: any;
  let mockAuthService: any;

  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockAuthService = {
      getProfileData: jasmine.createSpy('getProfileData').and.returnValue(of({
        profileImage: { dataUrl: 'mock-profile-url.jpg' }
      })),
      logout: jasmine.createSpy('logout')
    };

    await TestBed.configureTestingModule({
      declarations: [TopHeaderComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUserProfileData on init and set profile image URL', () => {
    expect(mockAuthService.getProfileData).toHaveBeenCalled();
    expect(component.profileImgageUrl).toBe('mock-profile-url.jpg');
  });

  it('should navigate to view profile', () => {
    component.goToViewProfile();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/landing/view-profile']);
  });

  it('should emit toggleSidebar event', () => {
    spyOn(component.toggleSidebar, 'emit');
    component.onToggleSidebar();
    expect(component.toggleSidebar.emit).toHaveBeenCalled();
  });

  it('should call logout method from AuthService', () => {
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
  });
});
