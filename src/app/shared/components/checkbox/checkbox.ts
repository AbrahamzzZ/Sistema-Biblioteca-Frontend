import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [MaterialModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  @Input() label!: string;
  @Input() control!: FormControl<boolean | null>;
  @Input() disabled: boolean = false;
}
