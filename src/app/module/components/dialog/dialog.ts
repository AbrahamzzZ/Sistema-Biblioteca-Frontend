import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
  @Input() title = 'Confirmar eliminación';
  @Input() message = '¿Estás seguro de eliminar este elemento?';
  @Input() itemName?: string;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();
}
