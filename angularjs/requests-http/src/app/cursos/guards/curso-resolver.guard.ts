import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { CursosService } from './../cursos.service';
import { Observable, of } from 'rxjs';
import { Curso } from '../cursos-lista/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor( private service: CursosService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (route.params && route.params['id']) {
      return this.service.findById(route.params['id']);
    }
    return of({
      id: null,
      nome: null
    });

  }
}
