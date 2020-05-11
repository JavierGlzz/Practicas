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
    col: 'hogarYredencion'
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

const contedorSeccionDiv = document.createElement("div")

const getBody = () => document.body
const getSecciones = () => Object.keys(objetoCurriculum)
const getSubSecciones = (subSeccion) => Object.keys(objetoCurriculum[subSeccion])
const getValorSubSecciones = (seccion, subSeccion) => objetoCurriculum[seccion][subSeccion][key]


const crearEsquema = () => {
  const contedorSeccionDiv = document.createElement("div")
  contedorSeccionDiv.className = 'contenedor'
  console.log(contedorSeccionDiv)

  Object.keys(objetoCurriculum).forEach(seccion => {
    const contedorSeccionDiv = document.createElement("div")
    contedorSeccionDiv.className = seccion
    const seccionParrafo = document.createElement("p")
    seccionParrafo.textContent = seccion.toLocaleUpperCase()
    contedorSeccionDiv.appendChild(seccionParrafo)

    Object.keys(objetoCurriculum[subSeccion]).forEach(subSeccion => {
      console.log(subSeccion, getValorSubSecciones(seccion, subSeccion))
      const subSeccionParrafo = document.createElement("p")
      subSeccionParrafo.textContent =  getValorSubSecciones(seccion, subSeccion)
      contedorSeccionDiv.appendChild(seccionParrafo)
    })
    contedorSeccionDiv.appendChild(contedorSeccionDiv)
  })
  document.body.appendChild(contedorSeccionDiv)
}

let parrafos = document.querySelectorAll("p"); 

parrafos.forEach(parrafo => {
   parrafo.addEventListener('click', () => { 
     alert("alerta"); });
    });

const crearCV = () =>{
Object.keys(objetoCurriculum).forEach(
      key => {
        const contedorSeccionDiv = document.createElement("div")
        const parrafo = document.createElement("p");
        const propiedad = document.createTextNode(key + ":" + objetoCurriculum.datos[key]);
        parrafo.appendChild(propiedad);
        document.querySelector("body").appendChild(parrafo);
      }
    );
    document.body.appendChild(contedorSeccionDiv)
}
