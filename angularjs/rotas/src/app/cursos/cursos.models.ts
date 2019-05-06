import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosService } from './cursos.service';

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRoutingModel } from './curso.routing';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
    imports:[
        CommonModule,
        CursosRoutingModel,
        FormsModule
    ],
    exports:[],
    declarations:[
        CursosComponent,        
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers:[
        CursosService
    ],
})

export class CursosModel {}
