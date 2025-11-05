import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasenia: string = '';
  mensajeError: string = '';

  constructor(private router: Router, private medicoService: MedicoService) {}

  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  goToPaso1() {
    if (!this.usuario || !this.contrasenia) {
      this.mensajeError = 'Por favor, complete los campos.';
      return;
    }

    this.medicoService.login(this.usuario, this.contrasenia).subscribe({
      next: (resp) => {
        if (resp.success && resp.data) {
          localStorage.setItem('medico', JSON.stringify(resp.data));
          this.router.navigate(['/paso1']);
        } else {
          this.mensajeError = 'Credenciales incorrectas.';
        }
      },
      error: (err) => {
        console.error(err);
        this.mensajeError = 'Error al conectar con el servidor.';
      },
    });
  }
}
