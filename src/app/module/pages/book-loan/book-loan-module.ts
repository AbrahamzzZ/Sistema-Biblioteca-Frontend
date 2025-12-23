import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookLoanRoutingModule } from './book-loan-routing-module';
import { Loan } from './loan/loan';
import { MaterialModule } from '../../../shared/ui/material-module';


@NgModule({
  declarations: [
    Loan
  ],
  imports: [
    CommonModule,
    BookLoanRoutingModule,
    MaterialModule
  ]
})
export class BookLoanModule { }
