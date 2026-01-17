import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Book } from '../../../../../core/interfaces/book';

@Component({
  selector: 'app-book-card',
  imports: [MaterialModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  @Input() book!: Book;

  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<any>();
}
