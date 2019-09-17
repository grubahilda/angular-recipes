import { Directive, HostListener, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseenter') mouseOver() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.isOpen = false;

  }
  constructor() {}

}
