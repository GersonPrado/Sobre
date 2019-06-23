import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';

import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  // bsModalRef: BsModalRef;
  cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService,
              private  alertService: AlertModalService
    ) { }

  ngOnInit() {
    /* this.service.list().subscribe(dados => this.cursos = dados);*/
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        // this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );

  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos  ');
    /* this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'danger';
      this.bsModalRef.content.message = 'Erro ao carregar os cursos !';
    */
  }
}
