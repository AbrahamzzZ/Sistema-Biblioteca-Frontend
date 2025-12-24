import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing-module';
import { Main } from './main/main';
import { MaterialModule } from '../../../../shared/ui/material-module';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';



@NgModule({
  declarations: [
    Main
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    MaterialModule,
    RouterOutlet,
    Sidebar
]
})
export class MainLayoutModule { }
