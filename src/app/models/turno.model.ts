import { Odontologo } from "./odontologo.model";
import { Paciente } from "./paciente.model";

export class Turno {
  id?: number;
  odontologo: Odontologo;
  paciente: Paciente;
  fecha: Date;
  hora?: string;

  constructor(odontologo: Odontologo, paciente: Paciente, fecha: Date) {
    this.odontologo = odontologo;
    this.paciente = paciente;
    this.fecha = fecha;
  }
}
