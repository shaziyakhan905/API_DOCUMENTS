import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    const isValid = typeof email === 'string' && email.endsWith('@gmail.com');
    return isValid ? null : { invalidEmail: true };
  };
}
