import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../ui/material-module';
import { Menu } from '../../../core/interfaces/menu';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink, MaterialModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() isSidebarCollapsed = false;
  @Input() userName = '';
  @Input() menuItems: Menu[] = [];
  @Output() sidebarToggle = new EventEmitter<void>();
  private readonly router =inject(Router);

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
