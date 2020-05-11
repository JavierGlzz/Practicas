//Aqui se crea el DIV principal
const principal = document.createElement('div');
principal.className = 'principal';
principal.id = 'primero';
//Aqui se crea el DIV que contiene todo
const contenedor = document.createElement('div');
contenedor.className = 'contenedor';
contenedor.id = 'contenedor';

const parrafo = document.createElement('h2');
parrafo.textContent = 'La computadora de Javier';

const boton = document.createElement('button');
boton.textContent = 'Encender';
//Este es el div de CV
const contedorSeccionDiv = document.createElement("div");
contedorSeccionDiv.className = 'ClaseCV';
contedorSeccionDiv.id = 'ClaseCV'

const botonCV = document.createElement('button');
botonCV.textContent = 'CV';
botonCV.addEventListener('click', () => {
  contenedor.appendChild(botonCV);
});

const botonJuego = document.createElement('button');
botonJuego.textContent = 'Juego';

//Borrar todo
const botonBorrar = document.createElement('button');
botonBorrar.textContent = 'Borrar';
botonBorrar.addEventListener('click', () => {
  location.reload();
});

//Agregar botones al contenedor
boton.addEventListener('click', () => {
  contenedor.appendChild(botonJuego);
  contenedor.appendChild(botonCV);
});

botonJuego.addEventListener('click', () => {
  const crearJuego = (selectUsuario) => {
    const numeroGanador = Math.floor(Math.random()*selectUsuario) + 1;  
    const contenedorJuego = document.createElement('div');
    contenedorJuego.className = 'contenedorJuego';
    contenedorJuego.id = 'contenedorJuego';
    for(let i=1; i <= selectUsuario; i++){
      const parrafo = document.createElement('p');
      parrafo.className = 'cuadro';
      if(i === numeroGanador){
        parrafo.textContent = i + 'g';
        parrafo.addEventListener('click', () => {
          alert('ganador'); 
        });
      }else{
        parrafo.textContent = i;
        parrafo.addEventListener('click', () => {
          alert('perdedor');
        });    
      }
      contenedorJuego.appendChild(parrafo);
      contenedor.appendChild(contenedorJuego);
    }
  }
  crearJuego(prompt('Cuantos cuadros'));
  let traerPadre = document.getElementById('contenedor');
  let traerHijo = document.getElementById('ClaseCV');
  traerPadre.replaceChild(contenedorJuego, ClaseCV);
});

botonCV.addEventListener('click', () =>{
const objetoCurriculum = {
    datos:{
      nombre: 'Javier',
      apellP: 'Gonzalez',
      apellM: 'Gomez',
      edad: 26,
      genero: 'Masculino'
      },
    domicilio:{
      calle: 'AV Mario',
      numero: 61,
      col: 'hogar y redencion'
      },
    educacion:{
      universidad: ['ESCOM', '2014/2019', 'Ing. en Sistemas', 'Pasante'],
      prepa: ['CECYT11', '2009/2012', 'C563427', 'Tec. en Telecomunicaciones']
      },
    experiencia:{
      trabajo: 'Indra',
      periodo: '1 año',
      descripcion: "Estuve trabajando en el area de CyberSeguridad"
      },
    skills:{
      html: 'medio',
      js: 'bajo'
    }
  };
  Object.keys(objetoCurriculum.datos).forEach(
    key => {
      const parrafo = document.createElement("p");
      const propiedad = document.createTextNode(":" + objetoCurriculum.datos[key]);
      parrafo.appendChild(propiedad);
      contedorSeccionDiv.appendChild(parrafo);
      contenedor.appendChild(contedorSeccionDiv);
      
    }
  );
  
  let traerPadre = document.getElementById('contenedor');
  let traerHijo = document.getElementById('contenedorJuego');
  traerPadre.replaceChild(ClaseCV, contenedorJuego);
  
  
});



principal.appendChild(contenedor);
principal.appendChild(botonBorrar)
contenedor.appendChild(parrafo);
contenedor.appendChild(boton);
document.body.appendChild(principal);