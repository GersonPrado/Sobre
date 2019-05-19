import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AuthGuard } from './guards/auth.guard';
import { PagenotFoundComponent } from './pagenotfound/pagenotfound.component';

const APP_ROUTES: Routes = [
    { path: 'cursos',component: CursosComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
        },
    { path: 'alunos',component: 
        AlunosComponent, 
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
        
    { path: 'login',component: LoginComponent },
    
    { path: 'home',component: HomeComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    }, 

    {path: '**', component: PagenotFoundComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES,{useHash:true});