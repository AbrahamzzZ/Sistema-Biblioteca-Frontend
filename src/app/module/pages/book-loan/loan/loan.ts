import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user-service';
import { BookService } from '../../../../core/services/book-service';
import { LoanService } from '../../../../core/services/loan-service';

@Component({
  selector: 'app-loan',
  standalone: false,
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan implements OnInit{
private readonly userService = inject(UserService);
  private readonly bookService = inject(BookService);
  private readonly loanService = inject(LoanService);

  usuarios: any[] = [];
  libros: any[] = [];

  showLoanModal = false;

  ngOnInit() {
    this.loadUsuariosActivos();
    this.loadLibrosActivos();
  }

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

  onCreateLoan() {
    this.showLoanModal = true;
  }

  closeLoanModal() {
    this.showLoanModal = false;
  }

  onSaveLoan(payload: any) {
    const request = {
      usuarioId: payload.usuarioId,
      libroId: payload.libroId,
      fechaPrestamo: new Date().toISOString(),
      fechaLimite: payload.fechaLimiteDevolucion
    };

    this.loanService.create(request).subscribe({
      next: () => {
        this.closeLoanModal();
        // aquí puedes meter toast si quieres
      }
    });
  }
}
