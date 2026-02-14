import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './text-area.html',
  styleUrl: './text-area.css',
})
export class TextArea {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() rows = 3;
  @Input() maxlength?: number;
}
