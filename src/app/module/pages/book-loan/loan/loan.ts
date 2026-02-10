import { Component } from '@angular/core';
import { Table } from '../../../../core/interfaces/table';

@Component({
  selector: 'app-loan',
  standalone: false,
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan {

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

  onSearch(event: { field: string; value: string }) {

  }

  onEditLoan(loan: any){
    this.editingLoan = loan;
    this.showUserModal = true;
  }

  onCreateLoan() {
    this.editingLoan = null;
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
