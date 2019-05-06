import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any [] = [];
  constructor(
      private alunosService: AlunosService,
      private router: Router
      ) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

  novoContato() {
    this.router.navigate(['/alunos','novo']);
  }
}