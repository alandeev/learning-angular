import {
  Directive,
  ElementRef,
  Input,
  AfterContentInit
} from '@angular/core';

@Directive({ selector: '[appAutoFocus]' })
export class AutoFocusDirective implements AfterContentInit {
  @Input() public autoFocus: boolean = false;

  public constructor(private el: ElementRef) { }

  ngAfterContentInit(): void {
    this.el.nativeElement.focus();
  }
}
