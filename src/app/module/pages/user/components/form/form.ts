import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Button } from '../../../../../shared/components/button/button';
import { InputField } from '../../../../../shared/components/input-field/input-field';
import { Card } from '../../../../../shared/components/card/card';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateUserRequest } from '../../../../../core/interfaces/user';

@Component({
  selector: 'app-form',
  imports: [MaterialModule, Button, InputField, Card],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit {
  @Input() user?: any;

  @Output() save = new EventEmitter<CreateUserRequest>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    nombreCompleto: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    correoElectronico: new FormControl('', [Validators.required, Validators.email]),
    direccion: new FormControl(''),
    telefono: new FormControl('')
  });

  ngOnInit() {
    if (this.user) {
      this.form.patchValue({
        nombreCompleto: this.user.nombre_Completo,
        cedula: this.user.cedula,
        correoElectronico: this.user.correo_Electronico,
        direccion: this.user.direccion,
        telefono: this.user.telefono
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value as CreateUserRequest);
    }
  }
}
