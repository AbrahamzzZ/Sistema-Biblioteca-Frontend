export interface User{
  id: number;
  nombre_Completo: string;
  cedula: string;
  correoElectronico: string;
  direccion: string;
  telefono: string;
  estado: boolean;
}

export interface CreateUserRequest {
  nombreCompleto: string;
  cedula: string;
  correoElectronico: string;
  direccion?: string;
  telefono?: string;
}