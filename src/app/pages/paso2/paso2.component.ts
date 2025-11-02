import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // 👈 ajusta la ruta según tu estructura

import { Router } from '@angular/router';

@Component({
  selector: 'app-paso2.component',
  imports: [HeaderComponent],
  templateUrl: './paso2.component.html',
  styleUrl: './paso2.component.css'
})
export class Paso2Component {
    constructor(private router: Router) {}

 goToPaso1() {
    this.router.navigate(['/paso1']);
  }

  goToPaso3() {
    this.router.navigate(['/paso3']);
  }

}
