import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { environments } from 'src/environments/enviroments';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  userProfileForm: FormGroup;
  isEditing: boolean = false;
  isFormSubmited: boolean = false
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  userProfileInfo: any = {};
  profileImgageUrl: string = "../../../../../assets/images/profile-image.jpg";

  constructor(
    private commonHttp: CommonHttpService,
    private notifyService: NotifyService,
    private activatedRoute: ActivatedRoute,
    private deviceService: DeviceDetectorService,
    private authService: AuthService) {
    this.userProfileForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      emailId: new FormControl(),
      mobileNo: new FormControl(),
      country: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      skills: new FormArray([this.createSkill()])
    });

    this.authService.getProfileData().subscribe((profile: any) => {
      this.userProfileInfo = profile;
    })
  };

  ngOnInit(): void {
    this.getCountryList();
    // this.getProfile();
    this.updateUserForm();
    this.getDeviceInfo();
  };

  getDeviceInfo() {
    const info = this.deviceService.getDeviceInfo();
    console.log(info)
  }


  get skills(): FormArray {
    return this.userProfileForm.get('skills') as FormArray;
  }

  createSkill(skill?: any): FormGroup {
    return new FormGroup({
      name: new FormControl(skill?.name || "", [Validators.required]),
      experience: new FormControl(skill?.experience || 0, [Validators.required]),
      level: new FormControl(skill?.level || "", [Validators.required]),
    })
  }

  addSkill(skill?: any): void {
    this.skills.push(this.createSkill(skill));
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit() {
    this.isFormSubmited = true
    const payload = this.userProfileForm.value;
    const finalPayload = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      mobileNo: payload.mobileNo,
      countryId: payload.country,
      stateId: payload.state,
      cityId: payload.city,
      skills: payload.skills
    };
    this.commonHttp.put(`${environments.baseUrl}user/updateUserProfile`, finalPayload)
      .subscribe((result: any) => {
        if (result.status == "success") {
          this.notifyService.showSuccess("", result.message);
          this.isEditing = false;
          this.makeUserFormReadonly();
        }
      });

  }

  getCountryList() {
    this.commonHttp.get(`${environments.baseUrl}address/countries`)
      .subscribe((result: any) => {
        console.log(result);
        this.countryList = result;
      });
  }
  onCountryChange(event: any) {
    let countryId = event.target.value;
    this.getStatesByCountryId(countryId);
  }

  getStatesByCountryId(countryId: string) {
    this.commonHttp.get(`${environments.baseUrl}address/states/${countryId}`)
      .subscribe((result: any) => {
        this.stateList = result;
      });
  };

  onStateChange(event: any) {
    let stateId = event.target.value;
    this.getCitiesByStateId(stateId);
  }

  getCitiesByStateId(stateId: string) {
    this.commonHttp.get(`${environments.baseUrl}address/cities/${stateId}`)
      .subscribe((result: any) => {
        this.cityList = result;
      });
  };

  updateUserForm() {
    const user = this.userProfileInfo;
    this.profileImgageUrl = user.profileImage.dataUrl;
    this.getStatesByCountryId(user.country._id);
    this.getCitiesByStateId(user.state._id);
    this.userProfileForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      emailId: user.emailId,
      mobileNo: user.mobileNo,
      country: user.country._id,
      state: user.state._id,
      city: user.city._id,
    });
    if (user.skills.length > 0) {
      this.skills.clear();
      user.skills.forEach((skill: any) => {
        this.addSkill(skill);
      });
    }

    this.makeUserFormReadonly();
  }

  makeUserFormReadonly() {
    this.userProfileForm.get('firstName')?.disable();
    this.userProfileForm.get('lastName')?.disable();
    this.userProfileForm.get('emailId')?.disable();
    this.userProfileForm.get('mobileNo')?.disable();
    this.userProfileForm.get('country')?.disable();
    this.userProfileForm.get('city')?.disable();
    this.userProfileForm.get('state')?.disable();

    this.skills.controls.forEach(control => {
      control.disable();
    });

  }

  makeUserFormEditable() {
    this.userProfileForm.get('firstName')?.enable();
    this.userProfileForm.get('lastName')?.enable();
    this.userProfileForm.get('mobileNo')?.enable();
    this.userProfileForm.get('country')?.enable();
    this.userProfileForm.get('city')?.enable();
    this.userProfileForm.get('state')?.enable();
    this.skills.controls.forEach(control => {
      control.enable();
    });
  }

  editProfile() {
    this.isEditing = true;
    this.makeUserFormEditable();
  }

  cancelEditing() {
    this.isEditing = false;
    this.makeUserFormReadonly();
  }


  onSelectprofileImage(): void {
    this.fileInput.nativeElement.click();
  }


  onProfileImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      const maxSizeInMB = 1;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        this.notifyService.showError('Only PNG, JPG, and JPEG files are allowed.', 'Please pass the valid image');
        return;
      }
      if (file.size > maxSizeInBytes) {
        this.notifyService.showError('File size should not exceed 1MB.', 'Please pass the valid file size.');
        return;
      }
      console.log('Valid file selected:', file);
      // Proceed with file upload or preview
      this.updateProfileImage(file);
    }
  }

  updateProfileImage(file: File) {
    const formData = new FormData();
    formData.append('profileImage', file)
    this.commonHttp.post(`${environments.baseUrl}user/uploadProfile`, formData)
      .subscribe((result: any) => {
        if (result.status == "success") {
          this.notifyService.showSuccess("", result.message);
          this.profileImgageUrl = result.user.profileImage.dataUrl;
          this.authService.setProfileData(result.user);
        }
      });
  }

}