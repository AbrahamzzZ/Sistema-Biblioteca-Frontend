import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './select-field.html',
  styleUrl: './select-field.css',
})
export class SelectField {
  @Input() label!: string;
  @Input() options: any[] = [];
  @Input() valueKey: string = '';
  @Input() labelKey: string = '';
  @Input() control!: FormControl;
}
