import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModel } from './aluno.routing';
import { AlunosGuard } from './alunos.guard';
import { AlunosCanDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';

@NgModule({
    imports:[
        CommonModule,
        AlunosRoutingModel,
        FormsModule
    ],
    exports:[],
    declarations:[
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers:[
        AlunosService,
        AlunosGuard,
        AlunosCanDeactivateGuard,
        AlunoDetalheResolver
    ],
})

export class AlunosModel {}
