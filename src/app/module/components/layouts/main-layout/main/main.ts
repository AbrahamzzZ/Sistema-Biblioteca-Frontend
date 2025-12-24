import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Menu } from '../../../../../core/interfaces/menu';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main implements OnInit{
 @ViewChild('sidenav') sidenav!: MatSidenav;
  private readonly router = inject(Router);
  isCollapsed = true;
  userName = "";
  tipoUsuario: string = '';
  menuItems: Menu[] = [
    { label: 'Dashboard', icon: 'svg/dashboard.svg', url: '/home/dashboard' },
    { label: 'Usuarios', icon: 'svg/user.svg', url: '/home/client' },
    { label: 'Préstamos', icon: 'svg/load.svg', url: '/home/loan' }
  ];

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsed = JSON.parse(user);
      this.userName = parsed.nombre;
    }
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
