import { Component, OnInit } from '@angular/core';
import { Observable, Subject, empty, EMPTY } from 'rxjs';

import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService) { }

  ngOnInit() {
    /* this.service.list().subscribe(dados => this.cursos = dados);*/
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        this.error$.next(true);
        return EMPTY;
      })
    );
  }

}
