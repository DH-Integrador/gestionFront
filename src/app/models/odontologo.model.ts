export class Odontologo {
  matricula: string;
  nombre: string;
  apellido: string;

  constructor(matricula: string, nombre: string = '', apellido: string = '') {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  static crearConDatos(matricula: string, nombre: string, apellido: string): Odontologo {
    return new Odontologo(matricula, nombre, apellido);
  }

  static crearConMatricula(matricula: string): Odontologo {
    return new Odontologo(matricula);
  }
}
