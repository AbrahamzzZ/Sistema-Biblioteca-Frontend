import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
})
export class InputField {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  getErrorMessage(): string {
    if (!this.control?.errors) return '';

    if (this.control.errors['required']) {
      return `${this.label} es obligatorio`;
    }

    if (this.control.errors['email']) {
      return `Correo electrónico inválido`;
    }

    if (this.control.errors['soloNumeros']) {
      return `${this.label} solo debe contener números`;
    }

    if (this.control.errors['soloLetras']) {
      return `${this.label} solo debe contener letras`;
    }

    if (this.control.errors['soloEspacios']) {
      return `${this.label} no puede contener solo espacios`;
    }

    if (this.control.errors['rango']) {
      const { min, max } = this.control.errors['rango'];
      return `${this.label} debe estar entre ${min} y ${max}`;
    }

    if (this.control.errors['longitud']) {
      const { min, max } = this.control.errors['longitud'];
      return `${this.label} debe tener entre ${min} y ${max} caracteres`;
    }

    return 'Campo inválido';
  }
}
