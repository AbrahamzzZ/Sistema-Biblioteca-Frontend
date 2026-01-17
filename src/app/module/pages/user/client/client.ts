import { Component } from '@angular/core';
import { Table } from '../../../../core/interfaces/table';

@Component({
  selector: 'app-client',
  standalone: false,
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
  searchOptions = [
    {label: 'Nombre', value: 'name'},
    {label: 'Correo Electrónico', value: 'email'},
    {label: 'Teléfono', value: 'phone'}
  ];

  columns: Table[] = [
    { label: 'Nombre', key: 'name', type: 'text' },
    { label: 'Correo', key: 'email', type: 'text' },
    { label: 'Teléfono', key: 'phone', type: 'text' },
    { label: 'Acciones', type: 'actions' }
  ];

  users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@mail.com', phone: '0987654321' },
    { id: 2, name: 'Ana Torres', email: 'ana@mail.com', phone: '0987654321' }
  ];

  filteredUsers = [...this.users];

  showDeleteDialog = false;
  selectedUser: any = null;
  showUserModal = false;
  editingUser: any = null;

  onSearch(event: { field: string; value: string }) {

  }

  onAskDelete(user: any) {
    this.selectedUser = user;
    this.showDeleteDialog = true;
  }

  onCreateUser() {
    this.editingUser = null;
    this.showUserModal = true;
  }

  onEditUser(user: any) {
    this.editingUser = user;
    this.showUserModal = true;
  }

  closeUserModal() {
    this.showUserModal = false;
  }

  onSaveUser(user: any) {
    if (user.id) {
      this.users = this.users.map(u =>
        u.id === user.id ? user : u
      );
    } else {
      user.id = Date.now();
      this.users.push(user);
    }

    this.filteredUsers = [...this.users];
    this.closeUserModal();
  }

  cancelDelete() {
    this.showDeleteDialog = false;
    this.selectedUser = null;
  }

  confirmDelete() {
    this.users = this.users.filter(u => u.id !== this.selectedUser.id);
    this.filteredUsers = [...this.users];
    this.cancelDelete();
  }
}
