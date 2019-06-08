import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome:  'Gerson',
    email: 'gprado@gmail.com'
  };

  onSubmit(form) {
    this.http.post('https://httpbin.org/post',
                   JSON.stringify(form.value))
                   .subscribe(dados => console.log(dados));
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'form-control-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cepP: string, form: any) {
    const cep = cepP.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.resetaDadosForm(form);

        this.cepService.consultaCEP(cep).subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, form) {
    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
     /*form.setValue({
      nome: form.value.nome,
      email: form.value.email,

    });*/
  }

  resetaDadosForm(form) {
    form.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
