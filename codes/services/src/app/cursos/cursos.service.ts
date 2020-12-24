import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CursosService {
  cursos: string[] = ["Angular", "Javascript", "Typescript"];
  static onChange = new EventEmitter<string[]>();

  constructor(){
    console.log("CursosServices Init")
  }

  getCursos = () => this.cursos;

  addCurso(name: string){
    if(this.cursos.find(curso => curso === name)){ return; }

    this.cursos.push(name);
    return CursosService.onChange.emit(this.cursos);
  }

  remCurso(name: string){
    const index = this.cursos.findIndex(curso => curso === name);
    if(!index) return;
    this.cursos.splice(index, 1);
    return CursosService.onChange.emit(this.cursos);
  }
}
