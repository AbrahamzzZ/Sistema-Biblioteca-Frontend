import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { Book } from './book/book';
import { StatCard } from '../../../shared/components/stat-card/stat-card';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { Dialog } from '../../components/dialog/dialog';
import { BookCard } from './components/book-card/book-card';


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
    BookCard
  ]
})
export class ProductModule { }
