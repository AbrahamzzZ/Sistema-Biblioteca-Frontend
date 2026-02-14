import { Books } from "../books";
import { User } from "../user";

export interface LoanDetail {
  id: number;
  usuario: User;
  libros: Books[];
  fechaPrestamo: string;
  fechaLimiteDevolucion: string;
  fechaRealDevolucion?: string | null;
  observacion?: string;
  estado: boolean;
}