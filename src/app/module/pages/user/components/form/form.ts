import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Button } from '../../../../../shared/components/button/button';
import { InputField } from '../../../../../shared/components/input-field/input-field';
import { Checkbox } from '../../../../../shared/components/checkbox/checkbox';
import { Card } from '../../../../../shared/components/card/card';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [MaterialModule, Button, InputField, Checkbox, Card],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit{
  @Input() user?: any;

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    estado: new FormControl(true),
  });

  ngOnInit() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit({
        ...this.user,
        ...this.form.value
      });
    }
  }
}
