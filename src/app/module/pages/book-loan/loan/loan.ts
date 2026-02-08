import { Component } from '@angular/core';
import { Table } from '../../../../core/interfaces/table';

@Component({
  selector: 'app-loan',
  standalone: false,
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan {
  columns: Table[] = [
    { label: 'Libro', key: 'book', type: 'text' },
    { label: 'Usuario', key: 'user', type: 'text' },
    { label: 'Fecha Préstamo', key: 'loadDate', type: 'text' },
    { label: 'Fecha Devolución', key: 'returnDate', type: 'text' },
    { label: 'Acciones', type: 'actions' }
  ];

  onEditUser(loan: any){

  }

  onAskDelete(loan: any){

  }
}
