import { Component, inject, OnInit } from '@angular/core';
import { Table } from '../../../../core/interfaces/other/table';
import { UserService } from '../../../../core/services/user-service';
import { BookService } from '../../../../core/services/book-service';

@Component({
  selector: 'app-loan',
  standalone: false,
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan implements OnInit{
  private readonly userService = inject(UserService);
  private readonly bookService = inject(BookService);
  modalMode: 'create' | 'edit' | 'view' = 'create';
  searchOptions = [
    {label: 'Libro', value: 'book',},
    {label: 'Usuario', value: 'user'},
    {label: 'Fecha Préstamo', value: 'loadDate'},
    {label: 'Fecha Devolución', value: 'returnDate'}
  ];

  columns: Table[] = [
    { label: 'Libro', key: 'book', type: 'text' },
    { label: 'Usuario', key: 'user', type: 'text' },
    { label: 'Fecha Préstamo', key: 'loadDate', type: 'text' },
    { label: 'Fecha Devolución', key: 'returnDate', type: 'text' },
    { label: 'Acciones', type: 'actions' }
  ];

  usuarios: any[] = [];
  libros: any[] = [];

  ngOnInit() {
    this.loadLibrosActivos();
    this.loadUsuariosActivos();
  }

  loans = [
    {
      id: 1, book: 'Cien años de soledad', user: 'Abraham Farfan', loadDate: '2025-01-1', returnDate: '2025-02-20'
    }
  ];

  filteredLoans = [...this.loans];

  showDeleteDialog = false;
  selectedLoan: any = null;
  showUserModal = false;
  editingLoan: any = null;

  loadUsuariosActivos() {
    this.userService.getAll().subscribe(users => {
      this.usuarios = users
        .filter(u => u.estado === true)
        .map(u => ({
          id: u.id,
          nombre: u.nombre_Completo
        }));
    });
  }

  loadLibrosActivos() {
    this.bookService.getAll().subscribe(books => {
      this.libros = books
        .filter(b => b.estado === true && b.stock > 0)
        .map(b => ({
          id: b.id,
          titulo: b.titulo
        }));
    });
  }

  onSearch(event: { field: string; value: string }) {

  }

  onCreateLoan() {
    this.editingLoan = null;
    this.modalMode = 'create';
    this.showUserModal = true;
  }

  onEditLoan(loan: any) {
    this.editingLoan = loan;
    this.modalMode = 'edit';
    this.showUserModal = true;
  }

  onViewLoan(loan: any) {
    this.editingLoan = loan;
    this.modalMode = 'view';
    this.showUserModal = true;
  }
  onAskDelete(loan: any){
    this.selectedLoan = loan;
    this.showDeleteDialog = true;
  }

  closeLoanModal() {
    this.showUserModal = false;
  }

  onSaveLoan(loan: any) {
    if (loan.id) {
      this.loans = this.loans.map(u =>
        u.id === loan.id ? loan : u
      );
    } else {
      loan.id = Date.now();
      this.loans.push(loan);
    }

    this.filteredLoans = [...this.loans];
    this.closeLoanModal();
  }

  cancelDelete() {
    this.showDeleteDialog = false;
    this.selectedLoan = null;
  }

  confirmDelete() {
    this.loans = this.loans.filter(u => u.id !== this.selectedLoan.id);
    this.filteredLoans = [...this.loans];
    this.cancelDelete();
  }
}
