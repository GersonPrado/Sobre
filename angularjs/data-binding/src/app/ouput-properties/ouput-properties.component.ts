import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './ouput-properties.component.html',
  styleUrls: ['./ouput-properties.component.css']
})
export class OuputPropertiesComponent implements OnInit {

  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef

  incrementa() {
    console.log(this.campoValorInput)
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  decrementa() {
    console.log(this.campoValorInput)
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
