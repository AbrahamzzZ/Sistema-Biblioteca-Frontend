import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookLoanRoutingModule } from './book-loan-routing-module';
import { Loan } from './loan/loan';
import { MaterialModule } from '../../../shared/ui/material-module';
import { StatCard } from '../../../shared/components/stat-card/stat-card';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { Button } from '../../../shared/components/button/button';
import { DataTable } from '../../../shared/components/data-table/data-table';
import { Dialog } from '../../components/dialog/dialog';
import { Modal } from '../../components/modal/modal';
import { Form } from './components/form/form';
import { LoanDialog } from './components/loan-dialog/loan-dialog';


@NgModule({
  declarations: [
    Loan
  ],
  imports: [
    CommonModule,
    BookLoanRoutingModule,
    StatCard,
    SearchBar,
    Button,
    DataTable,
    Dialog,
    Modal,
    Form,
    LoanDialog,
    MaterialModule
  ]
})
export class BookLoanModule { }
