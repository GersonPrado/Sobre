import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const cursosRoutes = [
        { path: 'cursos', component: CursosComponent, children:[
        { path: ':id',component: CursoDetalheComponent},        
        { path: 'cursoNaoEncontrado',component: CursoNaoEncontradoComponent},
    ]},    
];

@NgModule({
    imports:[
        RouterModule.forChild(cursosRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class CursosRoutingModel {}