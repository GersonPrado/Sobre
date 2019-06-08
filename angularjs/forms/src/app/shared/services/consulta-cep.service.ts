import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CepBr } from '../models/cep-br';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cepP: string) {
    const cep = cepP.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        return this.http.get<CepBr>(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  }
}
