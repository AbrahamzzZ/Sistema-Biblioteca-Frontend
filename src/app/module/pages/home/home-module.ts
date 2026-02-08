import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { StatCard } from '../../../shared/components/stat-card/stat-card';
import { DetailCard } from "./components/detail-card/detail-card";


@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DetailCard,
    StatCard,
    DetailCard
]
})
export class HomeModule { }
