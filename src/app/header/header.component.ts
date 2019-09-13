import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() option = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onSelect(view: string) {
    this.option.emit(view);
  }
}
