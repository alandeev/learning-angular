import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    // não usar acima -> tem vunerabilidade cross- algo assim

    // use abaixo!
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }
}
