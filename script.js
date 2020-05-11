  const arreglo = [
    {
      name: 'javier',
      apellP: 'gonzalez'
    }
  ]


const aplicaReduce = arreglo.reduce((objetoNuevo, nombre) => {
  const objeto = {};
   objeto[nombre.name] = nombre.apellP
   objetoNuevo.push(objeto);
    return objetoNuevo
  }, []);

  console.log(aplicaReduce);
  
