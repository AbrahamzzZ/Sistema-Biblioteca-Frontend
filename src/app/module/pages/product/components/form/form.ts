import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Button } from '../../../../../shared/components/button/button';
import { InputField } from '../../../../../shared/components/input-field/input-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../../../../../shared/utility/validaciones';
import { Card } from '../../../../../shared/components/card/card';

@Component({
  selector: 'app-form',
  imports: [MaterialModule, Button, InputField, Card],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit{
  @Input() book?: any;

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validaciones.noSoloEspacios(), Validaciones.longitudMinMax(3, 100)]),
    autor: new FormControl('', [Validators.required, Validaciones.soloLetras(), Validaciones.noSoloEspacios(), Validaciones.longitudMinMax(3, 10)]),
    editorial: new FormControl('', [Validators.required, Validaciones.noSoloEspacios(), Validaciones.longitudMinMax(3, 60)]),
    anioPublicacion: new FormControl(0, [Validators.required, Validaciones.rangoNumero(1500, new Date().getFullYear())]),
    genero: new FormControl('', [Validators.required, Validaciones.noSoloEspacios(), Validaciones.longitudMinMax(3, 40)]),
    stock: new FormControl(0, [Validators.required, Validaciones.rangoNumero(0, 10000)]),
    ubicacion: new FormControl('', [Validators.required, Validaciones.noSoloEspacios(), Validaciones.longitudMinMax(2, 30)])
  });

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
