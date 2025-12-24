import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker-field',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './datepicker-field.html',
  styleUrl: './datepicker-field.css',
})
export class DatepickerField {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
}
