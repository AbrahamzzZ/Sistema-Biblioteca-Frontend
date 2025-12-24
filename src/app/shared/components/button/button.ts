import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';

@Component({
  selector: 'app-button',
  imports: [MaterialModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label!: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() icon?: string;
  @Input() disabled: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();

  onClick(){
    if(!this.disabled){
      this.clickEvent.emit();
    }
  }
}
