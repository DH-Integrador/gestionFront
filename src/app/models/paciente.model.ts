export class Paciente {
  nombre: string;
  apellido: string;
  dni: string;
  domicilio: string;

  constructor(nombre: string, apellido: string, dni: string, domicilio: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.domicilio = domicilio;
  }
}
