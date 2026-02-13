import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Button } from '../../../../../shared/components/button/button';
import { InputField } from '../../../../../shared/components/input-field/input-field';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../../../../../shared/utility/validaciones';
import { Card } from '../../../../../shared/components/card/card';

@Component({
  selector: 'app-form',
  imports: [MaterialModule, Button, InputField, Checkbox, Card],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit{
  @Input() book?: any;

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    titulo: new FormControl('', Validators.required),
    autor: new FormControl('', [Validators.required, Validaciones.soloLetras()]),
    editorial: new FormControl('', Validators.required),
    anioPublicacion: new FormControl(0, Validators.required),
    genero: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required),
    ubicacion: new FormControl(''),
    estado: new FormControl(true),
  });

  generos = [
    'Novela',
    'Ciencia ficción',
    'Fantasía',
    'Historia',
    'Educativo',
  ];

  ngOnInit() {
    if (this.book) {
      this.form.patchValue({
        ...this.book,
        anioPublicacion: this.book.anio_Publicacion
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit({
        ...this.book,
        ...this.form.value
      });
    }
  }
}
