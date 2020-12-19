import { Component } from '@angular/core';

@Component({
  selector: 'diretiva-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  cursos: string[] = ["Javascript", "Angular", "Typescript"]
}
