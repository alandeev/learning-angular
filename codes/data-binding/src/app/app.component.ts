import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentValue = 16
  ciclyDeleted: boolean = false;
  title = 'data-binding';

  increment(){
    this.currentValue++;
  }

  cicloDelete(){
    this.ciclyDeleted = !this.ciclyDeleted;
  }
}
