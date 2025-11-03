import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(private router: Router, private medicoService: MedicoService) {}

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
    datos: false,
  };

  registrar(): void {
    // 🧩 Validaciones básicas
    if (
      !this.registro.correo ||
      !this.registro.confirmCorreo ||
      !this.registro.password ||
      !this.registro.confirmPassword ||
      !this.registro.nombres ||
      !this.registro.apellidos ||
      !this.registro.telefono1 ||
      !this.registro.tipoDoc ||
      !this.registro.nroDoc
    ) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // ✉️ Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.registro.correo)) {
      alert('El formato del correo electrónico no es válido.');
      return;
    }

    // ✉️ Confirmar correo
    if (this.registro.correo !== this.registro.confirmCorreo) {
      alert('Los correos electrónicos no coinciden.');
      return;
    }

    // 🔐 Validar contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(this.registro.password)) {
      alert(
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.'
      );
      return;
    }

    // 🔐 Confirmar contraseña
    if (this.registro.password !== this.registro.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // ✅ Validar términos, datos y cookies
    if (!this.registro.terminos || !this.registro.datos || !this.registro.cookies) {
      alert('Debes aceptar los términos, el tratamiento de datos y la política de cookies.');
      return;
    }

        // 🔹 Validar que los correos coincidan
    if (this.registro.correo !== this.registro.confirmCorreo) {
      alert('❌ Los correos electrónicos no coinciden.');
      return;
    }

    // 🔹 Validar que las contraseñas coincidan
    if (this.registro.password !== this.registro.confirmPassword) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    // 🧠 Si todo está bien, armar payload
    const payload = {
      email: this.registro.correo,
      password: this.registro.password,
      nombres: this.registro.nombres,
      apellidos: this.registro.apellidos,
      telefono1: this.registro.telefono1,
      telefono2: this.registro.telefono2,
      tipodoc: this.registro.tipoDoc,
      nrodocumento: this.registro.nroDoc,
      check_termino: this.registro.terminos ? 1 : 0,
      check_cookie: this.registro.cookies ? 1 : 0,
      check_datos: this.registro.datos ? 1 : 0,
    };

    console.log('📤 Enviando datos:', payload);

    // 🚀 Enviar al backend NestJS
    this.medicoService.registrarMedico(payload).subscribe({
      next: (res) => {
        console.log('✅ Registro exitoso:', res);
        alert('🎉 Médico registrado correctamente');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Error al registrar:', err);
        alert(
          err?.error?.message || 'Hubo un error al registrar el médico. Revisa los datos e inténtalo nuevamente.'
        );
      },
    });
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
