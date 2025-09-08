import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-test',
  templateUrl: './html-test.component.html',
  styleUrls: ['./html-test.component.scss']
})
export class HTMLTestComponent {

  main() {
    alert("You heve cliced on red")
  }

  childBox(event: any) {
    event.stopPropagation();
    alert("You heve cliced on Green")
  }

  subChild(event: any) {
    event.stopPropagation();
    alert("You heve cliced on Blue")
  }

}
