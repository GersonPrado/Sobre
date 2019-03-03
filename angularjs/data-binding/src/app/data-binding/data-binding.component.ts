import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string = "";

  valorDigitado: string = "";

  url: string = 'http://loiane.com'
  
  cursoAngular: boolean = true;

  urlImagem: any = 'http://lorempixel.com/400/200/'

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurso() {
    return true;
  }

  botaoClicado() {
    alert('clicou');
  }

  OnKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);    
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorDigitado = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
