export interface Loan{
    id: number;
    usuarioId: number;
    libroId: number;
    fechaPrestamo: string;
    fechaLimiteDevolucion: string;
    fechaRealDevolucion?: string | null;
    observacion: string;
    estado: boolean;
}