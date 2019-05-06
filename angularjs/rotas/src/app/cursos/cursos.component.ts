import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  cursos: any[];
  pagina: number = 0;
  inscricao: Subscription;

  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    this.inscricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  proximaPagina() {
    this._router.navigate(['/cursos'],
    {queryParams: {'pagina':++this.pagina}});    
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();    
  }

}
