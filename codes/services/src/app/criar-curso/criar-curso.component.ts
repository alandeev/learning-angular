import { Component, Input, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {
  cursos!: string[];

  constructor(private cursosService: CursosService) { }

  ngOnInit(){
    CursosService.onChange.subscribe((cursos: string[]) => this.cursos = cursos);
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(value: string){
    this.cursosService.addCurso(value);
  }

  onRemCurso(value: string){
    this.cursosService.remCurso(value)
  }
}
