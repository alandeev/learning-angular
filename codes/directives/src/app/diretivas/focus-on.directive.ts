import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focusOn]'
})
export class FocusOnDirective {
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
    this.el.nativeElement.focus();
  }
}
