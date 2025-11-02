import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { SeguimientoValidarSolicitudComponent } from '../seguimiento-validar-solicitud/seguimiento-validar-solicitud.component';

@Component({
  selector: 'app-seguimiento-inscripcion',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './seguimiento-inscripcion.component.html',
  styleUrls: ['./seguimiento-inscripcion.component.css']
})
export class SeguimientoInscripcionComponent {

  constructor(private dialog: MatDialog) {}

  abrirPopup() {
    this.dialog.open(SeguimientoValidarSolicitudComponent, {
      panelClass: 'custom-dialog',  // 👈 muy importante
      width: '100vw',              // 👈 rompe límites
      height: '100vh',             // 👈 altura completa
      maxWidth: '100vw',           // 👈 evita el tope de Angular Material
      maxHeight: '100vh',          // 👈 idem
      autoFocus: false
    });
  }
}
