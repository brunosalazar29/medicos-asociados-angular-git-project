import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {

  constructor(private router: Router) {} // 💥 método clásico 100% compatible

  registro = {
    correo: '',
    confirmCorreo: '',
    password: '',
    confirmPassword: '',
    nombres: '',
    apellidos: '',
    telefono1: '',
    telefono2: '',
    tipoDoc: '',
    nroDoc: '',
    terminos: false,
    cookies: false,
  };

  registrar() {
    alert('✅ Registro completado correctamente, PAPU!');
    console.log('Datos enviados:', this.registro);
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
