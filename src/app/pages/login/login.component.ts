import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  goToPaso1() {
    this.router.navigate(['/paso1']);
  }

  
}
