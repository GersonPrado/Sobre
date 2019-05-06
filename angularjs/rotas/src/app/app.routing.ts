import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
    { path: 'cursos',component: CursosComponent,
        canActivate: [AuthGuard]
        },
    { path: 'alunos',component: 
        AlunosComponent, 
        canActivate: [AuthGuard]},
    { path: 'login',component: LoginComponent },
    { path: '',component: HomeComponent,
        canActivate: [AuthGuard]
    } 

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);