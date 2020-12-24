import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class DiretivaNgstyleComponent {
  ativo: boolean = false;
  tamanhoFonte: number = 12;
}
