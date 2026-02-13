import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  login(): void {
    if (this.form.invalid) return;

    this.authService.login(this.form.value as any).subscribe({
      next: (resp) => {
        this.authService.guardarToken(resp.token);
        this.router.navigate(['/home/dashboard']);
      },
      error: (err) => {
        console.error('Credenciales inválidas', err);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}
