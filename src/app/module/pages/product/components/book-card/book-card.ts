import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Books } from '../../../../../core/interfaces/books';

@Component({
  selector: 'app-book-card',
  imports: [MaterialModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  @Input() book!: Books;

  @Output() edit = new EventEmitter<Books>();
  @Output() delete = new EventEmitter<any>();
}
