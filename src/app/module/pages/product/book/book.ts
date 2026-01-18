import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  searchOptions = [
    {label: 'Codigo', value: 'codigo'},
    {label: 'Nombre', value: 'name'},
    {label: 'Titulo', value: 'titulo'},
    {label: 'Autor', value: 'autor'},
    {label: 'Editorial', value: 'editorial'},
    {label: 'Año Publicación', value: 'anioPublicacion'},
    {label: 'Genero', value:'genero'},
    {label: 'Ubicación', value: 'ubicacion'},
    {label: 'Estado', value: 'estado'}
  ];

  books = [
    { id: 1, codigo: "BK-001", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", editorial: "Editorial Sudamericana", anioPublicacion: 1967, genero: "Realismo mágico", stock: 12, ubicacion: "Estante A3", estado: true },
    { id: 2, codigo: "BK-002", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", editorial: "Francisco de Robles", anioPublicacion: 1605, genero: "Novela", stock: 5, ubicacion: "Estante B1", estado: false }
  ];

  filteredBooks = [...this.books];

  showDeleteDialog = false;
  selectedBook: any = null;
  showBookModal = false;
  editingBook: any = null;

  onSearch(event: { field: string; value: string }) {

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

  onSaveBook(book: any) {
    if (book.id) {
      this.books = this.books.map(b =>
        b.id === book.id ? book : b
      );
    } else {
      book.id = Date.now();
      this.books.push(book);
    }

    this.filteredBooks = [...this.books];
    this.closeBookModal();
  }

  cancelDelete() {
    this.showDeleteDialog = false;
    this.selectedBook = null;
  }

  confirmDelete() {
    this.books = this.books.filter(b => b.id !== this.selectedBook.id);
    this.filteredBooks = [...this.books];
    this.cancelDelete();
  }

  onAskDelete(book: any) {
    this.selectedBook = book;
    this.showDeleteDialog = true;
  }
}
