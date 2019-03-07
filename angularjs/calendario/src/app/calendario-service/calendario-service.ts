import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calendario } from './calendario';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private http: HttpClient) { }

  private readonly URLAPI = 'https://devopsforge.indrabrasil.com.br/api/v1/events'

  getCalendario () {
    return this.URLAPI;
  }

  listaCalendario() {
    return this.http.get<Calendario[]>(this.URLAPI);
  }
}
