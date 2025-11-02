import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // 👈 ajusta la ruta según tu estructura
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso4.component',
  imports: [HeaderComponent],
  templateUrl: './paso4.component.html',
  styleUrl: './paso4.component.css'
})
export class Paso4Component {


  constructor(private router: Router) {}
  
  goToPaso5() {
    this.router.navigate(['/paso5']);
  }

}
