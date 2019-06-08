import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadosBr } from '../models/estados-br';
import { CidadesBr } from '../models/cidades-br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }
  getEstadosBr() {
    return this.http.get<EstadosBr[]>('assets/dados/estadosbr.json');

  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Junior' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Senior' }
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java',  desc: 'Java' },
      { nome: 'csharp',  desc: 'Net. Core' },
      { nome: 'php',  desc: 'PHP' },
      { nome: 'ruby',  desc: 'Ruby' }
    ];
  }

  getNewsletter() {
    return [
      { valor: 's',  desc: 'Sim' },
      { valor: 'n',  desc: 'Não' }
    ];
  }

  getCidades(idEstado: number) {
    return this.http.get<CidadesBr[]>('assets/dados/cidades.json')
    .pipe(
      // tslint:disable-next-line: triple-equals
      map((cidades: CidadesBr[]) => cidades.filter(c => c.estado == idEstado))
    );
  }
}
