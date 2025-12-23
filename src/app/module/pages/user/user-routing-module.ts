import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client } from './client/client';

const routes: Routes = [
  {
    path: '', component: Client, title: 'Clientes'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
