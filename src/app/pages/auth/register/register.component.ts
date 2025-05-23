import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nombre = '';
  correo = '';
  contrasena = '';
  rol = '';
  error = '';
  success = '';

  constructor(private http: HttpClient, private router: Router) {}


onSubmit() {
  this.error = '';
  this.success = '';
  this.http.post<any>('/api/register', {
    nombre: this.nombre,
    correo: this.correo,
    contrasena: this.contrasena,
    rol: this.rol || 'usuario'
  }).subscribe({
    next: res => {
      this.success = '¡Registro exitoso!';
      // Guarda solo el userId, ya que es lo que devuelve el backend
      localStorage.setItem('usuario', JSON.stringify({ userId: res.userId, nombre: this.nombre, correo: this.correo, rol: this.rol || 'usuario' }));
      this.router.navigate(['/preHome/Pre-Home']);
    },
    error: err => {
      this.error = err.error?.error || 'Error al registrar';
    }
  });
}
}