const titulo = document.getElementById("titulo");

const nombreDuenno = document.getElementById("nombreDuenno");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipoMascota = document.getElementById("tipoMascota");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");

const boton = document.getElementById("boton");

/* titulo.innerHTML = `<h1>Desafío Lista de Animales</h1>`; */

boton.addEventListener("click", () => {
  const tipoAnimal = tipoMascota.value;
  if (tipoAnimal === "perro") {
    const Perro = new Mascota(
      nombreDuenno.value,
      direccion.value,
      telefono.value,
      tipoAnimal,
      nombreMascota.value,
      motivo.value
    );
    mensaje.innerHTML = Perro.datosPropietario();
  } else if (tipoAnimal === "gato") {
    const Gato = new Mascota(
      nombreDuenno.value,
      direccion.value,
      telefono.value,
      tipoAnimal,
      nombreMascota.value,
      motivo.value
    );
    mensaje.innerHTML = Gato.datosPropietario();
  } else if (tipoAnimal === "conejo") {
    const Conejo = new Mascota(
      nombreDuenno.value,
      direccion.value,
      telefono.value,
      tipoAnimal,
      nombreMascota.value,
      motivo.value
    );
    mensaje.innerHTML = Conejo.datosPropietario();
  }
});

class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this._nombre}. El domicilio es ${this._direccion}. El número de teléfono es: ${this._telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `“El tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreAnimal = nombreAnimal;
    this._enfermedad = enfermedad;
  }
  get nombreAnimal() {
    return this._nombreAnimal;
  }
  set setNombreAnimal(v) {
    this._nombreAnimal = v;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set setEnfermedad(v) {
    this._enfermedad = v;
  }
}
