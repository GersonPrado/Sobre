import { VerificaEmailService } from './services/verifica-email.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, EMPTY } from 'rxjs';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { EstadosBr } from '../shared/models/estados-br';
import { FormValidations } from '../shared/form-validations';
import { map, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { CidadesBr } from '../shared/models/cidades-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  // estados: Observable<EstadosBr[]>;
  estados: EstadosBr[];
  cidades: CidadesBr[];
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks = [ 'Angular', 'React ', 'Vue', 'Sencha' ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
    ) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),email: new FormControl(null),endereco = new FormGroup({cep: new FormControl(null),
        numero: new FormControl(null)});});
    this.dropdownService.getEstadosBr().subscribe((dados: any) => this.estados = dados );*/
    // this.verificaEmailService.verificarEmail('').subscribe();
    // this.estados = this.dropdownService.getEstadosBr();
    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator ]],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });

    this.formulario.get('endereco.cep').statusChanges
    .pipe(
      distinctUntilChanged(),
      switchMap(status => status === 'VALID' ?
        this.consultaCepService.consultaCEP(this.formulario.get('endereco.cep').value)
      : empty()
      )
    )
    .subscribe(dados => dados ? this.populaDadosForm(dados) : {});
    this.formulario.get('endereco.estado').valueChanges
      .pipe(
        tap(estado => console.log('Novo estado:', estado)),
        map(estado => this.estados.filter(e => e.sigla === estado)),
        map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
        switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
        tap(console.log)
      )
      .subscribe(cidades => this.cidades = cidades);
  }

  onSubmit() {
    let valueSubmit = Object.assign({},this.formulario.value);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter( v => v !== null)
    });
    console.log(valueSubmit);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log('dados');
      },
        (error: any) => alert('erro'));
    } else {
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario);
    }

  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    }); // ECMA 2015 Iterar uma coleção ao inves de utilizar uma function utilizar o aerofunction do ECMA2015
  }

  verificaValidTouched(campo: string) {
    return( !this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched ||
            this.formulario.get(campo).dirty)
          );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'form-control-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if ( validacep.test(cep) ) {

        this.resetaDadosForm();

        this.consultaCepService.consultaCEP(cep).subscribe(dados => this.populaDadosForm(dados));
      }
    }
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
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
    this.formulario.get('nome').setValue('Gerson');
  }

  resetaDadosForm() {
    this.formulario.patchValue({
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

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? ( obj1.nome === obj2.nome && obj1.nivel === obj2.nivel ) : obj1 && obj2;
  }

  setarTecnologia() {
    this.formulario.get('tecnologia').setValue(['java', 'csharp', 'php']);
  }

  buildFrameworks() {
    const values = this.frameworks.map( v => new FormControl(false));
    return this.formBuilder.array(values);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? {emailInvalido: true} : null ));
  }
}
