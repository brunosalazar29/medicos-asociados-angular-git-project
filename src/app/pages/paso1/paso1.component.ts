import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // 👈 ajusta la ruta según tu estructura
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso1.component',
  imports: [HeaderComponent],
  templateUrl: './paso1.component.html',
  styleUrl: './paso1.component.css'
})
export class Paso1Component {
    constructor(private router: Router) {}

  goToPaso2() {
    this.router.navigate(['/paso2']);
  }

}
