import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Book } from './book/book';

const routes: Routes = [
  {
    path: '', component: Book, title: 'Libros'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
