import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';

@Component({
  selector: 'app-card',
  imports: [MaterialModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title?: string;
}
