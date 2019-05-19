import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iforms-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        
        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }

      }
    )
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {

    if(this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página ?');
    }

    return true;

  }

  podeDesativar() {
    this.podeMudarRota();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();      
  }

}
