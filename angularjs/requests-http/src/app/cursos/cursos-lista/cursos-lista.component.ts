import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';

import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { catchError, take, switchMap } from 'rxjs/operators';
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
              private alertService: AlertModalService,
              private router: Router,
              private route: ActivatedRoute,
              private bsModalService: BsModalService
              ) { }

  ngOnInit() {
    /* this.service.list().subscribe(dados => this.cursos = dados);*/
    this.onRefresh();

  }
  private onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(catchError(error => {
        // this.error$.next(true);
        this.handleError();
        return EMPTY;
      }));
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos  ');
    /* this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'danger';
      this.bsModalRef.content.message = 'Erro ao carregar os cursos !';
    */
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete( curso ) {
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover este curso ?');
    result$.asObservable().pipe(take(1),
    switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde !');
      }
    );
  }
}
