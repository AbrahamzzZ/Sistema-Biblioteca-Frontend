import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { MaterialModule } from '../../../shared/ui/material-module';
import { InputField } from "../../../shared/components/input-field/input-field";
import { Button } from "../../../shared/components/button/button";


@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    InputField,
    Button
]
})
export class AuthModule { }
