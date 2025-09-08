import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userStatus, displayMe } from '../../../mocks/mock-user-data';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/Services/auth.service';
import { ActionButton } from 'src/app/enums/actions';

@Component({
  selector: 'app-userapi-record',
  templateUrl: './userapi-record.component.html',
  styleUrls: ['./userapi-record.component.scss']
})
export class UserapiRecordComponent implements OnInit {
  ActionButton = ActionButton;
  userList: any = [];
  constructor(private router: Router,
    private httpClient: HttpClient,
    private toster: ToastrService,
    private activatedroute: ActivatedRoute,
    private authService: AuthService) {
    
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
     this.getAlluser();
  }

  createNewUser() {
    this.router.navigate(['/poc/createuserapi'])
  }

  getAlluser() {
    // let headers = new HttpHeaders();
    // headers = headers.append("authorization", `Bearer ${this.authService.getToken()}`);
    // headers = headers.append("os", "windows");

    this.httpClient.get(`${environment.baseUrl}user/getAllUsers`).subscribe((result: any) => {
      console.log(result)
      this.userList = result.users
    });
  };

  gotToviewPage(user: any) {
    console.log(user._id)
    this.router.navigate(['/poc/apiview'], { queryParams: { id: user._id } })
  }

  deleteUser(user: any) {
      let headers = new HttpHeaders();
    headers = headers.append("authorization", `Bearer ${this.authService.getToken()}`);
    headers = headers.append("os", "windows");
    const confirmation = confirm("are you sure want to delete user")
    if (confirmation) {
      const userId = user._id
      this.httpClient.delete(`${environment.baseUrl}user/deleteUser/${userId}`,{headers:headers}).subscribe((result: any) => {
        console.log(result)
        this.toster.success("User Deleted successfully")
        this.getAlluser();
      });
    };
  };

  goToEditUser(user: any) {
    const userId = user._id
    this.router.navigate(['/poc/createuserapi'], { queryParams: { id: userId, action: 'edit' } });
  };

}
