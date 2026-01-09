import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';

@Component({
  selector: 'app-stat-card',
  imports: [MaterialModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCard {
  @Input() title!: string;
  @Input() count!: number;
  @Input() icon!: string;
}
