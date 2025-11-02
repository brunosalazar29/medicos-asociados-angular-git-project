import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

cierra_sesion() {
  const rutaActual = this.router.url;

  if (rutaActual === '/seguimiento/inscripcion') {
    this.router.navigate(['/seguimiento']);
  } else {
    this.router.navigate(['/login']);
  }
}


  

}
