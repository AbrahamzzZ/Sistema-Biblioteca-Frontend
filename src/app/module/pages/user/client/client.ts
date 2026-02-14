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

  showConfirmDialog = false;
  dialogTitle = '';
  dialogMessage = '';
  selectedUser: User | null = null;

  showUserModal = false;
  editingUser: User | null = null;

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: data => {
        this.users = data;
        this.filteredUsers = [...data];
      },
      error: () => alert('Error al cargar usuarios')
    });
  }

  onAskToggle(user: User) {
    this.selectedUser = user;

    if (user.estado) {
      this.dialogTitle = 'Desactivar usuario';
      this.dialogMessage = '¿Deseas desactivar el usuario?';
    } else {
      this.dialogTitle = 'Activar usuario';
      this.dialogMessage = '¿Deseas activar el usuario?';
    }

    this.showConfirmDialog = true;
  }

  confirmToggle() {
    if (!this.selectedUser) return;

    const action$ = this.selectedUser.estado
      ? this.userService.desactivar(this.selectedUser.id)
      : this.userService.activar(this.selectedUser.id);

    action$.subscribe({
      next: () => {
        this.selectedUser!.estado = !this.selectedUser!.estado;
        this.filteredUsers = [...this.users];
        this.cancelDialog();
      },
      error: () => alert('Error al cambiar estado')
    });
  }

  cancelDialog() {
    this.showConfirmDialog = false;
    this.selectedUser = null;
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

  onCreateUser() {
    this.editingUser = null;
    this.showUserModal = true;
  }

  onEditUser(user: User) {
    this.editingUser = user;
    this.showUserModal = true;
  }

  closeUserModal() {
    this.showUserModal = false;
    this.editingUser = null;
  }

  onSaveUser(payload: CreateUserRequest) {
    if (this.editingUser?.id) {
      this.userService.update(this.editingUser.id, payload).subscribe(() => {
        this.closeUserModal();
        this.loadUsers();
      });
    } else {
      this.userService.create(payload).subscribe(() => {
        this.closeUserModal();
        this.loadUsers();
      });
    }
  }

  get usuariosActivos() {
    return this.users.filter(u => u.estado).length;
  }

  get usuariosInactivos() {
    return this.users.filter(u => !u.estado).length;
  }
}