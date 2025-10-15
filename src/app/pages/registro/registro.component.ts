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


  /**
   * Función que se ejecuta al enviar el formulario.
   */
  registrar(): void {
    // 1. Validar que los correos coincidan
    if (this.registro.correo !== this.registro.confirmCorreo) {
      alert('Error: Los correos electrónicos no coinciden.');
      return; // Detiene la ejecución
    }

    // 2. Validar que las contraseñas coincidan
    if (this.registro.password !== this.registro.confirmPassword) {
      alert('Error: Las contraseñas no coinciden.');
      return; // Detiene la ejecución
    }

    // Si todo está correcto, muestra los datos en la consola (simulación de envío)
    console.log('Formulario válido. Enviando datos:', this.registro);
    alert('¡Registro exitoso! (Datos mostrados en la consola)');
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
