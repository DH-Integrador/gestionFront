import { Component, OnInit } from '@angular/core';
import { Odontologo } from '../models/odontologo.model';
import { OdontologosService } from '../services/odontologos.service';

@Component({
  selector: 'app-odontologos',
  templateUrl: './odontologos.component.html',
  styleUrls: ['./odontologos.component.css']
})
export class OdontologosComponent implements OnInit{
  odontologos: Odontologo[] = [];
  mostrarFormularioCrear: boolean = false;
  nuevoOdontologo: Odontologo = new Odontologo("","","");
  odontologoEnEdicionIndex: number | null = null;

  constructor(private odontologosService: OdontologosService) { }

  ngOnInit(): void {
    this.cargarOdontologos();
  }

  cargarOdontologos(){
    this.odontologosService.getOdontologos().subscribe(
      data => {
        console.log(data);
        this.odontologos = data;
      }
    );
  }

  abrirFormularioCrear() {
    this.mostrarFormularioCrear = true;
  }

  cerrarFormularioCrear() {
    this.mostrarFormularioCrear = false;
  }

  resetForm() {
    this.nuevoOdontologo = new Odontologo("","","");
  }

  crearOdontologo() {
    this.odontologosService.crearOdontologo(this.nuevoOdontologo).subscribe(
      response => {
        console.log('Odontólogo creado:', response);
        this.resetForm();
        this.cerrarFormularioCrear();
        this.cargarOdontologos();
      },
      error => {
        console.log('Error al crear odontólogo:', error);
      }
    );
  }

  editar(index: number) {
    this.odontologoEnEdicionIndex = index;
  }

  guardarEdicion(index: number) {
    const odontologo = this.odontologos[index];
    this.odontologosService.editarOdontologo(odontologo).subscribe(
      response => {
        console.log('Odontólogo editado:', response);
        this.cargarOdontologos();
      },
      error => {
        console.log('Error al editar odontólogo:', error);
      }
    );
    this.odontologoEnEdicionIndex = null;
  }

  cancelarEdicion(index: number) {
    this.odontologoEnEdicionIndex = null;
  }

  eliminarOdontologo(matricula: string) {
    this.odontologosService.eliminarOdontologo(matricula).subscribe(
      () => {
        console.log('Odontólogo eliminado');
        this.odontologos = this.odontologos.filter(odontologo => odontologo.matricula !== matricula);
        this.cargarOdontologos()
      },
      error => {
        console.log('Error al eliminar odontólogo:', error);
      }
    );
  }
}
