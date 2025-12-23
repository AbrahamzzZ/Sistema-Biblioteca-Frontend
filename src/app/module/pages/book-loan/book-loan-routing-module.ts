import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loan } from './loan/loan';

const routes: Routes = [
  {
    path: '', component: Loan, title: 'Préstamo de Libros'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookLoanRoutingModule { }
