import { Component, inject, OnInit } from '@angular/core';
import { LibrosService } from '../../../../core/services/book-service';
import { Books } from '../../../../core/interfaces/books';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit {

  private readonly librosService = inject(LibrosService);

  searchOptions = [
    { label: 'Código', value: 'codigo' },
    { label: 'Título', value: 'titulo' },
    { label: 'Autor', value: 'autor' },
    { label: 'Editorial', value: 'editorial' },
    { label: 'Año Publicación', value: 'anioPublicacion' },
    { label: 'Género', value: 'genero' },
    { label: 'Ubicación', value: 'ubicacion' },
    { label: 'Stock', value: 'stock' }
  ];

  books: Books[] = [];
  filteredBooks: Books[] = [];

  showConfirmDialog = false;
  dialogTitle = '';
  dialogMessage = '';
  selectedBook: Books | null = null;

  showBookModal = false;
  editingBook: Books | null = null;

  librosSinStock = 0;
  stockTotal = 0;

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.librosService.getAll().subscribe(data => {
      this.books = data;
      this.filteredBooks = [...data];

      this.librosSinStock = data.filter(b => b.stock === 0).length;
      this.stockTotal = data.reduce((acc, b) => acc + b.stock, 0);
    });
  }

  onAskToggle(book: Books) {
    this.selectedBook = book;

    if (book.estado) {
      this.dialogTitle = 'Desactivar libro';
      this.dialogMessage = '¿Deseas desactivar el libro?';
    } else {
      this.dialogTitle = 'Activar libro';
      this.dialogMessage = '¿Deseas activar el libro?';
    }

    this.showConfirmDialog = true;
  }

  confirmToggle() {
    if (!this.selectedBook) return;

    const action$ = this.selectedBook.estado
      ? this.librosService.desactivar(this.selectedBook.id)
      : this.librosService.activar(this.selectedBook.id);

    action$.subscribe({
      next: () => {
        this.selectedBook!.estado = !this.selectedBook!.estado;
        this.filteredBooks = [...this.books];
        this.cancelDialog();
      },
      error: () => alert('Error al cambiar estado del libro')
    });
  }

  cancelDialog() {
    this.showConfirmDialog = false;
    this.selectedBook = null;
  }

  onSearch(event: { field: string; value: string }) {
    const { field, value } = event;

    if (!value) {
      this.filteredBooks = [...this.books];
      return;
    }

    this.filteredBooks = this.books.filter(book =>
      String((book as any)[field] ?? '')
        .toLowerCase()
        .includes(value.toLowerCase())
    );
  }

  onCreateBook() {
    this.editingBook = null;
    this.showBookModal = true;
  }

  onEditBook(book: Books) {
    this.editingBook = book;
    this.showBookModal = true;
  }

  closeBookModal() {
    this.showBookModal = false;
    this.editingBook = null;
  }

  onSaveBook(book: Partial<Books>) {
    if (this.editingBook?.id) {
      this.librosService.update(this.editingBook.id, book).subscribe(() => {
        this.loadBooks();
        this.closeBookModal();
      });
    } else {
      this.librosService.create(book).subscribe(() => {
        this.loadBooks();
        this.closeBookModal();
      });
    }
  }

  get librosActivos() {
    return this.books.filter(b => b.estado).length;
  }
}