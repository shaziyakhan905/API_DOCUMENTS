import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { ActionButton } from 'src/app/core/enums/actions';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { environments } from 'src/environments/enviroments';
// import { ToastrService } from 'ngx-toastr';
// import { ActionButton } from 'src/app/enums/actions';
// import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  ActionButton = ActionButton;
  allUsersList: any[] = [];

  constructor(private commonHttp: CommonHttpService,
    private router: Router,
    private notify: NotifyService,
  private breadcrumsService:BreadcrumsService) {
  }

  ngOnInit(): void {
    this.breadcrumsService.setBreadcrums(BREADCRUMS.user.list)
    this.getAllUser();
  }
  getAllUser() {
    this.commonHttp.get(`${environments.baseUrl}user/getAllUsers`).subscribe((result: any) => {
      this.allUsersList = result.users
    })
  }

  // // goToCreateUser() {
  //   this.router.navigate(['/poc/creatuser'])
  // }

  goToViewUser(user: any) {
    this.router.navigate([`/landing/users/user-view/${user._id}`]);
  }

  deleteUserById(user: any) {
    const confirmation = confirm("Are you sure want to delete user?");
    if (confirmation) {
      const userId = user._id;
      this.commonHttp.delete(`${environments.baseUrl}user/deleteUser/${userId}`).subscribe((result: any) => {
        console.log(result);
        this.notify.showError("Delete Confirmation", "User Deleted successfully");
        this.getAllUser();
      });
    }
  }

  gotToEditUser(user: any) {
    const userId = user._id;
    this.router.navigate(['/poc/creatuser'], { queryParams: { id: userId, action: 'edit' } });
  };
  ngOnDestroy(){
    this.breadcrumsService.setBreadcrums([])

  }
}
