import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  filtro: string;
  livros: string[] = ['Java','Angular 2'];
  livro: any = {
    titulo: 'Livro para ler',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.90,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  constructor() { }

  addCurso(novoLivro) {
    this.livros.push(novoLivro);
  }

  obterCurso() {
    if(this.livros.length===0 || this.filtro === undefined || this.filtro.trim()==='') {
      return this.livros;
    }

    return this.livros.filter((v)=> {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    })

  }

  ngOnInit() {
  }

}
