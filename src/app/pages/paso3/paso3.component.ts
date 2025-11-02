import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // 👈 ajusta la ruta según tu estructura
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso3.component',
  imports: [HeaderComponent],
  templateUrl: './paso3.component.html',
  styleUrl: './paso3.component.css'
})
export class Paso3Component {

  constructor(private router: Router) {}
  
  goToPaso4() {
    this.router.navigate(['/paso4']);
  }


}
