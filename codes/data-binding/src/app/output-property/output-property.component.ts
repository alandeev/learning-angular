import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent{
  @Input('start') number: number = 0;
  @Output('mudouValor') mudouValor = new EventEmitter();

  meu_nome: string = "alan"

  constructor() { }

  increment(){
    this.number++;
    this.mudouValor.emit({ value: this.number });
  }

  decrement(){
    this.number--;
    this.mudouValor.emit({ value: this.number });
  }
}
