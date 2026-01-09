import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Client } from './client/client';
import { MaterialModule } from '../../../shared/ui/material-module';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { DataTable } from '../../../shared/components/data-table/data-table';
import { Dialog } from '../../components/dialog/dialog';
import { StatCard } from '../../../shared/components/stat-card/stat-card';


@NgModule({
  declarations: [
    Client
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    SearchBar,
    DataTable,
    Dialog,
    StatCard
  ]
})
export class UserModule { }
