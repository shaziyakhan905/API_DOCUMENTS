import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActionButton } from 'src/app/enums/actions';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-usersrecord',
  templateUrl: './usersrecord.component.html',
  styleUrls: ['./usersrecord.component.scss']
})
export class UsersrecordComponent {
  ActionButton = ActionButton;
  allUsersList: any[] = [];
  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  userViewData: any;
  isLoading: boolean = false;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private activatedRout: ActivatedRoute,
    private toster: ToastrService,
    private authService: AuthService) {
    this.getAllUser();
  }

  getAllUser() {
    // let headers = new HttpHeaders();
    // headers = headers.append("authorization", `Bearer ${this.authService.getToken()}`);
    // headers = headers.append("os", "windows");
    // this.isLoading = true;
    this.httpClient.get(`${this.baseUrl}user/getAllUsers`).subscribe((result: any) => {
      console.log(result)
      // this.isLoading = false;
      this.allUsersList = result.users
    })
  }

  goToCreateUser() {
    this.router.navigate(['/poc/creatuser'])
  }

  goToViewUser(user: any) {
    console.log(user._id)
    // this.router.navigate([`/poc/viewUser/${user._id}`]);
    this.router.navigate([`/poc/userview/${user._id}`]);
  }

  deleteUserById(user: any) {
    console.log(user)
    const confirmation = confirm("Are you sure want to delete user?");
    if (confirmation) {
      const userId = user._id;
      this.httpClient.delete(`${this.baseUrl}user/deleteUser/${userId}`).subscribe((result: any) => {
        console.log(result);
        this.toster.success("User Deleted successfully")
        this.getAllUser();
      });
    }
  }

  gotToEditUser(user: any) {
    const userId = user._id;
    this.router.navigate(['/poc/creatuser'], { queryParams: { id: userId, action: 'edit' } });
  };
}