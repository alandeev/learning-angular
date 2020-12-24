import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {
  curso!: string;
  curso_static!: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    // CursosService.criouNovoCurso.subscribe((curso: string) => this.curso_static = curso);
  }

}
