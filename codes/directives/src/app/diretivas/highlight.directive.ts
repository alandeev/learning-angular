import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onEnter(): void{ (this.bgColor = this.defaultHLColor) }
  @HostListener('mouseleave') onLeave(): void{ (this.bgColor = this.defaultColor) }

  @Input('color') defaultColor: string = "#aaa";
  @Input('highlight') defaultHLColor: string = "yellow";

  @HostBinding('style.backgroundColor') bgColor: string;

  constructor() {
    this.bgColor = this.defaultColor;
  }

  ngOnInit(){
    console.log("NASCEU");
  }
}
