import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../services/turnos.service';
import { Turno } from '../models/turno.model';
import { PacientesService } from '../services/pacientes.service';
import { OdontologosService } from '../services/odontologos.service';
import { Domicilio, Paciente } from '../models/paciente.model';
import { Odontologo } from '../models/odontologo.model';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit{
  public mostrarFormulario: boolean = false;
  public odontologo: Odontologo = Odontologo.crearConMatricula("");
  public domicilio: Domicilio = {} as Domicilio;
  public paciente: Paciente = Paciente.crearConDni("");
  public turno: Turno = new Turno(this.odontologo, this.paciente, new Date());
  public turnos: Turno[] = [];
  public pacientes: Paciente[] = [];
  public odontologos: Odontologo[] = [];
  public turnoEnEdicionIndex: number | null = null;

  constructor(private turnosService: TurnosService, private pacientesService: PacientesService, private odontologosService: OdontologosService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });

    this.odontologosService.getOdontologos().subscribe(odontologos => {
      this.odontologos = odontologos;
    });

    this.cargarTurnos();
  }

  cargarTurnos(){
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

  resetForm() {
    this.turno = new Turno(this.odontologo, this.paciente, new Date());
  }

  guardarTurno() {

    const paciente = this.obtenerPaciente(this.paciente);
    const odontologo = this.obtenerOdontologo(this.odontologo);

    this.turno.paciente = paciente;
    this.turno.odontologo = odontologo;

    this.turnosService.postTurno(this.turno).subscribe(turno => {
      console.log(turno);

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

  eliminarTurno(turno: Turno) {
    const id = turno.id!;
    this.turnosService.deleteTurno(id).subscribe(
      () => {
        console.log('Turno eliminado');
        this.turnos = this.turnos.filter(turno => turno.id !== id);
        this.cargarTurnos();
      },
      error => {
        console.log('Error al eliminar turno:', error);
      }
    );
  }

  editar(index: number) {
    this.turnoEnEdicionIndex = index;
  }

  convertirHora(hora: string): String {
    const [horas, minutos] = hora.split(':').map(Number);
    const ampm = horas >= 12 ? 'pm' : 'am';
    const hora12 = horas % 12 || 12;
    const minutosStr = minutos.toString().padStart(2, '0');
    return `${hora12}:${minutosStr} ${ampm}`;
  }

  guardarEdicion(index: number) {
    const turno = this.turnos[index];
    this.turnosService.editarTurno(turno).subscribe(
      response => {
        console.log('Turno editado:', response);
        this.cargarTurnos();
      },
      error => {
        console.log('Error al editar turno:', error);
      }
    );
    this.turnoEnEdicionIndex = null;
  }

  cancelarEdicion(index: number) {
    this.turnoEnEdicionIndex = null;
  }

}
