import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from "../../../../../shared/components/card/card";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { SelectField } from '../../../../../shared/components/select-field/select-field';
import { DatepickerField } from '../../../../../shared/components/datepicker-field/datepicker-field';
import { Button } from '../../../../../shared/components/button/button';
import { TextArea } from '../../../../../shared/components/text-area/text-area';

@Component({
  selector: 'app-form',
  imports: [MaterialModule, Card, TextArea, SelectField, DatepickerField, Button],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit {

  @Input() loan?: any;
  @Input() usuarios: any[] = [];
  @Input() libros: any[] = [];

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    usuario: new FormControl('', Validators.required),
    libro: new FormControl('', Validators.required),
    fechaLimiteDevolucion: new FormControl('', Validators.required),
    observacion: new FormControl('')
  });

  ngOnInit() {
    if (this.loan) {
      this.form.patchValue({
        usuario: this.loan.usuarioId,
        libro: this.loan.libroId,
        fechaLimiteDevolucion: this.loan.fechaLimiteDevolucion,
        observacion: this.loan.observacion
      });

      this.form.controls.usuario.disable();
      this.form.controls.libro.disable();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit({
        ...this.loan,
        usuarioId: this.form.getRawValue().usuario,
        libroId: this.form.getRawValue().libro,
        fechaLimiteDevolucion: this.form.getRawValue().fechaLimiteDevolucion,
        observacion: this.form.getRawValue().observacion,
        estado: true
      });
    }
  }

  get isEdithMode(): boolean {
    return !!this.loan;
  }
}
