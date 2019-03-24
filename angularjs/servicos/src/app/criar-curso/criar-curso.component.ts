import { Component, OnInit } from '@angular/core';

import { CursosServices } from '../cursos/cursos.services';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosServices]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = []
  constructor( private _cursosServices: CursosServices) { }

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosServices.addCurso(curso);
  }

}
