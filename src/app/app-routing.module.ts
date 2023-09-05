import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OdontologosComponent } from './odontologos/odontologos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { TurnosComponent } from './turnos/turnos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'odontologos', component: OdontologosComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'turnos', component: TurnosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
