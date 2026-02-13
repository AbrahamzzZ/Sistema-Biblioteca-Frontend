import { Component, inject, OnInit } from '@angular/core';
import { LibrosService } from '../../../../core/services/book-service';
import { Books } from '../../../../core/interfaces/books';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit{
  private readonly librosService = inject(LibrosService);
  searchOptions = [
    {label: 'Codigo', value: 'codigo'},
    {label: 'Nombre', value: 'name'},
    {label: 'Titulo', value: 'titulo'},
    {label: 'Autor', value: 'autor'},
    {label: 'Editorial', value: 'editorial'},
    {label: 'Año Publicación', value: 'anioPublicacion'},
    {label: 'Genero', value:'genero'},
    {label: 'Ubicación', value: 'ubicacion'},
    {label: 'Stock', value: 'stock'}
  ];

  books: Books[] = [];
  filteredBooks: Books[] = [];
  showDeleteDialog = false;
  selectedBook: any = null;
  showBookModal = false;
  editingBook: any = null;

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.librosService.getAll().subscribe({
      next: (data) => {
        this.books = data;
        this.filteredBooks = data;
      },
      error: () => alert('Error al cargar libros')
    });
  }

  onSearch(event: { field: string; value: string }) {
    const { field, value } = event;

    if (!value) {
      this.filteredBooks = this.books;
      return;
    }

    this.filteredBooks = this.books.filter(book =>
      String((book as any)[field])
        .toLowerCase()
        .includes(value.toLowerCase())
    );
  }

  onCreateBook() {
    this.editingBook = undefined;
    this.showBookModal = true;
  }

  onEditBook(book: any) {
    this.editingBook = book;
    this.showBookModal = true;
  }

  closeBookModal() {
    this.showBookModal = false;
    this.editingBook = null;
  }

  onSaveBook(book: Partial<Books>) {
    if (this.editingBook) {
      this.librosService.update(this.editingBook.id, book).subscribe({
        next: () => {
          this.loadBooks();
          this.closeBookModal();
        }
      });
    } else {
      this.librosService.create(book).subscribe({
        next: () => {
          this.loadBooks();
          this.closeBookModal();
        }
      });
    }
  }

  cancelDelete() {
    this.showDeleteDialog = false;
    this.selectedBook = null;
  }

  confirmDelete() {
    this.librosService.delete(this.selectedBook.id).subscribe({
      next: () => {
        this.selectedBook.estado = false;
        this.cancelDelete();
      }
    });
  }

  onAskDelete(book: any) {
    this.selectedBook = book;
    this.showDeleteDialog = true;
  }
}
