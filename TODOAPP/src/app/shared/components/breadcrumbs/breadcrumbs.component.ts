import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  breadcrums$: Observable<any> = this.breadcrumsService.getBreadcrums();
  constructor(private breadcrumsService: BreadcrumsService,
    private router: Router
  ) {

  }

  navigate(event:MouseEvent,item: any) {
    event.preventDefault();
    this.router.navigate([item.path])
  }
}
