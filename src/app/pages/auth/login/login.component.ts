import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo = '';
  contrasena = '';
  error = '';

  
constructor(private authService: AuthService, private router: Router) {}


 onSubmit() {
  this.error = '';
  this.authService.login(this.correo, this.contrasena).subscribe({
    next: usuario => {
      // Guarda el usuario en localStorage
      localStorage.setItem('usuario', JSON.stringify(usuario));
      // Redirige a la página principal
      this.router.navigate(['/preHome/Pre-Home']);
    },
    error: err => {
      this.error = err.error?.error || 'Error al iniciar sesión';
    }
  });
}
}
