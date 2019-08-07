import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertModalService } from './../../shared/alert-modal.service';
import { CursosService } from './../cursos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private alertModal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.route.params
    // .pipe(
    //  map((params: any) => params["id"]),
    //  switchMap(id => this.service.findById(id))
    // )
    // .subscribe(curso => this.updateForm(curso));

    // concatMap --> ordem de requisição importa
    // mergeMap --> ordem de requisição não importa
    // exhaustMap --> casos de login aguarda o retorno da requisição

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);

    let messageResult = 'Curso criado com sucesso !';
    let messageError  = 'Erro ao criar curso, tente novamente !';

    if ( this.form.value.id) {
      messageResult = 'Curso alterado com sucesso !';
      messageError  = 'Erro ao atualizar curso, tente novamente !';
    }

    this.service.save(this.form.value).subscribe(
      success => {
        this.alertModal.showAlertSucess(messageResult);
        this.location.back();
      },
      error => this.alertModal.showAlertDanger(messageError)
    );
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }
}
