import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@mail.com', phone: '0987654321' },
    { id: 2, name: 'Ana Torres', email: 'ana@mail.com', phone: '0987654321' }
  ];

  filteredUsers = [...this.users];
}
