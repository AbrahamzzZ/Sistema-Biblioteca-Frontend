import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Client } from './client/client';
import { MaterialModule } from '../../../shared/ui/material-module';


@NgModule({
  declarations: [
    Client
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
