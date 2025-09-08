import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-reader',
  templateUrl: './image-reader.component.html',
  styleUrls: ['./image-reader.component.scss']
})
export class ImageReaderComponent {
  @Input("path") imagePath:string ="";
}
