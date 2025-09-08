import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProfileComponent } from './view-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { of } from 'rxjs';

describe('ViewProfileComponent', () => {
  let component: ViewProfileComponent;
  let fixture: ComponentFixture<ViewProfileComponent>;

  const mockProfile = {
    firstName: 'John',
    lastName: 'Doe',
    emailId: 'john@example.com',
    mobileNo: '1234567890',
    country: { _id: 'country1' },
    state: { _id: 'state1' },
    city: { _id: 'city1' },
    profileImage: { dataUrl: 'mock-url.jpg' },
    skills: [
      { name: 'Angular', experience: 3, level: 'Intermediate' }
    ]
  };

  const mockAuthService = {
    getProfileData: jasmine.createSpy('getProfileData').and.returnValue(of(mockProfile)),
    setProfileData: jasmine.createSpy('setProfileData')
  };

  const mockCommonHttpService = {
    get: jasmine.createSpy('get').and.returnValue(of([])),
    put: jasmine.createSpy('put').and.returnValue(of({ status: 'success', message: 'Profile updated' })),
    post: jasmine.createSpy('post').and.returnValue(of({ status: 'success', message: 'Image uploaded', user: mockProfile }))
  };

  const mockNotifyService = {
    showSuccess: jasmine.createSpy('showSuccess'),
    showError: jasmine.createSpy('showError')
  };

  const mockDeviceService = {
    getDeviceInfo: jasmine.createSpy('getDeviceInfo').and.returnValue({ device: 'browser' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProfileComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: CommonHttpService, useValue: mockCommonHttpService },
        { provide: NotifyService, useValue: mockNotifyService },
        { provide: DeviceDetectorService, useValue: mockDeviceService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and initialize form', () => {
    expect(component).toBeTruthy();
    expect(component.userProfileForm).toBeDefined();
  });

  it('should load profile data and patch form', () => {
    expect(component.userProfileInfo.firstName).toBe('John');
    expect(component.profileImgageUrl).toBe('mock-url.jpg');
    expect(component.skills.length).toBe(1);
  });

  it('should add and remove skills', () => {
    component.addSkill({ name: 'React', experience: 2, level: 'Beginner' });
    expect(component.skills.length).toBe(2);
    component.removeSkill(1);
    expect(component.skills.length).toBe(1);
  });

  it('should submit form and update profile', () => {
    component.editProfile();
    component.userProfileForm.get('firstName')?.setValue('Jane');
    component.onSubmit();
    expect(mockCommonHttpService.put).toHaveBeenCalled();
    expect(mockNotifyService.showSuccess).toHaveBeenCalled();
    expect(component.isEditing).toBeFalse();
  });

});
