import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento-login.component',
  imports: [],
  standalone:true,
  templateUrl: './seguimiento-login.component.html',
  styleUrl: './seguimiento-login.component.css'
})
export class SeguimientoLoginComponent {
  constructor(private router: Router) {}

    goToInscripcion() {
    this.router.navigate(['/seguimiento/inscripcion']);
  }


}
