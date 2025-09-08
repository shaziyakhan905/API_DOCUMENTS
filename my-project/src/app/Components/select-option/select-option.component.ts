import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnChanges {
  @Input('options') options: any;
  @Input('lebelText') lebelText: any = "";
  @Input('placeholderText') placeholderText: any = "Search...";
  @Input('multiSelect') multiSelect: boolean = false;


  @ViewChild('autoContainer') autoContainer!: ElementRef;

  @Output() valueChanges = new EventEmitter<any>();

  showDropdown: boolean = false;
  availableOptions: any[] = [];
  selectedOption: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.availableOptions = changes['options']['currentValue'];
  }

  onOptionSelect(option: any) {
    this.showDropdown = false;
    this.selectedOption = [option];
    this.valueChanges.emit(option.value);
  }

  filterOptions(event: any) {
    const searchText = event.target.value;
    this.availableOptions = this.options.filter((option: any) =>
      option.element.text.toLowerCase().includes(searchText.toLowerCase())
    );
    this.showDropdown = true;
  }

  //Hide dropdown when clicked outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.autoContainer &&
      !this.autoContainer.nativeElement.contains(event.target)
    ) {
      this.showDropdown = false;
    }
  }

}
