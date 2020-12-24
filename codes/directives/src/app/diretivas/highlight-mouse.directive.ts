import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  mouseEnterActive: boolean = false

  //events do dom https://developer.mozilla.org/pt-BR/docs/Web/Events
  @HostListener('mouseenter') onEnter = () => (this.bg = "yellow")
  @HostListener('mouseleave') onLeave = () => (this.bg = "transparent")

  @HostBinding('style.backgroundColor') bg?: string;

  constructor( private el: ElementRef, private rd: Renderer2 ) {}
}
