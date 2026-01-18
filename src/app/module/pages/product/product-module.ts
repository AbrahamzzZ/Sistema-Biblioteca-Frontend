import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { Book } from './book/book';
import { StatCard } from '../../../shared/components/stat-card/stat-card';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { Dialog } from '../../components/dialog/dialog';
import { BookCard } from './components/book-card/book-card';
import { Button } from '../../../shared/components/button/button';
import { Modal } from '../../components/modal/modal';
import { Form } from './components/form/form';


@NgModule({
  declarations: [
    Book
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SearchBar,
    Dialog,
    StatCard,
    BookCard,
    Button,
    Modal,
    Form
  ]
})
export class ProductModule { }
