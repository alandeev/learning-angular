import { Component } from '@angular/core';

@Component({
  selector: 'operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.css']
})
export class OperatorElvisComponent {
  tarefa: any = {
    desc: "Descrição da tarefa",
    responsavel: null,
    // responsavel: { nome: "teste" }
  }
}
