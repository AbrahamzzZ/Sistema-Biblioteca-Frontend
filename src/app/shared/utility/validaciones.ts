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

    static noSoloEspacios(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null;

            return control.value.trim().length > 0
            ? null
            : { soloEspacios: true };
        };
    }

    static longitudMinMax(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null;

            const length = control.value.length;
            return length >= min && length <= max
            ? null
            : { longitud: { min, max } };
        };
    }

    static rangoNumero(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value === null || control.value === '') return null;

            const value = Number(control.value);
            return value >= min && value <= max
            ? null
            : { rango: { min, max } };
        };
    }
}