import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-seguimiento-validar-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './seguimiento-validar-solicitud.component.html',
  styleUrls: ['./seguimiento-validar-solicitud.component.css']
})
export class SeguimientoValidarSolicitudComponent {

  constructor(private dialogRef: MatDialogRef<SeguimientoValidarSolicitudComponent>) {}

  cerrarPopup() {
    this.dialogRef.close();
  }
}
