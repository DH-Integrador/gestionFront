export type Domicilio = {
  calle: string;
  numero: string;
  localidad: string;
  provincia: string;
}

export class Paciente {
  nombre: string;
  apellido: string;
  dni: string;
  domicilio: Domicilio;

  constructor(nombre: string = '', apellido: string = '', dni: string, domicilio: Domicilio = { calle: '', numero: '', localidad: '', provincia: '' }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.domicilio = domicilio;
  }

  static crearConDatos(nombre: string, apellido: string, dni: string, domicilio: Domicilio): Paciente {
    return new Paciente(nombre, apellido, dni, domicilio);
  }

  static crearConDni(dni: string): Paciente {
    return new Paciente('', '', dni);
  }
}
