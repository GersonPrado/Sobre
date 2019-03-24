import { Component, OnInit } from '@angular/core';

import { CursosServices } from './cursos.services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosServices]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosServices: CursosServices;

  constructor(private _cursosServices: CursosServices) { 
    //this.cursosServices = new CursosServices();
    //this.cursosServices = _cursosServices;
  }

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
    
    CursosServices.criouNovoCurso.subscribe(
      (curso:string) => this.cursos.push(curso)     
    );
  }

}
