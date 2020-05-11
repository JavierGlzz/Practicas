Reduce, map, filter chain
Enrique López Callejas 22 abr.
script.js
JavaScript
Comentarios de la clase

const nombres = [4, 7, 13, 8];
const nombresObj = [
  {
    name: 'javier',
    number: 4
  },
  {
    name: 'valeria',
    number: 7
  },
  {
    name: 'enrique',
    number: 13
  },
  {
    name: 'jorge',
    number: 8
  }
];

/// FILTER

const nombresQueSonMayoresA4 = nombres.filter((pepe, indexcoreanodepepe, arregloQueEsElqueIteramos) => {

  return pepe > 0;
})

const nombresQueSonMayoresA4ForEach = nombres.filter(nombre => {
  return nombre > 4;
})


const nombresQueSonMayoresA4Obj = nombresObj.filter(nombreObj => nombreObj.number > 1 && nombreObj.name === 'Enrique')

/// ACABA FILTER

/// MAP
let temporal = Array.from(nombresObj);
temporal.map((nombre, index) => {
  nombre.otroValor = index;
  nombre.otro = index + 1;
  nombre.otroMas = index + 2;
  return nombre;
})


// FINALIZA MAP

// REDUCE

const sumaDeLosNumeros = nombres.reduce((accumulator, item) => {
  return accumulator += item;
}, 0);

// {Javier: 4, Valeria: 7, Enrique: 13, Jorge: 8} 
const objetoConNombreYNumeroComoAtributo = nombresObj.reduce((objetoNuevo, nombre) => {
  objetoNuevo[nombre.name] = nombre.number;
  return objetoNuevo;
}, {});

const objetoConNombreYNumeroComoAtributoArray = nombresObj.reduce((objetoNuevo, nombre) => {
  const objeto = {};
  objeto[nombre.name] = nombre.number;
  objetoNuevo.push(objeto);
  return objetoNuevo;
}, []);

// END REDUCE

// CHAIN CHAINING
const nombresQueSonMayoresA4ObjChain = nombresObj
  .filter(nombreObj => nombreObj.number > 7)
  .reduce((objetoNuevo, nombre) => {
    const objeto = {};
    objeto[nombre.name] = nombre.number;
    objetoNuevo.push(objeto);
    return objetoNuevo;
  }, [])
  .reduce((objetoNuevo, nombre, index) => {
    const key = Object.keys(nombre)[0]
    const value = Object.values(nombre)[0]
    console.log(value);
    objetoNuevo[key] = value + 'refactorized';
    return objetoNuevo;
  }, {});

console.log(nombresQueSonMayoresA4ObjChain);