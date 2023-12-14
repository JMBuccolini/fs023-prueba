// //SCOPES o contextos
// //CONTEXTO GLOBAL
// const letras = "Juan" //ESTO SE INICIA CON UN STRING

// {

//     let variableInterna = "Ricardo"

//     console.log('variable dentro de otro contexto: ',variableInterna)
// }

// const nombre = function(){
//     console.log('HOlis')
// }

// nombre()

// nombre = 12345

class Personaje {
  constructor(nombre, lado, arma) {
    //propiedades y valores
    this.nombre = nombre;
    this.lado = lado;
    this.arma = arma;
  }
  //Zona de Protoypes o métodos
  saludoPersonaje(){
    console.log(`Mi nombre es ${this.nombre}`)
  }

  static counter = 0;

  contadorEstatico(){
    console.log(Personaje.counter++)
  }

}

const Yoda = new Personaje('Yoda','Luminoso','Sable Verde')
const ObiWan = new Personaje('Obi-Wan Kenobi','Luminoso','Sable Azul')
const DarthVader = new Personaje('Darth Vader','Oscuro','Sable Rojo')
const Luke = new Personaje('Luke Skywalker','Luminoso','Sable Verde')
// ObiWan.saludoPersonaje()
// Yoda.saludoPersonaje()

// console.log(Yoda.arma)
// console.log(ObiWan.lado)
// console.log(DarthVader.nombre)

ObiWan.contadorEstatico()
Yoda.contadorEstatico()
DarthVader.contadorEstatico()

console.log(Luke )

//ESTOS COMENTARIOS VIENEN PORQUE ESTAMOS HACIENDO CAMBIOS