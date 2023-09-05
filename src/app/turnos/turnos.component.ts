import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../services/turnos.service';
import { Turno } from '../models/turno.model';
import { PacientesService } from '../services/pacientes.service';
import { OdontologosService } from '../services/odontologos.service';
import { Paciente } from '../models/paciente.model';
import { Odontologo } from '../models/odontologo.model';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit{
  public mostrarFormulario: boolean = false;
  public odontologo: Odontologo = new Odontologo("", "", "");
  public paciente: Paciente = new Paciente("", "", "", "");
  public turno: Turno = new Turno(this.odontologo, this.paciente, new Date(), 0);
  public turnos: Turno[] = [];
  public pacientes: Paciente[] = [];
  public odontologos: Odontologo[] = [];

  constructor(private turnosService: TurnosService, private pacientesService: PacientesService, private odontologosService: OdontologosService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });

    this.odontologosService.getOdontologos().subscribe(odontologos => {
      this.odontologos = odontologos;
    });

    this.turnosService.getTurnos().subscribe(turnos => {
      console.log(turnos);

     this.turnos = turnos;
    });
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
  }

  cerrarFormulario() {
    this.mostrarFormulario = false;
  }

  guardarTurno() {
    this.turnosService.postTurno(this.turno).subscribe(turno => {
      this.turnos.push(turno);
      this.cerrarFormulario();
    });
  }

  obtenerPaciente(paciente: Paciente): Paciente {
    return this.pacientes.find(paciente => paciente.dni == paciente.dni)!;
  }

  obtenerOdontologo(odontologo: Odontologo): Odontologo {
    return this.odontologos.find(odontologo => odontologo.matricula == odontologo.matricula)!;
  }

}
