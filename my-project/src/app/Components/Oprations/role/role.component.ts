import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnChanges {

  @Input('roles') roles:any

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  
}

}
