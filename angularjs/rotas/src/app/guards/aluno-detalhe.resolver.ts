import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Aluno } from '../alunos/aluno';
import { AlunosService } from '../alunos/alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService:AlunosService ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        
        return this.alunosService.getAluno(route.params['id']);
    }
}
