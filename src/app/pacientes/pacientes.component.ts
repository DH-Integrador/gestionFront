import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';
import { Paciente } from '../models/paciente.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit{
  pacientes: Paciente[] = [];
  mostrarFormularioCrear: boolean = false;
  nuevoPaciente: Paciente = new Paciente("","","","");
  pacienteEnEdicionIndex: number | null = null;

  constructor(private pacienteService: PacientesService) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(){
    this.pacienteService.getPacientes().subscribe(
      data => {
        console.log(data);
        this.pacientes = data;
      }
    );
  }

  abrirFormularioCrear() {
    this.mostrarFormularioCrear = true;
  }

  resetForm() {
    this.nuevoPaciente = new Paciente("","","","");
  }

  crearPaciente() {
    this.pacienteService.crearPaciente(this.nuevoPaciente).subscribe(
      response => {
        console.log('Paciente creado:', response);
        this.resetForm();
        this.cerrarFormularioCrear();
        this.cargarPacientes();
      },
      error => {
        console.log('Error al crear paciente:', error);
      }
    );
  }
  cerrarFormularioCrear() {
    this.mostrarFormularioCrear = false;
  }

  editar(index: number) {
    this.pacienteEnEdicionIndex = index;
  }
  
  guardarEdicion(index: number) {
    const paciente = this.pacientes[index];
    this.pacienteService.editarPaciente(paciente).subscribe(
      response => {
        console.log('Paciente editado:', response);
        this.cargarPacientes();
      },
      error => {
        console.log('Error al editar paciente:', error);
      }
    );
    this.pacienteEnEdicionIndex = null;
  }

  cancelarEdicion(index: number) {
    this.pacienteEnEdicionIndex = null;
  }

  eliminarPaciente(dni: string) {
    this.pacienteService.eliminarPaciente(dni).subscribe(
      () => {
        console.log('Paciente eliminado');
        this.pacientes = this.pacientes.filter(paciente => paciente.dni !== dni);
        this.cargarPacientes()
      },
      error => {
        console.log('Error al eliminar paciente:', error);
      }
    );
  }


}
