import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { AlunosService } from './alunos.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    
   constructor(
     private authService:AuthService,
     private router: Router,
     private alunosService: AlunosService,
    ) { }

   canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot ): Observable<boolean> | boolean{
      this.alunosService.podeEditar();
      console.log('Rotas filhas')
      return true;
    
    }

}
