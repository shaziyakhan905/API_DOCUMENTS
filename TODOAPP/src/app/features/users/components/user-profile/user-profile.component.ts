import { Component } from '@angular/core';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { environments } from 'src/environments/enviroments';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(private CommonHttpService:CommonHttpService){

  }

 

}

