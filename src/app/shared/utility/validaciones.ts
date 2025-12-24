import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validaciones {
    static soloLetras(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            return regex.test(control.value) ? null : { soloLetras: true };
        };
    }

    static soloNumeros(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const regex = /^\d{10}$/;
            return regex.test(control.value) ? null : { soloNumeros: true };
        };
    }
}