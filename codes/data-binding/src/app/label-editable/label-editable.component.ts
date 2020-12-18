import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'label-editable',
  templateUrl: './label-editable.component.html',
  styleUrls: ['./label-editable.component.css']
})
export class LabelEditableComponent{
  @Input('startWithInput') isInput: boolean = false;
  @Input('value') value: string = "";

  @Output('onChange') eventChange = new EventEmitter();

  title: string = "Component Label-Editable";

  editChangeType(): void{
    this.isInput = true;
  }

  keyUpInput(key: string): void {
    if(key == "Enter"){
      this.isInput = false;
      this.eventChange.emit({ value: this.value });
    }else{
      console.log({ value: this.value, component: "FILHO" });
    }
  }
}
