import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable()
export class CursosServices {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso:any = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2','Java','C#','NodeJs'];
    constructor(private logService:LogService) {
        console.log('CursosServices');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando o curso: ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosServices.criouNovoCurso.emit(curso);
    }
}