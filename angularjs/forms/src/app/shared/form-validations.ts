import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário preencher o campo.');
      }
      if (!formControl.root || !(formControl.root as FormGroup).controls ) {
        return null;
      }

      const field = (formControl.root as FormGroup).get(otherField);
      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }
      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }
      return null;
    };
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
    'required': `${fieldName} é obrigatório.`,
    'minlength': `${fieldName} precisa ter no mímino ${validatorValue.requiredLength} caracteres`,
    'maxlength': `${fieldName} permite apenas ${validatorValue.requiredLength} caracteres`
    };
    return config[validatorName];
  }
}
