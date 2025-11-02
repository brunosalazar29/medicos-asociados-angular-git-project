import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SeguimientoLoginComponent } from './pages/seguimiento-login/seguimiento-login.component';
import { Paso1Component } from './pages/paso1/paso1.component';
import { HeaderComponent } from './pages/header/header.component';
import { Paso2Component } from './pages/paso2/paso2.component';
import { Paso3Component } from './pages/paso3/paso3.component';
import { Paso4Component } from './pages/paso4/paso4.component';
import { SeguimientoInscripcionComponent } from './pages/seguimiento-inscripcion/seguimiento-inscripcion.component'; 
import { Paso5Component } from './pages/paso5/paso5.component';

import { SeguimientoValidarSolicitudComponent } from './pages/seguimiento-validar-solicitud/seguimiento-validar-solicitud.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'seguimiento', component: SeguimientoLoginComponent },
  { path: 'paso1', component: Paso1Component },
  { path: 'header', component: HeaderComponent },
  {path: 'paso2', component: Paso2Component},
  {path: 'paso3', component: Paso3Component} , 
  {path: 'paso4', component: Paso4Component},
  {path: 'paso5', component: Paso5Component},
  {path: 'seguimiento/inscripcion', component: SeguimientoInscripcionComponent },
  {path: 'seguimiento/validar', component: SeguimientoValidarSolicitudComponent}

];
