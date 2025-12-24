import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../button/button';
import { InputField } from '../input-field/input-field';
import { SelectField } from '../select-field/select-field';

@Component({
  selector: 'app-search-bar',
  imports: [MaterialModule, ReactiveFormsModule, Button, InputField, SelectField, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() options: { label: string; value: string }[] = [];
  @Input() placeholder: string = 'Buscar...';
  @Input() showRegisterButton: boolean = false;

  @Output() search = new EventEmitter<{ field: string; value: string }>();
  @Output() register = new EventEmitter<void>();

  private readonly formBuilder = inject(FormBuilder);
  public form = this.formBuilder.group({
    field: [''],
    value: [''],
  });

  onSearch() {
    console.log('Buscar');
  }

  onRegister() {
    this.register.emit();
  }
}
