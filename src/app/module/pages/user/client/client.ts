import { Component, inject, OnInit } from '@angular/core';
import { Table } from '../../../../core/interfaces/table';
import { CreateUserRequest, User } from '../../../../core/interfaces/user';
import { UserService } from '../../../../core/services/user-service';

@Component({
  selector: 'app-client',
  standalone: false,
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client implements OnInit {
  private readonly userService = inject(UserService);
  searchOptions = [
    { label: 'Nombre', value: 'nombre_Completo' },
    { label: 'Cédula', value: 'cedula' },
    { label: 'Correo Electrónico', value: 'correo_Electronico' },
    { label: 'Teléfono', value: 'telefono' }
  ];

  columns: Table[] = [
    { label: 'Nombre', key: 'nombre_Completo', type: 'text' },
    { label: 'Cédula', key: 'cedula', type: 'text' },
    { label: 'Correo', key: 'correo_Electronico', type: 'text' },
    { label: 'Teléfono', key: 'telefono', type: 'text' },
    { label: 'Acciones', type: 'actions' }
  ];

  users: User[] = [];
  filteredUsers: User[] = [];

  showDeleteDialog = false;
  selectedUser: any = null;
  showUserModal = false;
  editingUser: any = null;

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: data => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: () => alert('Error al cargar usuarios')
    });
  }

  onSearch(event: { field: string; value: string }) {
    const { field, value } = event;

    if (!value) {
      this.filteredUsers = [...this.users];
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      String((user as any)[field] ?? '')
        .toLowerCase()
        .includes(value.toLowerCase())
    );
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

  onSaveUser(payload: CreateUserRequest) {

    if (this.editingUser?.id) {
      this.userService.update(this.editingUser.id, payload).subscribe({
        next: () => {
          this.closeUserModal();
          this.loadUsers();
        },
        error: () => alert('Error al actualizar usuario')
      });
    } else {
      this.userService.create(payload).subscribe({
        next: () => {
          this.closeUserModal();
          this.loadUsers();
        },
        error: () => alert('Error al registrar usuario')
      });
    }
  }

  cancelDelete() {
    this.showDeleteDialog = false;
    this.selectedUser = null;
  }

  confirmDelete() {
    this.userService.delete(this.selectedUser.id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== this.selectedUser.id);
        this.filteredUsers = [...this.users];
        this.cancelDelete();
      }
    });
  }
}
