export interface Loan{
  usuarioId: number;
  librosIds: number[];
  fechaLimiteDevolucion: string;
  observacion?: string;
}